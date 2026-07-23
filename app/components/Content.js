'use client';

import { motion } from 'framer-motion';
import { Zap, PiggyBank, Frown, Heart, Sparkles, ArrowRight } from 'lucide-react';

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
    transition: { staggerChildren: 0.1 },
  },
};

export const Content = () => {
  return (
    <section className="section-spacing bg-[hsl(var(--cream))]">
      <div className="container-section">
        <motion.div
          className="text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p variants={fadeInUp} className="text-subtle">
            O QUE VOCÊ GANHA
          </motion.p>
          <motion.h2 variants={fadeInUp} className="heading-section mt-4 text-balance">
            Resultado final que você encontra<br className="hidden sm:block" /> ao adquirir o guia
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-body mx-auto mt-6 max-w-2xl text-balance">
            Liberdade será: se olhar no espelho e se reconhecer.
          </motion.p>
        </motion.div>
        
        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { icon: Zap, title: 'Autonomia', description: 'Independência para cuidar do seu cabelo' },
            { icon: PiggyBank, title: 'Economia', description: 'Pare de gastar com produtos errados' },
            { icon: Frown, title: 'Menos Frustração', description: 'Chega de tentativa e erro' },
            { icon: Heart, title: 'Cabelo Saudável', description: 'Mesmo morando fora do Brasil' },
            { icon: Sparkles, title: 'Liberdade', description: 'De se olhar no espelho e se reconhecer' },
          ].map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl bg-white border border-[hsl(var(--border))] shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-cta" />
                
                <div className="relative p-6 text-center">
                  <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-xl bg-gradient-cta text-white shadow-md transition-transform group-hover:scale-110 mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-[hsl(var(--espresso))] mb-2 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 flex justify-center"
      >
        <a
          href="#oferta"
          className="btn-primary group"
        >
          Quero o Guia Completo
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </section>
  );
};
