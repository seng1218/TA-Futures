"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    emoji: '🌴', code: 'FCPO', name: 'Crude Palm Oil',
    desc: "Malaysia's benchmark CPO contract.",
    color: 'bg-green-50 dark:bg-green-950/40 border-green-100 dark:border-green-900 hover:border-green-300 dark:hover:border-green-700',
    accent: 'text-green-700 dark:text-green-400',
  },
  {
    emoji: '📈', code: 'FKLI', name: 'KLCI Futures',
    desc: 'Trade the Kuala Lumpur Composite Index with high leverage.',
    color: 'bg-blue-50 dark:bg-blue-950/40 border-blue-100 dark:border-blue-900 hover:border-blue-300 dark:hover:border-blue-700',
    accent: 'text-blue-700 dark:text-blue-400',
  },
  {
    emoji: '🥇', code: 'FGLD', name: 'Gold Futures',
    desc: 'Safe-haven commodity futures on Bursa Malaysia.',
    color: 'bg-yellow-50 dark:bg-yellow-950/30 border-yellow-100 dark:border-yellow-900 hover:border-yellow-300 dark:hover:border-yellow-700/50',
    accent: 'text-yellow-700 dark:text-yellow-400',
  },
  {
    emoji: '🌿', code: 'FEPO', name: 'East Malaysia CPO',
    desc: 'FEPO — East Malaysia Crude Palm Oil futures contract.',
    color: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-100 dark:border-emerald-900 hover:border-emerald-300 dark:hover:border-emerald-700',
    accent: 'text-emerald-700 dark:text-emerald-400',
  },
  {
    emoji: '🫒', code: 'FSOY', name: 'Soybean Oil',
    desc: 'Track soybean oil futures for commodity diversification.',
    color: 'bg-orange-50 dark:bg-orange-950/40 border-orange-100 dark:border-orange-900 hover:border-orange-300 dark:hover:border-orange-700',
    accent: 'text-orange-700 dark:text-orange-400',
  },
];

export default function ProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const track = trackRef.current;
    if (!track) return;

    const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 40);

    const tween = gsap.to(track, { x: getScrollAmount, ease: "none" });

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "center center",
      end: () => `+=${track.scrollWidth}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
      onUpdate: () => {
        // 3D depth effect: tilt cards based on distance from center
        const cards = track.querySelectorAll('.product-card');
        const centerX = window.innerWidth / 2;
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const cardCenterX = rect.left + rect.width / 2;
          const distFromCenter = cardCenterX - centerX;
          const maxDist = window.innerWidth * 0.6;
          const rotateY = (distFromCenter / maxDist) * -22;
          const tz = Math.abs(distFromCenter / maxDist) * -80;
          const cardOpacity = 1 - Math.abs(distFromCenter / maxDist) * 0.35;
          gsap.set(card, {
            rotateY,
            translateZ: tz,
            opacity: cardOpacity,
            transformPerspective: 1200,
          });
        });
      }
    });

    return () => st.kill();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-20 border-t border-slate-100 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-950" style={{ perspective: '1200px' }}>
      <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
        <motion.div
          initial={{ opacity: 0, rotateX: -15, y: 30 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ transformOrigin: 'bottom center' }}
        >
          <span className="inline-block text-brand text-sm font-bold uppercase tracking-widest mb-3">Products Available</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Trade <span className="text-brand">BMD Derivatives</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
            Access a comprehensive range of derivatives contracts listed on Bursa Malaysia Derivatives Berhad — all from a single account.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Track — 3D depth carousel */}
      <div className="pl-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2))] pb-12 w-full" style={{ transformStyle: 'preserve-3d' }}>
        <div ref={trackRef} className="flex gap-6 w-max pr-6 lg:pr-[max(1.5rem,calc((100vw-80rem)/2))]" style={{ transformStyle: 'preserve-3d' }}>
          {products.map(({ emoji, code, name, desc, color, accent }) => (
            <div
              key={code}
              className={`product-card w-[300px] shrink-0 group relative border rounded-2xl p-7 transition-colors duration-300 hover:shadow-lg ${color}`}
              style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
            >
              <div className="text-4xl mb-4" style={{ transform: 'translateZ(20px)' }}>{emoji}</div>
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs font-bold uppercase tracking-widest px-2 py-1 rounded-md bg-white/70 dark:bg-slate-900/70 border ${accent} border-current/20`}>
                  {code}
                </span>
                <h3 className="font-bold text-slate-900 dark:text-white">{name}</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/markets"
          className="inline-flex items-center gap-2 px-8 py-4 border-2 border-brand text-brand font-bold rounded-xl hover:bg-brand hover:text-white transition-all duration-300"
        >
          View All Contract Specs →
        </Link>
      </div>
    </section>
  );
}
