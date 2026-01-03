
import React from 'react';
import { 
  ShieldAlert, CheckCircle2, Zap, ShieldCheck, 
  ArrowRight, ArrowUpRight, History, Minus, Plus, Building,
  Users, Landmark, Gavel, Briefcase
} from 'lucide-react';

interface LandingPageProps {
  onSignIn: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onSignIn }) => {
  const [activeFaq, setActiveFaq] = React.useState<number | null>(0);

  const faqs = [
    {
      q: "What is Property Compliance Memory-as-a-Service (PCMaaS)?",
      a: "PCMaaS is a new standard where you don't just pay for one-off checks. You pay for a persistent, regulator-defensible record per property that captures ownership, transaction history, and UBO chains over many years."
    },
    {
      q: "How does 'insurance against scrutiny' work?",
      a: "Our Forensic tier provides immutable audit logs and regulator-ready narrative exports. If HMRC or the NCA requests evidence years later, you have a forensically reconstructed timeline ready in minutes."
    },
    {
      q: "Is pricing per user or per property?",
      a: "We believe compliance value is tied to the asset. Our pricing is per-property per-year, allowing unlimited team members to collaborate on a property's compliance memory."
    }
  ];

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSecondaryLink = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Persona-specific whitepapers are being finalized. Please contact sales for early access.");
  };

  return (
    <div className="bg-white min-h-screen selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl border-b border-slate-100 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-2 rounded-xl">
              <ShieldAlert size={20} className="text-white" />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-900">PropComply <span className="text-blue-600">AI</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={(e) => scrollToSection(e, 'personas')} className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">Economic Personas</button>
            <button onClick={(e) => scrollToSection(e, 'pricing')} className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">PCMaaS Tiers</button>
            <button onClick={(e) => scrollToSection(e, 'faq')} className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">FAQ</button>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={onSignIn} className="hidden sm:block text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">Sign In</button>
            <button onClick={onSignIn} className="px-6 py-3 bg-slate-900 text-white rounded-2xl text-sm font-bold shadow-xl shadow-slate-900/10 hover:scale-105 transition-all">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-50">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[70%] bg-blue-100 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[60%] bg-indigo-100 rounded-full blur-[140px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest border border-blue-100">
              <ShieldCheck size={14} className="fill-blue-700" />
              Persistent Compliance Memory-as-a-Service
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Don't pay for prevention.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 text-glow">Pay for Insurance against Scrutiny.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
              A persistently maintained, regulator-defensible compliance record per property. 
              Built for economic buyers who need to survive retrospective audits.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button onClick={onSignIn} className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl text-lg font-bold shadow-2xl shadow-blue-600/30 hover:bg-blue-700 hover:scale-105 transition-all flex items-center justify-center gap-2">
                Launch PCM Portal <ArrowRight size={20} />
              </button>
              <button onClick={handleSecondaryLink} className="w-full sm:w-auto px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Download PCMaaS Methodology
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Buyer Personas Section */}
      <section id="personas" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest border border-blue-100 mb-2">Buyer Personas</div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">Economic & Liability Fit</h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">PropComply fills the gap where prevention-first AML tools fail: the retrospective knock at the door.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PersonaCard 
              icon={<Building size={32} className="text-blue-600" />}
              title="Small Independent Agent"
              fear="HMRC Fine + Licence Loss"
              need="Proof you 'did something' to survive administrative failures."
              tier="PCM Core"
              features={["Immutable Audit Logs", "Reasonable Steps Evidence", "Annual HMRC Readiness"]}
            />
            <PersonaCard 
              icon={<Users size={32} className="text-blue-600" />}
              title="Regional Agency"
              fear="Branch Contagion"
              need="Explain why a flagged branch deal passed years later."
              tier="PCM Forensic"
              features={["Cross-branch Memory", "Decision Narrative Engine", "Staff Turnover Protection"]}
              popular={true}
            />
            <PersonaCard 
              icon={<Landmark size={32} className="text-blue-600" />}
              title="National Franchise"
              fear="Media / Parliamentary Scrutiny"
              need="Insulation between HQ and branch-level misconduct."
              tier="PCM Continuity"
              features={["Systemic Control Proof", "Incident Isolation", "Regulator Access Portal"]}
            />
            <PersonaCard 
              icon={<Briefcase size={32} className="text-blue-600" />}
              title="Institutional Landlord"
              fear="ESG / LP Scrutiny"
              need="Asset compliance continuity across fund lifecycles."
              tier="PCM Continuity"
              features={["Risk Inheritance", "LP Due Diligence Pack", "ESG Provenance Defense"]}
            />
            <PersonaCard 
              icon={<Gavel size={32} className="text-blue-600" />}
              title="Conveyancer / Solicitor"
              fear="Professional Indemnity Liability"
              need="Clean evidentiary trail to defend facilitator allegations."
              tier="PCM Forensic"
              features={["Decision Traceability", "Evidence Integrity", "PI-Defense Exports"]}
            />
             <PersonaCard 
              icon={<ShieldCheck size={32} className="text-blue-600" />}
              title="Regulator / HMRC"
              fear="Narrative Failure"
              need="Coherent stories on demand, reducing investigation friction."
              tier="Indirect Fit"
              features={["Investigative Continuity", "Integrity Logs", "Narrative Reconstruction"]}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-xs font-black uppercase tracking-widest border border-indigo-100 mb-2">PCMaaS Pricing</div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">Packaging for Forensic Readiness</h2>
            <p className="text-lg text-slate-500 font-medium">Pricing is tied to asset defensibility, not user count.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard 
              tier="PCM Core"
              price="£18-£30"
              period="per property / year"
              desc="Persistent memory for independent agencies."
              features={[
                "Immutable Audit Logs",
                "Transaction Timeline",
                "Linked Entities",
                "Evidence Retention (Baseline)",
                "Standard Audit Export"
              ]}
              button="Get Core"
              onAction={onSignIn}
            />
            <PricingCard 
              tier="PCM Forensic"
              price="£55-£90"
              period="per property / year"
              popular={true}
              desc="Longitudinal risk memory for regional firms."
              features={[
                "Everything in Core",
                "Forensic Timeline Engine",
                "SAR Reconstruction",
                "Chain-of-Custody Integrity",
                "Extended Retention (10 Years)"
              ]}
              button="Go Forensic"
              onAction={onSignIn}
            />
            <PricingCard 
              tier="PCM Continuity"
              price="£120-£200"
              period="per property / year"
              desc="Governance infrastructure for funds and chains."
              features={[
                "Everything in Forensic",
                "Risk Inheritance",
                "Regulator Read-Only Access",
                "Priority Forensic SLA",
                "Custom Disclosure Rules"
              ]}
              button="Contact Sales"
              onAction={handleSecondaryLink}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Defensibility FAQ</h2>
            <p className="text-slate-500 font-medium">Why the industry is moving to Compliance Memory.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`bg-white rounded-3xl border transition-all duration-300 ${activeFaq === idx ? 'border-blue-200 shadow-xl' : 'border-slate-200 shadow-sm'}`}>
                <button onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} className="w-full px-8 py-6 flex items-center justify-between text-left group">
                  <span className={`text-lg font-bold ${activeFaq === idx ? 'text-blue-600' : 'text-slate-900'}`}>{faq.q}</span>
                  <div className={`p-2 rounded-xl transition-all ${activeFaq === idx ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                    {activeFaq === idx ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${activeFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-8 text-slate-500 font-medium leading-relaxed">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 border-t border-slate-800 pt-12">
          <div className="flex items-center gap-3">
            <ShieldAlert size={24} className="text-blue-400" />
            <span className="text-xl font-black">PropComply <span className="text-blue-400">AI</span></span>
          </div>
          <p className="text-slate-500 text-sm font-bold">© 2025 PropComply AI Limited. UK Forensic Compliance Standard.</p>
        </div>
      </footer>
    </div>
  );
};

const PersonaCard = ({ icon, title, fear, need, tier, features, popular = false }: any) => (
  <div className={`bg-white p-8 rounded-[40px] border-2 transition-all hover:-translate-y-2 flex flex-col ${popular ? 'border-blue-600 shadow-2xl' : 'border-slate-100 shadow-lg'}`}>
    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">{icon}</div>
    <h3 className="text-xl font-black text-slate-900 mb-2">{title}</h3>
    <div className="space-y-4 flex-1">
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Primary Fear</p>
        <p className="text-sm font-bold text-rose-600 leading-snug">{fear}</p>
      </div>
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Economic Need</p>
        <p className="text-sm font-medium text-slate-600 leading-snug">{need}</p>
      </div>
      <div className="pt-4 border-t border-slate-50">
         <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2">Tier: {tier}</p>
         <ul className="space-y-2">
           {features.map((f: string, i: number) => (
             <li key={i} className="flex items-center gap-2 text-[11px] font-bold text-slate-500">
               <CheckCircle2 size={12} className="text-emerald-500" /> {f}
             </li>
           ))}
         </ul>
      </div>
    </div>
  </div>
);

const PricingCard = ({ tier, price, period, desc, features, popular = false, button, onAction }: any) => (
  <div className={`relative bg-white p-10 rounded-[40px] border-2 transition-all hover:scale-[1.02] flex flex-col ${popular ? 'border-blue-600 shadow-2xl shadow-blue-600/10 scale-105 z-10' : 'border-slate-100 shadow-xl'}`}>
    {popular && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">Forensic Standard</div>
    )}
    <div className="mb-8">
      <h3 className="text-lg font-black text-slate-900 mb-2">{tier}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-black text-slate-900 tracking-tighter">{price}</span>
      </div>
      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">{period}</p>
      <p className="text-sm text-slate-500 font-medium leading-relaxed">{desc}</p>
    </div>
    <ul className="space-y-4 mb-10 flex-1">
      {features.map((f: string, i: number) => (
        <li key={i} className="flex items-start gap-3 text-sm font-bold text-slate-700">
          <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <button onClick={onAction} className={`w-full py-4 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 ${popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-900 text-white hover:bg-black'}`}>
      {button} <ArrowUpRight size={18} />
    </button>
  </div>
);

export default LandingPage;
