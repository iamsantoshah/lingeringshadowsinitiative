'use client';

import { useEffect } from 'react';
import { X, Scale, ShieldCheck, Feather, Printer, MessageCircle, FileText, CornerDownRight } from 'lucide-react';

export interface CaseDocket {
  id: string;
  title: string;
  category: string;
  forum: string;
  provisions: string[];
  advocates: string;
  year: string;
  quote: string;
  legalSummary: string;
  fieldReality: string;
  impactVerdict: string;
}

interface CaseFileModalProps {
  docket: CaseDocket | null;
  onClose: () => void;
}

export default function CaseFileModal({ docket, onClose }: CaseFileModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (docket) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [docket, onClose]);

  if (!docket) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 lg:p-10 animate-fade-in">
      {/* Backdrop with chiaroscuro depth */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-ink-950/85 backdrop-blur-md transition-opacity"
      />

      {/* Case Docket Archival Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-parchment-50 border-2 border-ink-900 shadow-2xl rounded-3xl overflow-hidden flex flex-col z-10 text-ink-900">
        
        {/* Top Folder Tab Strip */}
        <div className="bg-ink-950 text-parchment-100 px-6 sm:px-8 py-4 flex items-center justify-between border-b-2 border-ink-800">
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-terracotta-500 animate-ping" />
            <span className="font-bold text-terracotta-400">THE LSI DOSSIER RECORD</span>
            <span className="hidden sm:inline text-ink-600">//</span>
            <span className="hidden sm:inline text-parchment-400">CHAMBER.MU STRATEGIC ARCHIVE</span>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              aria-label="Print or archive docket"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink-850 hover:bg-ink-800 text-parchment-300 font-mono text-[10px] uppercase tracking-wider border border-ink-700 transition-colors"
            >
              <Printer className="w-3 h-3 text-terracotta-400" />
              <span>Print Docket</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-ink-850 hover:bg-terracotta-600 text-parchment-100 transition-colors"
              aria-label="Close docket"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Dossier Contents */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 print:p-0">
          
          {/* Header Metadata */}
          <div className="space-y-4 border-b border-parchment-300 pb-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="archival-stamp text-terracotta-700 bg-terracotta-50 border-terracotta-600 text-[10px]">
                  {docket.category} // CASE RECORD
                </span>
                <span className="px-2.5 py-0.5 rounded bg-parchment-200 border border-parchment-300 font-mono text-[10px] uppercase text-ink-700 font-bold">
                  {docket.year}
                </span>
              </div>
              
              <div className="font-mono text-xs text-ink-500">
                FORUM: <strong className="text-ink-950">{docket.forum}</strong>
              </div>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink-950">
              {docket.title}
            </h2>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-ink-700 pt-1">
              <span className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-terracotta-600" />
                <span>ADVOCATE OF RECORD: <strong>{docket.advocates}</strong></span>
              </span>
              <span>•</span>
              <span>CONFIDENTIALITY: <strong className="text-sage-800">Told with Consent</strong></span>
            </div>
          </div>

          {/* Epigraph Quoted Callout */}
          <div className="p-6 sm:p-7 rounded-2xl bg-parchment-100 border-l-4 border-terracotta-600 font-serif italic text-lg sm:text-xl text-ink-950 leading-relaxed shadow-sm">
            &ldquo;{docket.quote}&rdquo;
          </div>

          {/* 2-Column Analytical Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="p-6 rounded-2xl bg-parchment-100/70 border border-parchment-300 space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-widest font-bold text-terracotta-700 flex items-center gap-2">
                <Scale className="w-4 h-4 text-terracotta-600" />
                <span>Constitutional & Legal Substance</span>
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-ink-800">
                {docket.legalSummary}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-parchment-100/70 border border-parchment-300 space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-widest font-bold text-sage-800 flex items-center gap-2">
                <Feather className="w-4 h-4 text-sage-700" />
                <span>Humanitarian & Ground Reality</span>
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-ink-800">
                {docket.fieldReality}
              </p>
            </div>
          </div>

          {/* Constitutional Articles & Statutory Framework */}
          <div className="space-y-3 p-6 rounded-2xl bg-parchment-100 border border-parchment-300">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink-700 block">
              Invoked Provisions & Human Rights Standards:
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              {docket.provisions.map((prov, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-parchment-50 border border-parchment-300/80 rounded-md font-mono text-xs text-ink-900 font-medium shadow-sm"
                >
                  {prov}
                </span>
              ))}
            </div>
          </div>

          {/* Impact & Precedent Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-ink-950 text-parchment-50 space-y-3 border border-ink-900 shadow-md">
            <div className="flex items-center gap-2 text-terracotta-400 font-mono text-xs tracking-widest uppercase font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Constitutional Precedent & Lasting Impact</span>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-parchment-200 font-sans">
              {docket.impactVerdict}
            </p>
          </div>

          {/* Actions & Closing */}
          <div className="pt-4 border-t border-parchment-300 flex flex-wrap items-center justify-between gap-4">
            <p className="font-mono text-[11px] text-ink-500">
              The Lingering Shadows Initiative • Chamber.MU Affiliate • Pro-Bono Registry
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/918860799513?text=Inquiry%20regarding%20LSI%20Story"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-parchment-50 text-xs font-mono uppercase tracking-wider transition-colors shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Inquire via WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full border border-ink-900 hover:bg-ink-950 hover:text-parchment-50 text-xs font-mono uppercase tracking-wider transition-colors"
              >
                Close Docket
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
