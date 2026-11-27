'use client';

import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Activity } from 'lucide-react';

export default function AmbientSoundEngine() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.08);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);

  const toggleSound = () => {
    if (isPlaying) {
      // Smooth fade out
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.4);
        setTimeout(() => {
          oscillatorsRef.current.forEach((osc) => {
            try {
              osc.stop();
              osc.disconnect();
            } catch {}
          });
          oscillatorsRef.current = [];
          setIsPlaying(false);
        }, 400);
      }
    } else {
      // Warm meditative drone (Root D2 = 73.42Hz, A2 = 110Hz, D3 = 146.83Hz, F#3 = 185Hz)
      try {
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        const freqs = [73.42, 110.0, 146.83, 185.0];
        const oscs: OscillatorNode[] = [];

        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
          const oscGain = ctx.createGain();

          osc.type = idx === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          // Subtle LFO drift for breath-like motion
          const lfo = ctx.createOscillator();
          const lfoGain = ctx.createGain();
          lfo.frequency.setValueAtTime(0.08 + idx * 0.04, ctx.currentTime);
          lfoGain.gain.setValueAtTime(0.75, ctx.currentTime);
          lfo.connect(osc.frequency);
          lfo.start();

          oscGain.gain.setValueAtTime(0.024 / (idx + 1), ctx.currentTime);

          if (panner) {
            panner.pan.setValueAtTime(idx % 2 === 0 ? -0.28 : 0.28, ctx.currentTime);
            osc.connect(oscGain);
            oscGain.connect(panner);
            panner.connect(masterGain);
          } else {
            osc.connect(oscGain);
            oscGain.connect(masterGain);
          }

          osc.start();
          oscs.push(osc);
        });

        oscillatorsRef.current = oscs;
        masterGain.gain.setTargetAtTime(volume, ctx.currentTime, 1.2);
        setIsPlaying(true);
      } catch (e) {
        console.warn('AudioContext requires user gesture:', e);
      }
    }
  };

  useEffect(() => {
    return () => {
      oscillatorsRef.current.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {}
      });
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      <button
        onClick={toggleSound}
        data-cursor="SOUND"
        aria-label="Toggle ambient atmosphere audio"
        className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-full border shadow-dossier backdrop-blur-md transition-all duration-300 text-xs font-mono tracking-wider ${
          isPlaying
            ? 'bg-ink-950 text-parchment-50 border-terracotta-500 shadow-glow-terracotta'
            : 'bg-parchment-50/90 text-ink-900 border-ink-900/20 hover:border-terracotta-600'
        }`}
      >
        {isPlaying ? (
          <>
            <div className="flex items-end gap-1 h-3.5 px-0.5">
              <span className="w-0.5 h-3.5 bg-terracotta-400 animate-pulse" />
              <span className="w-0.5 h-2 bg-terracotta-500 animate-pulse delay-100" />
              <span className="w-0.5 h-3 bg-parchment-200 animate-pulse delay-75" />
              <span className="w-0.5 h-1.5 bg-terracotta-400 animate-pulse delay-150" />
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-[9px] text-terracotta-400 uppercase tracking-widest font-bold">
                ATMOSPHERE
              </span>
              <span className="text-[10px] text-parchment-200 hidden sm:inline">
                432Hz HARMONIC
              </span>
            </div>
            <Volume2 className="w-3.5 h-3.5 text-terracotta-400 ml-1" />
          </>
        ) : (
          <>
            <Sparkles className="w-3.5 h-3.5 text-terracotta-600 group-hover:rotate-12 transition-transform" />
            <div className="flex flex-col text-left leading-none">
              <span className="text-[9px] text-ink-500 uppercase tracking-widest">
                SOUNDSCAPE
              </span>
              <span className="text-[10px] text-ink-900 font-bold hidden sm:inline">
                ENTER ATMOSPHERE
              </span>
            </div>
            <VolumeX className="w-3.5 h-3.5 text-ink-400 group-hover:text-terracotta-600 transition-colors ml-1" />
          </>
        )}
      </button>
    </div>
  );
}
