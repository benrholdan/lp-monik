'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Sparkles, Video, Gift, Play, Scissors } from 'lucide-react';
import { bonuses } from '../data';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const bonusIcons = {
  "Corte Ideal": Scissors,
  "Penteados": Sparkles,
};

export const Bonuses = () => {
  return (
    <section className="section-spacing bg-gradient-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
      
      <div className="container-section relative z-10">
        <motion.div
          className="grid gap-12 lg:grid-cols-2 lg:items-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeInUp} className="text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90">
              <Gift className="h-4 w-4" />
              Bônus Exclusivos
            </div>
            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Sim, quero ter acesso aos bônus!
            </h2>
            <p className="mt-6 text-lg text-white/80">
              Os bônus são liberados 7 dias após a compra para garantir que você tenha familiaridade com todo o conteúdo antes de partir para áreas específicas.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
            {bonuses.map((bonus, i) => {
              const Icon = bonusIcons[bonus.label] || Gift;
              return (
                <div
                  key={bonus.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/5 blur-2xl transition-transform group-hover:scale-150" />
                  
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="grow">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wide text-white/60">
                          {bonus.label}
                        </span>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                          {bonus.value}
                        </span>
                      </div>
                      <h3 className="mt-2 text-xl font-bold text-white">{bonus.title}</h3>
                      <p className="mt-2 text-sm text-white/70">{bonus.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

         <motion.div
                 variants={fadeInUp}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 className="mt-12 flex justify-center"
               >
                 <a
                   href="#oferta"
                   className="inline-flex items-center gap-2 bg-[hsl(var(--sage))] text-white px-6 py-3 rounded-full font-semibold hover:bg-[hsl(var(--sage)/0.8)] transition-colors group"
                 >
                   Quero os Bônus Exclusivos
                   <Gift className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                 </a>
               </motion.div> 
       
      </div>
    </section>
  );
};
