
import React, { useState } from 'react';
import { 
  ShieldAlert, Mail, Lock, ArrowRight, Github, 
  CheckCircle2, Building2, ShieldCheck, ArrowLeft,
  ChevronRight, Sparkles
} from 'lucide-react';

interface AuthPageProps {
  onAuthSuccess: () => void;
  onBackToLanding: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onAuthSuccess, onBackToLanding }) => {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      onAuthSuccess();
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-white font-sans selection:bg-blue-100">
      {/* Left Panel: Content & Value Prop */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 p-16 flex-col justify-between relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-indigo-500 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10">
          <button 
            onClick={onBackToLanding}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold text-sm">Back to Website</span>
          </button>
          
          <div className="flex items-center gap-3 mb-20">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-2xl shadow-lg shadow-blue-500/20">
              <ShieldAlert size={28} className="text-white" />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-white">PropComply <span className="text-blue-400">AI</span></h1>
          </div>

          <div className="space-y-12 max-w-lg">
            <h2 className="text-5xl font-black text-white leading-tight">
              {mode === 'signin' ? 'Welcome back to the Compliance Hub.' : 'Join the future of Property Compliance.'}
            </h2>
            
            <div className="space-y-6">
              <BenefitItem 
                icon={<ShieldCheck className="text-blue-400" />}
                title="HMRC Compliant Audits"
                desc="Every check is logged and ready for your annual HMRC inspection."
              />
              <BenefitItem 
                icon={<Sparkles className="text-blue-400" />}
                title="AI Biometric Verification"
                desc="Unmatchable accuracy in identifying fraudulent identity documents."
              />
              <BenefitItem 
                icon={<Building2 className="text-blue-400" />}
                title="Multi-Branch Management"
                desc="Seamlessly manage compliance across all your agency locations."
              />
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between pt-12 border-t border-slate-800">
          <div className="flex -space-x-3">
            {[1,2,3].map(i => (
              <img key={i} src={`https://i.pravatar.cc/100?u=${i+10}`} className="w-8 h-8 rounded-full border-2 border-slate-900 shadow-sm" alt="User" />
            ))}
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white border-2 border-slate-900">+4k</div>
          </div>
          <p className="text-slate-500 text-xs font-bold">Used by top UK estate agencies daily.</p>
        </div>
      </div>

      {/* Right Panel: Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-slate-50/50">
        <div className="w-full max-w-md space-y-10">
          <div className="lg:hidden flex items-center justify-center gap-3 mb-10">
            <ShieldAlert size={32} className="text-blue-600" />
            <h1 className="text-2xl font-black tracking-tight text-slate-900">PropComply <span className="text-blue-600">AI</span></h1>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-black text-slate-900 tracking-tight">
              {mode === 'signin' ? 'Sign In' : 'Create Agency Account'}
            </h3>
            <p className="text-slate-500 font-medium mt-2">
              {mode === 'signin' ? "Don't have an account yet?" : "Already have an account?"}
              <button 
                onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
                className="ml-2 text-blue-600 font-bold hover:underline"
              >
                {mode === 'signin' ? 'Start Free Trial' : 'Sign In instead'}
              </button>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SocialButton icon={<Github size={20} />} label="Microsoft 365" />
            <SocialButton icon={<img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />} label="Google" />
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#F8FAFC] px-4 text-slate-400 font-bold tracking-widest">Or continue with email</span></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {mode === 'signup' && (
              <div className="space-y-1.5">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Agency Name</label>
                <div className="relative group">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                  <input 
                    required 
                    type="text" 
                    placeholder="e.g. Knight Frank London" 
                    className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-600 transition-all font-medium text-slate-900" 
                  />
                </div>
              </div>
            )}
            
            <div className="space-y-1.5">
              <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Work Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                <input 
                  required 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-600 transition-all font-medium text-slate-900" 
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Password</label>
                {mode === 'signin' && <button type="button" className="text-[10px] font-bold text-slate-400 hover:text-blue-600">Forgot?</button>}
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                <input 
                  required 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-600 transition-all font-medium text-slate-900" 
                />
              </div>
            </div>

            {mode === 'signup' && (
              <div className="flex items-start gap-3 p-1">
                <input type="checkbox" className="mt-1 rounded border-slate-300 text-blue-600 focus:ring-blue-500" required />
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  I agree to the <a href="#" className="text-blue-600 font-bold hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 font-bold hover:underline">Privacy Policy</a> regarding UK Data Protection.
                </p>
              </div>
            )}

            <button 
              disabled={loading}
              className="w-full py-5 bg-blue-600 text-white rounded-[20px] font-black text-sm shadow-xl shadow-blue-600/20 hover:bg-blue-700 hover:scale-[1.01] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  {mode === 'signin' ? 'Sign In' : 'Create Agency Account'}
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-xs text-slate-400 font-medium">
            PropComply AI is registered with the ICO for UK data processing. <br />
            Encrypted with 256-bit AES protection.
          </p>
        </div>
      </div>
    </div>
  );
};

const BenefitItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex gap-4">
    <div className="mt-1">{icon}</div>
    <div>
      <h4 className="text-white font-bold text-lg mb-1">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed font-medium">{desc}</p>
    </div>
  </div>
);

const SocialButton = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <button className="flex items-center justify-center gap-3 py-3 px-4 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all group">
    {icon}
    <span className="text-sm font-bold text-slate-700">{label}</span>
  </button>
);

export default AuthPage;
