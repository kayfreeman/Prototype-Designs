
import React from 'react';
import { 
  ShieldAlert, CheckCircle2, Zap, ShieldCheck, 
  BarChart3, Globe, ArrowRight, Star, ArrowUpRight,
  ShieldHalf, Users2, Scale, Bot
} from 'lucide-react';

interface LandingPageProps {
  onSignIn: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onSignIn }) => {
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
            <a href="#features" className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">Features</a>
            <a href="#pricing" className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">Pricing</a>
            <a href="#faq" className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">FAQ</a>
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
              AI-Driven AML Compliance <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Built for Property Pros.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
              Automate your KYC, biometric ID verification, and risk scoring. PropComply AI keeps your agency 100% compliant with HMRC regulations without the manual paperwork.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button 
                onClick={onSignIn}
                className="w-full sm:w-auto px-8 py-5 bg-blue-600 text-white rounded-2xl text-lg font-bold shadow-2xl shadow-blue-600/25 hover:bg-blue-700 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Launch Platform <ArrowRight size={20} />
              </button>
              <button className="w-full sm:w-auto px-8 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Watch Demo
              </button>
            </div>
            
            <div className="pt-12 flex flex-col items-center gap-6">
              <div className="flex -space-x-3">
                {[1,2,3,4,5].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/150?u=${i}`} className="w-10 h-10 rounded-full border-4 border-white shadow-sm" alt="User" />
                ))}
              </div>
              <p className="text-sm font-bold text-slate-500 flex items-center gap-2">
                <span className="flex">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
                </span>
                Trusted by 500+ Agencies across the UK
              </p>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-20 relative group">
            <div className="absolute inset-0 bg-blue-600/10 blur-[100px] group-hover:bg-blue-600/20 transition-all"></div>
            <div className="relative bg-white rounded-[40px] border border-slate-200 shadow-2xl overflow-hidden p-4">
              <div className="bg-slate-50 rounded-[28px] border border-slate-200 p-8 flex flex-col gap-8 grayscale opacity-50">
                 <div className="flex justify-between items-center">
                    <div className="w-48 h-10 bg-slate-200 rounded-xl"></div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                      <div className="w-32 h-12 bg-slate-300 rounded-xl"></div>
                    </div>
                 </div>
                 <div className="grid grid-cols-3 gap-8">
                    <div className="h-40 bg-slate-200 rounded-3xl"></div>
                    <div className="h-40 bg-slate-200 rounded-3xl"></div>
                    <div className="h-40 bg-slate-200 rounded-3xl"></div>
                 </div>
                 <div className="h-80 bg-slate-200 rounded-3xl"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white/80 backdrop-blur-md px-8 py-4 rounded-2xl border border-white shadow-2xl">
                    <p className="text-lg font-black text-slate-900">Sign in to view live dashboard</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">Everything you need for iron-clad compliance.</h2>
            <p className="text-lg text-slate-500 font-medium">PropComply AI combines enterprise-grade data with human-like intelligence.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<ShieldCheck className="text-blue-600" size={32} />}
              title="Biometric ID Scanning"
              desc="Instant passport and driving license verification with liveness checks."
            />
            <FeatureCard 
              icon={<Scale className="text-blue-600" size={32} />}
              title="HMRC-Ready Audits"
              desc="Automatic logging of every verification step for easy annual reporting."
            />
            <FeatureCard 
              // Fix: 'Bot' icon is now properly imported
              icon={<Bot className="text-blue-600" size={32} />}
              title="Regulatory Copilot"
              desc="Ask our AI about complex PEP/Sanction cases in plain English."
            />
            <FeatureCard 
              icon={<BarChart3 className="text-blue-600" size={32} />}
              title="UBO Unmasking"
              desc="Instantly trace complex corporate structures to identify Ultimate Beneficial Owners."
            />
            <FeatureCard 
              icon={<Globe className="text-blue-600" size={32} />}
              title="Global Sanctions"
              desc="Real-time checks against OFAC, HM Treasury, and EU sanction lists."
            />
            <FeatureCard 
              icon={<ShieldHalf className="text-blue-600" size={32} />}
              title="Risk Scoring"
              desc="AI-generated risk profiles for every client, from Safe to Critical."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-xs font-black uppercase tracking-widest border border-indigo-100 mb-2">Pricing</div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">Simple, predictable pricing for agencies of all sizes.</h2>
            <p className="text-lg text-slate-500 font-medium">No hidden fees. Scale as you grow.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard 
              tier="Starter"
              price="49"
              desc="Perfect for independent agents."
              features={["Up to 20 checks/mo", "Basic ID Verification", "Standard Risk Reports", "Email Support"]}
              button="Get Started"
              onAction={onSignIn}
            />
            <PricingCard 
              tier="Professional"
              price="129"
              desc="The sweet spot for growing teams."
              features={["Unlimited checks", "Biometric Liveness", "UBO Mapping", "Priority Copilot Access", "Audit Log Export"]}
              popular={true}
              button="Go Pro"
              onAction={onSignIn}
            />
            <PricingCard 
              tier="Enterprise"
              price="Custom"
              desc="For multi-branch franchises."
              features={["White-labeled portal", "Dedicated AML Officer", "API Integration", "Single Sign-On (SSO)", "24/7 Phone Support"]}
              button="Contact Sales"
              onAction={onSignIn}
            />
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
              Making compliance effortless for the UK property industry. Registered with the FCA for open banking and data services.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-500">Platform</h4>
            <ul className="space-y-4 text-slate-300 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-500">Legal</h4>
            <ul className="space-y-4 text-slate-300 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-20 border-t border-slate-800 mt-20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-bold">© 2025 PropComply AI Limited. All rights reserved.</p>
          <div className="flex gap-6">
             <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all cursor-pointer"><Globe size={18} /></div>
             <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all cursor-pointer"><Users2 size={18} /></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="bg-white p-8 rounded-[32px] border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all group">
    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-black text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 font-medium leading-relaxed">{desc}</p>
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
        <span className="text-4xl font-black text-slate-900 tracking-tighter">{price === 'Custom' ? '' : '£'}{price}</span>
        {price !== 'Custom' && <span className="text-slate-500 font-bold">/mo</span>}
      </div>
      <p className="text-sm text-slate-500 font-medium mt-2">{desc}</p>
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
