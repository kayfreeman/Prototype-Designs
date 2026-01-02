
import React, { useState, useRef } from 'react';
// Added FileText to the imports from lucide-react
import { Camera, RefreshCw, CheckCircle, AlertCircle, Shield, ArrowRight, User, Fingerprint, FileText } from 'lucide-react';

const IDVerificationFlow: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isCapturing, setIsCapturing] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startCamera = async () => {
    setIsCapturing(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Camera access failed:", err);
    }
  };

  const capturePhoto = () => {
    // Simulated capture
    setCapturedImage("https://images.unsplash.com/photo-1554126807-6b10f6f6692a?w=400&h=250&fit=crop");
    setIsCapturing(false);
    setStep(2);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center">
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Biometric Verification</h2>
        <p className="text-slate-500 font-medium mt-2">Verified AML check powered by PropComply AI Biometrics.</p>
      </div>

      {/* Progress Stepper */}
      <div className="flex items-center justify-center gap-4 max-w-md mx-auto">
        {[1, 2, 3].map((i) => (
          <React.Fragment key={i}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${step >= i ? 'bg-blue-600 text-white ring-4 ring-blue-100' : 'bg-slate-200 text-slate-500'}`}>
              {step > i ? <CheckCircle size={18} /> : i}
            </div>
            {i < 3 && <div className={`h-1 w-12 rounded-full transition-all ${step > i ? 'bg-blue-600' : 'bg-slate-200'}`}></div>}
          </React.Fragment>
        ))}
      </div>

      <div className="bg-white rounded-[32px] border border-slate-200 shadow-2xl overflow-hidden p-8">
        {step === 1 && (
          <div className="space-y-8 text-center">
            <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto">
              <Camera size={40} />
            </div>
            <div className="max-w-sm mx-auto">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Scan Passport or ID</h3>
              <p className="text-slate-500 text-sm">Please ensure the document is clearly visible and within the frame. Our AI will automatically extract UBO data.</p>
            </div>
            
            <div className="relative aspect-[16/10] bg-slate-900 rounded-2xl overflow-hidden shadow-inner max-w-xl mx-auto border-4 border-slate-800">
              {isCapturing ? (
                <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera size={48} className="text-slate-700 opacity-20" />
                </div>
              )}
              <div className="absolute inset-8 border-2 border-dashed border-white/30 rounded-lg pointer-events-none"></div>
              <div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] text-white font-bold uppercase tracking-widest">Alignment Guide</div>
            </div>

            <button 
              onClick={isCapturing ? capturePhoto : startCamera}
              className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 mx-auto"
            >
              {isCapturing ? <><RefreshCw className="animate-spin" size={20} /> Capture Document</> : <><Camera size={20} /> Activate Camera</>}
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Shield className="text-emerald-500" />
                <h3 className="text-xl font-bold">AI Analysis Complete</h3>
              </div>
              <div className="space-y-4">
                <DataField label="Full Name" value="ALEXANDER VOLKOV" match={99} />
                <DataField label="Document No" value="P72841920" match={100} />
                <DataField label="Nationality" value="UKRAINIAN (UK RESIDENT)" match={98} />
                <DataField label="Expiry Date" value="12 OCT 2029" match={100} />
              </div>
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex gap-3 items-start">
                <AlertCircle className="text-amber-600 shrink-0" size={18} />
                <p className="text-xs text-amber-800 font-medium">Secondary sanction check recommended for PEP (Politically Exposed Person) status due to regional ties.</p>
              </div>
            </div>
            <div className="relative">
              <img src={capturedImage!} className="w-full rounded-2xl shadow-xl grayscale" alt="Captured ID" />
              <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl border-2 border-emerald-500/50"></div>
              <div className="absolute bottom-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-[10px] font-bold">VERIFIED</div>
            </div>
            <div className="md:col-span-2 flex justify-end gap-3 pt-6 border-t border-slate-100">
               <button onClick={() => setStep(1)} className="px-6 py-3 text-slate-500 font-bold hover:bg-slate-50 rounded-xl transition-all">Retake</button>
               <button onClick={() => setStep(3)} className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl shadow-lg flex items-center gap-2">
                 Proceed to Sanctions Check <ArrowRight size={18} />
               </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="py-12 text-center space-y-6 animate-in zoom-in-95 duration-500">
             <div className="w-24 h-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
               <CheckCircle size={48} />
             </div>
             <div>
               <h3 className="text-2xl font-black text-slate-900">Verification Submitted</h3>
               <p className="text-slate-500 max-w-sm mx-auto mt-2">Compliance report has been generated and added to the audit trail for this transaction.</p>
             </div>
             <div className="flex flex-col gap-3 max-w-xs mx-auto pt-8">
               <button className="flex items-center justify-center gap-2 p-4 bg-slate-100 text-slate-900 rounded-2xl font-bold hover:bg-slate-200 transition-all">
                 <FileText size={18} /> Download Certificate
               </button>
               <button onClick={() => setStep(1)} className="p-4 text-blue-600 font-bold hover:underline">Verify Another Client</button>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

const DataField = ({ label, value, match }: { label: string, value: string, match: number }) => (
  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center group hover:bg-white hover:shadow-md transition-all">
    <div>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
      <p className="text-sm font-bold text-slate-900">{value}</p>
    </div>
    <div className="text-right">
       <p className="text-[10px] font-bold text-emerald-600 mb-0.5">AI MATCH</p>
       <div className="h-1.5 w-12 bg-slate-200 rounded-full overflow-hidden">
         <div className="h-full bg-emerald-500" style={{ width: `${match}%` }}></div>
       </div>
    </div>
  </div>
);

export default IDVerificationFlow;
