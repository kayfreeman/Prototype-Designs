
import React, { useState } from 'react';
import { Bot, Sparkles, Send, BookOpen, AlertCircle, ExternalLink, RefreshCcw } from 'lucide-react';
import { getRegulatoryGuidance, analyzeContractRisk } from '../services/geminiService';

const RegulatoryIntelligence: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<{text: string, sources: any[]} | null>(null);
  const [mode, setMode] = useState<'guidance' | 'analysis'>('guidance');
  const [contractText, setContractText] = useState('');

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic && mode === 'guidance') return;
    if (!contractText && mode === 'analysis') return;

    setLoading(true);
    try {
      if (mode === 'guidance') {
        const result = await getRegulatoryGuidance(topic);
        setResponse(result);
      } else {
        const result = await analyzeContractRisk(contractText);
        setResponse({ text: result, sources: [] });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-200px)] animate-in fade-in duration-500">
      {/* Input Panel */}
      <div className="flex flex-col space-y-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <Sparkles size={20} />
            </div>
            <h3 className="text-xl font-bold">Regulatory AI Guidance</h3>
          </div>

          <div className="flex p-1 bg-slate-100 rounded-xl mb-6">
            <button 
              onClick={() => { setMode('guidance'); setResponse(null); }}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold transition-all ${mode === 'guidance' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              <BookOpen size={16} /> Regulatory Query
            </button>
            <button 
              onClick={() => { setMode('analysis'); setResponse(null); }}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold transition-all ${mode === 'analysis' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              <AlertCircle size={16} /> Document Analysis
            </button>
          </div>

          <form onSubmit={handleAsk} className="space-y-4">
            {mode === 'guidance' ? (
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">What compliance area do you need help with?</label>
                <input 
                  type="text" 
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g. Overseas buyer from higher-risk jurisdiction"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm"
                />
              </div>
            ) : (
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Paste document text for risk analysis</label>
                <textarea 
                  value={contractText}
                  onChange={(e) => setContractText(e.target.value)}
                  placeholder="Paste tenancy agreement, contract or company structure info..."
                  className="w-full h-48 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm resize-none"
                />
              </div>
            )}
            
            <button 
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 disabled:opacity-50 transition-all shadow-lg shadow-blue-600/20"
            >
              {loading ? <RefreshCcw className="animate-spin" size={20} /> : <><Send size={18} /> Ask Intelligence Engine</>}
            </button>
          </form>
        </div>

        <div className="bg-slate-900 text-white p-6 rounded-2xl">
          <h4 className="flex items-center gap-2 text-sm font-bold mb-4">
            <AlertCircle size={16} className="text-blue-400" /> 
            Compliance Alerts (UK-HMRC)
          </h4>
          <ul className="space-y-3 text-xs text-slate-300">
            <li className="flex gap-2">
              <span className="text-blue-400 font-bold">•</span>
              New mandate: Landlord screening required for all renewals post-May 2025.
            </li>
            <li className="flex gap-2">
              <span className="text-blue-400 font-bold">•</span>
              Stricter UBO checks for transactions over £1M in London regions.
            </li>
          </ul>
        </div>
      </div>

      {/* Output Panel */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        <div className="p-6 border-b border-slate-100 flex items-center gap-3">
          <Bot size={20} className="text-blue-600" />
          <h3 className="text-lg font-bold">PropComply Engine Response</h3>
        </div>

        <div className="flex-1 overflow-y-auto p-8 prose prose-slate max-w-none">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-full text-slate-400 space-y-4">
              <div className="relative">
                <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
                <Bot className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-600" size={20} />
              </div>
              <p className="text-sm font-medium animate-pulse">Running proprietary risk embeddings...</p>
            </div>
          ) : response ? (
            <div className="space-y-6">
              <div className="whitespace-pre-wrap text-slate-700 leading-relaxed text-sm">
                {response.text}
              </div>
              
              {response.sources.length > 0 && (
                <div className="pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Regulatory Sources Found</h4>
                  <div className="space-y-2">
                    {response.sources.map((chunk: any, i: number) => (
                      chunk.web && (
                        <a 
                          key={i} 
                          href={chunk.web.uri} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 bg-slate-50 border border-slate-100 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-all group"
                        >
                          <span className="text-xs font-semibold text-slate-700 group-hover:text-blue-700 truncate mr-2">{chunk.web.title}</span>
                          <ExternalLink size={14} className="text-slate-400 shrink-0" />
                        </a>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-slate-300">
              <Bot size={48} className="mb-4 opacity-20" />
              <p className="text-sm font-medium text-center max-w-[200px]">Enter a query to generate AI compliance guidance.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegulatoryIntelligence;
