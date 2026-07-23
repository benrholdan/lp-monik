'use client';

import { motion } from 'framer-motion';
import { Droplets, Clock, ShoppingBag, Scale, Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { methodSteps } from '../data';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const icons = [Droplets, Clock, ShoppingBag, Scale];

export const Method = () => {
  return (
    <section className="section-spacing bg-[hsl(var(--cream))] relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.02]" />
      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-[hsl(var(--paprika)/0.06)] blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[hsl(var(--olive)/0.06)] blur-3xl" />
      
      <div className="container-section relative z-10">
        <motion.div
          className="text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p variants={fadeInUp} className="text-subtle">
            A REALIDADE QUE VOCÊ CONHECE BEM
          </motion.p>
          <motion.h2 variants={fadeInUp} className="heading-section mt-4 text-balance">
            A realidade dos cabelos nos EUA:<br className="hidden sm:block" /> ressecados, ásperos e sem definição
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-body mx-auto mt-6 max-w-3xl text-balance">
            Isso muda completamente os resultados do seu cuidado em casa.
          </motion.p>

          <motion.p variants={fadeInUp} className="relative w-auto md:hidden h-68 rounded-2xl mx-auto mt-6 max-w-3xl text-balance">
            <Image 
            src="/images/woman-hair-mobile.webp"
            alt="Realidade dos cabelos nos EUA"
            className='object-cover rounded-2xl'
            fill
            />
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-16 grid lg:grid-cols-2 lg:items-end"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeInLeft} className="space-y-8">

            <div className="space-y-6">
              {methodSteps.map((step, i) => {
                const Icon = icons[i];
                return (
                  <motion.div
                    key={step.title}
                    variants={fadeInUp}
                    className="card-base group relative overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
                  >
                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[hsl(var(--paprika)/0.05)] transition-transform group-hover:scale-150" />
                    
                    <div className="relative flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-cta">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="heading-card">{step.title}</h3>
                        <p className="text-body mt-2 text-sm" dangerouslySetInnerHTML={{ __html: step.description }} />
                        
                        {/* <ul className="mt-4 space-y-2">
                          {step.items.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <div className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[hsl(var(--olive)/0.1)]">
                                <Check className="h-2.5 w-2.5 text-[hsl(var(--olive))]" />
                              </div>
                              <span className="text-xs text-[hsl(var(--muted-foreground))]">{item}</span>
                            </li>
                          ))}
                        </ul> */}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>

          <motion.div variants={fadeInRight} className="relative flex items-end h-full">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <div className="absolute inset-0  " />
              <div className="relative w-full h-full">
                <Image 
                  src="/images/woman.webp"
                  alt="Mulher frustrada com cabelo bagunçado - realidade dos cabelos nos EUA"
                  fill
                  className="object-contain  drop-shadow-2xl rounded-2xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
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
            className="btn-primary group"
          >
            Quero o Guia Completo
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
