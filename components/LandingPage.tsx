
import React from 'react';
import { 
  ShieldAlert, CheckCircle2, Zap, ShieldCheck, 
  BarChart3, Globe, ArrowRight, Star, ArrowUpRight,
  ShieldHalf, Users2, Scale, Bot, FileText, 
  Fingerprint, LayoutDashboard, History, RefreshCcw, Network,
  Plus, Minus, HelpCircle
} from 'lucide-react';

interface LandingPageProps {
  onSignIn: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onSignIn }) => {
  const [activeFaq, setActiveFaq] = React.useState<number | null>(0);

  const faqs = [
    {
      q: "Is PropComply AI fully compliant with UK Money Laundering Regulations?",
      a: "Yes. Our platform is built specifically around the UK Money Laundering, Terrorist Financing and Transfer of Funds Regulations 2017 and subsequent updates. We integrate directly with HMRC guidance to ensure your agency meets every requirement."
    },
    {
      q: "How does the biometric ID verification work?",
      a: "We use advanced computer vision to analyze ID documents (passports, driving licenses) for forgery. This is combined with a 'liveness' check using the user's camera to ensure the person presenting the ID is physically present."
    },
    {
      q: "Can I manage multiple office branches?",
      a: "Absolutely. The Enterprise plan includes multi-branch management features, allowing your head office compliance officer to oversee activity across all regional locations from a single master dashboard."
    },
    {
      q: "Do you integrate with CRM systems like Reapit or Alto?",
      a: "We offer a robust API for custom integrations on our Enterprise plan. We are currently developing native plug-ins for the most popular UK property management softwares."
    }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSecondaryLink = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("This feature is currently being finalized for the production release. Stay tuned!");
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
            <a 
              href="#features" 
              onClick={(e) => scrollToSection(e, 'features')}
              className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => scrollToSection(e, 'pricing')}
              className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors"
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              onClick={(e) => scrollToSection(e, 'faq')}
              className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors"
            >
              FAQ
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={onSignIn}
              className="hidden sm:block text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
            >
              Sign In
            </button>
            <button 
              onClick={onSignIn}
              className="px-6 py-3 bg-slate-900 text-white rounded-2xl text-sm font-bold shadow-xl shadow-slate-900/10 hover:scale-105 active:scale-95 transition-all"
            >
              Get Started Free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-blue-100/50 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[50%] bg-indigo-100/50 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest border border-blue-100">
              <Zap size={14} className="fill-blue-700" />
              Empowering UK Estate Agents
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Powerful Features <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Everything You Need.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
              Purpose-built for UK estate and letting agents. Reduce manual workloads by up to 80% while ensuring regulatory accuracy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button 
                onClick={onSignIn}
                className="w-full sm:w-auto px-8 py-5 bg-blue-600 text-white rounded-2xl text-lg font-bold shadow-2xl shadow-blue-600/25 hover:bg-blue-700 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Launch Platform <ArrowRight size={20} />
              </button>
              <button 
                onClick={handleSecondaryLink}
                className="w-full sm:w-auto px-8 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">Iron-clad Compliance</h2>
            <p className="text-lg text-slate-500 font-medium">PropComply AI combines enterprise-grade data with human-like intelligence to secure your agency.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<Fingerprint className="text-blue-600" size={32} />}
              title="Automated ID Verification"
              desc="Computer vision scans passports, driving licences, and property documents with biometric liveness detection for 99% accuracy."
              onAction={onSignIn}
            />
            <FeatureCard 
              icon={<ShieldHalf className="text-blue-600" size={32} />}
              title="AI Risk Scoring Engine"
              desc="Reinforcement learning generates property risk embeddings linking tenant data to ownership chains with 30-40% higher anomaly detection."
              onAction={onSignIn}
            />
            <FeatureCard 
              icon={<FileText className="text-blue-600" size={32} />}
              title="One-Click SAR Filing"
              desc="Submit Suspicious Activity Reports to NCA with pre-filled evidence trails. Audit-ready SARs generated in under 5 minutes."
              onAction={onSignIn}
            />
            <FeatureCard 
              icon={<Network className="text-blue-600" size={32} />}
              title="UBO Ownership Mapping"
              desc="Visual ownership structure charts showing Ultimate Beneficial Owners, control chains, and entity relationships."
              onAction={onSignIn}
            />
            <FeatureCard 
              icon={<Scale className="text-blue-600" size={32} />}
              title="SAR Filing Workflow"
              desc="Pre-filled Suspicious Activity Reports with NCA-compliant templates. Generate audit-ready SARs in minutes."
              onAction={onSignIn}
            />
            <FeatureCard 
              icon={<History className="text-blue-600" size={32} />}
              title="Complete Audit Trail"
              desc="Immutable activity logs tracking every compliance decision with timestamps, user actions, and full evidence chains."
              onAction={onSignIn}
            />
            <FeatureCard 
              icon={<LayoutDashboard className="text-blue-600" size={32} />}
              title="Real-Time Dashboard"
              desc="Live compliance status, alerts, and transaction timelines. Mobile-responsive with role-based access for teams."
              onAction={onSignIn}
            />
            <FeatureCard 
              icon={<RefreshCcw className="text-blue-600" size={32} />}
              title="Regulatory Auto-Updates"
              desc="Automatically incorporates HMRC and Money Laundering Regulation changes with retraining notifications."
              onAction={onSignIn}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-xs font-black uppercase tracking-widest border border-indigo-100 mb-2">Pricing</div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">Simple Pricing: Choose the Right Plan</h2>
            <p className="text-lg text-slate-500 font-medium">Transparent pricing with no hidden fees. All plans include a 14-day free trial.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard 
              tier="Starter"
              price="49"
              desc="Perfect for small agencies just getting started with compliance automation."
              features={[
                "Up to 50 verifications/month",
                "Basic ID verification",
                "PEP & sanctions screening",
                "Email support",
                "Single user access"
              ]}
              button="Start Free Trial"
              onAction={onSignIn}
            />
            <PricingCard 
              tier="Professional"
              price="199"
              desc="For growing agencies that need advanced compliance features."
              features={[
                "Up to 250 verifications/month",
                "AI risk scoring engine",
                "Automated SAR filing",
                "Companies House integration",
                "HMRC API access",
                "Priority support",
                "Up to 5 users"
              ]}
              popular={true}
              button="Start Free Trial"
              onAction={onSignIn}
            />
            <PricingCard 
              tier="Enterprise"
              price="499"
              desc="Full-featured solution for large agencies and chains."
              features={[
                "Unlimited verifications",
                "Ownership graph mapping",
                "Federated insights",
                "Blockchain audit trail",
                "Custom integrations",
                "Dedicated account manager",
                "Unlimited users",
                "SLA guarantee"
              ]}
              button="Contact Sales"
              onAction={onSignIn}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest">
              <HelpCircle size={14} /> Support
            </div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-slate-500 font-medium">Everything you need to know about PropComply AI.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${activeFaq === idx ? 'border-blue-200 shadow-xl' : 'border-slate-200 shadow-sm'}`}
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                >
                  <span className={`text-lg font-bold transition-colors ${activeFaq === idx ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>
                    {faq.q}
                  </span>
                  <div className={`p-2 rounded-xl transition-all ${activeFaq === idx ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600'}`}>
                    {activeFaq === idx ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <div className={`transition-all duration-300 ${activeFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-8 text-slate-500 font-medium leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-xl">
                <ShieldAlert size={20} className="text-white" />
              </div>
              <span className="text-xl font-black tracking-tight">PropComply <span className="text-blue-400">AI</span></span>
            </div>
            <p className="text-slate-400 font-medium max-w-sm">
              Making compliance effortless for the UK property industry. Registered with the ICO for UK data processing.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-500">Platform</h4>
            <ul className="space-y-4 text-slate-300 font-medium">
              <li><a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="hover:text-white transition-colors">Support (FAQ)</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-500">Legal</h4>
            <ul className="space-y-4 text-slate-300 font-medium">
              <li><a href="#" onClick={handleSecondaryLink} className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" onClick={handleSecondaryLink} className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" onClick={handleSecondaryLink} className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-20 border-t border-slate-800 mt-20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-bold">© 2025 PropComply AI Limited. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
             <a href="#" onClick={handleSecondaryLink} className="hover:text-white">Linked In</a>
             <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
             <a href="#" onClick={handleSecondaryLink} className="hover:text-white">Twitter (X)</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc, onAction }: { icon: React.ReactNode, title: string, desc: string, onAction?: () => void }) => (
  <div className="bg-white p-6 rounded-[32px] border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all group">
    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
      {icon}
    </div>
    <h3 className="text-lg font-black text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 text-sm font-medium leading-relaxed">{desc}</p>
    <button 
      onClick={onAction}
      className="mt-4 flex items-center gap-1 text-xs font-black text-blue-600 hover:text-blue-700 transition-colors"
    >
      Learn more <ArrowRight size={14} />
    </button>
  </div>
);

const PricingCard = ({ tier, price, desc, features, popular = false, button, onAction }: any) => (
  <div className={`relative bg-white p-10 rounded-[40px] border-2 transition-all hover:scale-[1.02] ${popular ? 'border-blue-600 shadow-2xl shadow-blue-600/10' : 'border-slate-100 shadow-xl shadow-slate-200/50'}`}>
    {popular && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
        Most Popular
      </div>
    )}
    <div className="mb-8">
      <h3 className="text-lg font-black text-slate-900 mb-2">{tier}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-black text-slate-900 tracking-tighter">£{price}</span>
        <span className="text-slate-500 font-bold">/month</span>
      </div>
      <p className="text-sm text-slate-500 font-medium mt-2 leading-relaxed">{desc}</p>
    </div>
    <ul className="space-y-4 mb-10">
      {features.map((f: string, i: number) => (
        <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
          <CheckCircle2 size={18} className="text-blue-500 shrink-0" />
          {f}
        </li>
      ))}
    </ul>
    <button 
      onClick={onAction}
      className={`w-full py-4 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 ${popular ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20 hover:bg-blue-700' : 'bg-slate-900 text-white hover:bg-black'}`}
    >
      {button} <ArrowUpRight size={18} />
    </button>
  </div>
);

export default LandingPage;
