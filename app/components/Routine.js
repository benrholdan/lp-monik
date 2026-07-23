'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check, Calendar, Sparkles, ArrowLeft, ArrowRight, Gift, Video, Play } from 'lucide-react';
import { routineBenefits } from '../data';

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

export const Routine = () => {
  const guideTeachings = [
    {
      title: 'Finalizações Rápidas',
      description: 'Finalizações rápidas para dias corridos'
    },
    {
      title: 'Rotina de Tratamentos em casa',
      description: 'Aprenda a ter uma rotina de tratamentos capilares que funciona, sem gastar muito.'
    },
    {
      title: 'Day After Perfeito',
      description: 'Como ter um day after de 3 a 4 dias com o cabelo perfeito'
    },
    {
      title: 'Identificar o que seu cabelo precisa',
      description: 'Reconhecer quando o cabelo está danificado e qual tratamento ideal para isso'
    }
  ];

  return (
    <section className="section-spacing bg-[hsl(var(--cream))] relative overflow-hidden">
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[hsl(var(--paprika)/0.04)] blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[hsl(var(--olive)/0.04)] blur-3xl" />
      
      <div className="container-section relative z-10">
        <motion.div
          className="text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p variants={fadeInUp} className="text-subtle">
            PRATICIDADE NO DIA A DIA
          </motion.p>
          <motion.h2 variants={fadeInUp} className="heading-section mt-4 text-balance">
            O que o Guia Prático ensina
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-body mx-auto mt-6 max-w-2xl text-balance">
            Técnicas práticas para adaptar o cabelo ao seu estilo de vida, não o contrário.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {guideTeachings.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="card-base p-6 group relative overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-cta mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="heading-card text-base">{item.title}</h3>
              <p className="text-body mt-3 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            variants={fadeInUp} 
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-[hsl(var(--cream))] border-2 border-[hsl(var(--paprika)/0.1)] shadow-strong"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[hsl(var(--paprika)/0.08)] to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[hsl(var(--olive)/0.08)] to-transparent rounded-tr-full" />
            
            <div className="relative p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-cta shadow-lg flex-shrink-0">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-[hsl(var(--paprika))] mb-1">Em 30 dias de cuidados</p>
                  <h3 className="text-3xl font-bold text-[hsl(var(--espresso))]">Transformação Capilar Completa</h3>
                  <p className="text-[hsl(var(--muted-foreground))] mt-2">Resultados visíveis seguindo o guia passo a passo</p>

                 
                </div>
                 
              </div>

              <div className='relative w-auto h-140 max-md:h-44 max-md:min-h-44 mb-4'>
                <Image src="/images/antes-depois.webp" alt="quote" fill className="object-cover w-full h-full rounded-3xl" />
              </div>
              <div className="flex justify-center gap-140 max-md:gap-20 mb-10">
                <span className="font-bold text-[hsl(var(--espresso))] text-lg bg-[hsl(var(--paprika)/0.1)] rounded-full px-4 py-2 max-md:text-sm">Antes</span>
                <span className="font-bold text-[hsl(var(--espresso))] text-lg bg-[hsl(var(--paprika)/0.1)] rounded-full px-4 py-2 max-md:text-sm">Depois</span>
              </div>
              
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { icon: Sparkles, title: 'Definição Natural', desc: 'Cachos bem formados e definidos' },
                  { icon: Check, title: 'Menos Frizz', desc: 'Mais definição por mais tempo' },
                  { icon: Sparkles, title: 'Cachos com vida', desc: 'Brilho, movimento e balanço' },
                  { icon: Check, title: 'Facilidade', desc: 'Finalização mais rápida e prática' },
                  { icon: Sparkles, title: 'Saúde Capilar', desc: 'Fios fortes, hidratados e nutridos' },
                  { icon: Check, title: 'Confiança', desc: 'Ame e celebre seus cachos naturais' },
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-[hsl(var(--border)/0.5)] hover:shadow-md transition-all group/item">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[hsl(var(--paprika))] to-[hsl(var(--espresso))] shadow-sm flex-shrink-0 group-hover/item:scale-110 transition-transform">
                      <benefit.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-[hsl(var(--espresso))] mb-1">{benefit.title}</p>
                      <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

         {/* Vídeos Demonstrativos */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--espresso))]/10 px-4 py-2 text-sm font-semibold ont-bold text-[hsl(var(--espresso))] mb-4">
              <Video className="h-4 w-4" />
              Vídeos Demonstrativos
            </div>
            <h3 className="text-3xl font-bold text-[hsl(var(--espresso))]">
              Aprenda com demonstrações práticas
            </h3>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto"
          >
            {[
              { src: '/images/bonus/monik.webp', alt: 'Vídeo demonstrativo com Monik' },
              { src: '/images/bonus/woman.webp', alt: 'Vídeo demonstrativo técnicas' },
            ].map((video, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-strong hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-video w-full bg-[hsl(var(--espresso))]">
                  <Image
                    src={video.src}
                    alt={video.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Overlay escuro */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500" />
                  
                  {/* Botão Play */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                      <Play className="h-7 w-7 text-[hsl(var(--espresso))] ml-1" fill="currentColor" />
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
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
            Quero os Resultados em 30 Dias
            <Calendar className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
