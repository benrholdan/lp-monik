'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Shield, Clock, Gift, Play, Users, Star, BookOpen, Video, CheckCircle } from 'lucide-react';

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

export const Hero = () => {
  const benefits = [
    'Protocolos para curvaturas 2A até 4C',
    'Produtos acessíveis (CVS, Target, Ulta)',
    'Rotinas para água dura e climas extremos',
    '+6h de conteúdo em vídeo 4K',
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-noise opacity-[0.02]" />
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-[hsl(var(--paprika)/0.06)] blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[hsl(var(--olive)/0.06)] blur-3xl" />
      
      <div className="container-section relative z-10 py-16 lg:py-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >

          <motion.h1 
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight text-[hsl(var(--espresso))] sm:text-5xl lg:text-6xl"
            style={{ lineHeight: 1.1 }}
          >
           Aprenda a cuidar do seu{' '} 
            <span className="bg-gradient-to-r from-[hsl(var(--paprika))] to-[hsl(var(--espresso))] bg-clip-text text-transparent">
              cabelo natural 
            </span>{' '}
            morando nos EUA
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-[hsl(var(--muted-foreground))] leading-relaxed"
          >
            Um guia prático completo para quem tem cabelos cacheados, ondulados ou crespos.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mx-auto mt-8 max-w-4xl lg:hidden"
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[hsl(var(--paprika)/0.15)] to-[hsl(var(--olive)/0.15)] blur-xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-strong">
                <div className="aspect-video w-full bg-[hsl(var(--espresso))]">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/dEk2pf8xfRk?loop=1&playlist=dEk2pf8xfRk&controls=1&showinfo=0&modestbranding=1&rel=0"
                    title="Juba Natural Hair - Apresentação"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* <motion.p 
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-[hsl(var(--muted-foreground))] leading-relaxed"
          >
            Guia completo com diagnóstico capilar, cronograma personalizado, curadoria de produtos 
            acessíveis e protocolos para clima, água e rotina norte-americana.
          </motion.p> */}

        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-10 max-w-4xl hidden lg:block"
        >
          <motion.div variants={fadeInUp} className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[hsl(var(--paprika)/0.2)] to-[hsl(var(--olive)/0.2)] blur-2xl" />
            
            <div className="relative overflow-hidden rounded-2xl shadow-strong">
              <div className="aspect-video w-full bg-[hsl(var(--espresso))]">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/dEk2pf8xfRk?loop=1&playlist=dEk2pf8xfRk&controls=1&showinfo=0&modestbranding=1&rel=0"
                  title="Juba Natural Hair - Apresentação"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

           
            
          </motion.div>

       
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-10 max-w-2xl"
        >
          <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4">
            <a
              href="#oferta"
              className="btn-primary group text-center"
            >
              Quero o guia completo
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <div className="flex items-center gap-4 text-sm text-[hsl(var(--muted-foreground))]">
              <span className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-[hsl(var(--olive))]" />
                7 dias de garantia
              </span>
             
            </div>
          </motion.div>

         
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[hsl(var(--cream))] to-transparent" />
    </section>
  );
};
