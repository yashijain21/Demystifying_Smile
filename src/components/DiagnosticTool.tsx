import React, { useState } from "react";
import { HelpCircle, CheckCircle, ArrowRight, HeartPulse, RefreshCw } from "lucide-react";

interface DiagnosticToolProps {
  onSelectRecommendedService: (serviceNameStr: string) => void;
}

export default function DiagnosticTool({ onSelectRecommendedService }: DiagnosticToolProps) {
  const [step, setStep] = useState(1);
  const [ans1, setAns1] = useState("");
  const [ans3, setAns3] = useState("");

  const resetTool = () => {
    setStep(1);
    setAns1("");
    setAns3("");
  };

  const getRecommendation = () => {
    switch (ans1) {
      case "pain":
        return {
          serviceName: "Root Canal Treatment",
          desc: "Our diagnostic suggests a painless single-sitting Root Canal Treatment (RCT) or deep clinical curettage. This saves your damaged pulp structures and stops infections before they spread.",
          cost: "₹4,500 - ₹9,500",
          duration: "1 Session",
        };
      case "missing":
        return {
          serviceName: "Dental Implants",
          desc: "Our diagnostic suggests high-end Titanium Implants coupled with custom E-Max porcelain crowns. This represents the absolute gold standard for permanent, robust teeth replacement.",
          cost: "₹30,000 - ₹55,000 per implant",
          duration: "2-3 Sessions over a few weeks",
        };
      case "misaligned":
        return {
          serviceName: "Clear Aligners",
          desc: "Our diagnostic recommends Removable Clear Aligners. Virtually unnoticeable orthodontic correction, comfortable, with simple hygiene maintenance.",
          cost: "₹60,000 - ₹2,50,000",
          duration: "6-12 Months custom loop",
        };
      case "cosmetic":
        default:
        return {
          serviceName: "Smile Makeover",
          desc: "Based on your targets, we highly suggest a complete custom digital Smile Design Makeover or Professional Cool-Laser Tooth Whitening to sculpt radiant symmetry.",
          cost: "₹50,000 - ₹1,50,000 customized",
          duration: "3-4 Sessions",
        };
    }
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6.5 sm:p-8 shadow-xl border border-slate-800 text-left max-w-3xl mx-auto relative overflow-hidden">
      {/* Background abstract overlay bubble */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-logo-orange-500/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="flex items-center gap-3 mb-6 relative z-10">
        <div className="w-10 h-10 rounded-xl bg-logo-blue-500/10 text-logo-blue-200 border border-logo-blue-500/20 flex items-center justify-center">
          <HeartPulse className="w-5.5 h-5.5 text-logo-orange-200" />
        </div>
        <div>
          <h3 className="font-display text-lg sm:text-xl font-bold text-white flex items-center gap-1.5">
            <span>Interactive Smile Diagnostic Evaluator</span>
          </h3>
          <p className="text-xs text-slate-400 font-medium">Select your desires to formulate preliminary treatment guidance</p>
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <span className="block text-slate-400 text-xs font-bold uppercase tracking-wider font-mono">Question 1 of 3</span>
          <p className="text-sm font-bold text-slate-100">What is your principal goal or primary oral issue?</p>
          
          <div className="grid grid-cols-1 gap-3 pt-2">
            {[
              { id: "pain", label: "I suffer from tooth pain, sensitivity, or gum swelling." },
              { id: "missing", label: "I want to replace missing teeth permanently with solid crowns." },
              { id: "misaligned", label: "I want to straighten misaligned teeth comfortably and invisibly." },
              { id: "cosmetic", label: "I want to brighten stains, correct chips, or perform minor smile updates." }
            ].map((ans) => (
              <button
                key={ans.id}
                onClick={() => {
                  setAns1(ans.id);
                  setStep(2);
                }}
                className="w-full text-left bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-logo-blue-500 rounded-2xl p-4.5 text-xs sm:text-sm text-slate-300 hover:text-white transition-all cursor-pointer font-medium"
                id={`diag-ans1-${ans.id}`}
              >
                {ans.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <span className="block text-slate-400 text-xs font-bold uppercase tracking-wider font-mono">Question 2 of 3</span>
          <p className="text-sm font-bold text-slate-100">What concerns you most about dental clinic chairs?</p>
          
          <div className="grid grid-cols-1 gap-3 pt-2">
            {[
              { id: "pain-fear", label: "Severe fear of pain or surgical drilling tools." },
              { id: "hygiene", label: "Sterile safety and strict hygiene conditions." },
              { id: "cost", label: "Budget clarity and avoiding hidden extra service costs." },
              { id: "comfortable", label: "Time restrictions (I prefer faster procedures)." }
            ].map((ans) => (
              <button
                key={ans.id}
                onClick={() => {
                  setAns3(ans.id);
                  setStep(3);
                }}
                className="w-full text-left bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-logo-blue-500 rounded-2xl p-4.5 text-xs sm:text-sm text-slate-300 hover:text-white transition-all cursor-pointer font-medium"
                id={`diag-ans2-${ans.id}`}
              >
                {ans.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6 animate-in fade-in duration-300 text-left">
          <span className="block text-logo-orange-200 text-xs font-bold uppercase tracking-widest font-mono flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-logo-orange-200" />
            <span>Formulated Dental Recommendation</span>
          </span>

          {(() => {
            const rec = getRecommendation();
            return (
              <div className="space-y-5">
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5.5">
                  <h4 className="font-display text-lg sm:text-xl font-extrabold text-white mb-2">
                    {rec.serviceName} Proposal
                  </h4>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    {rec.desc}
                  </p>
                  
                  {ans3 === "pain-fear" && (
                    <div className="mt-3.5 pt-3 border-t border-slate-700 text-xs text-logo-orange-200/90 font-medium bg-logo-orange-500/5 px-3 py-2 rounded-lg border border-logo-orange-500/10 flex items-center gap-2">
                      <HeartPulse className="w-5 h-5 text-logo-orange-200 shrink-0" />
                      <span>Reassurance: Demystifying Smiles Noida relies on micro-vibration painless anesthesia, keeping your treatment completely pain-free!</span>
                    </div>
                  )}

                  {ans3 === "hygiene" && (
                    <div className="mt-3.5 pt-3 border-t border-slate-700 text-xs text-logo-blue-200/90 font-medium bg-logo-blue-500/5 px-3 py-2 rounded-lg border border-logo-blue-500/10 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-logo-blue-200 shrink-0" />
                      <span>Safety: Our clinic runs class-B clinical sterilization parameters guaranteeing 100% sterile safety.</span>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 p-4.5 rounded-xl border border-slate-800">
                    <span className="block text-[10px] text-slate-400 uppercase font-mono tracking-wider">Estimated Cost Range</span>
                    <span className="text-white text-sm font-bold font-mono">{rec.cost}</span>
                  </div>
                  <div className="bg-slate-800/50 p-4.5 rounded-xl border border-slate-800">
                    <span className="block text-[10px] text-slate-400 uppercase font-mono tracking-wider">Suggested Duration</span>
                    <span className="text-white text-sm font-bold font-mono">{rec.duration}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={resetTool}
                    className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs sm:text-sm py-4 px-6 rounded-xl transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                    id="diag-retry-btn"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Run Diagnostic Again</span>
                  </button>
                  <button
                    onClick={() => {
                      onSelectRecommendedService(rec.serviceName);
                    }}
                    className="flex-1 bg-logo-orange-600 hover:bg-logo-orange-700 text-white font-display text-xs sm:text-sm font-bold py-4 px-6 rounded-xl shadow-lg shadow-logo-orange-600/15 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                    id="diag-select-service"
                  >
                    <span>Schedule This Proposed Care</span>
                    <ArrowRight className="w-4.5 h-4.5" />
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}
