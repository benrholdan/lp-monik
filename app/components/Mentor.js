'use client';

import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Quote, MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';

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
    transition: { staggerChildren: 0.1 },
  },
};

export const Mentor = () => {
  return (
    <section className="section-spacing bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-[hsl(var(--paprika)/0.1)] blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[hsl(var(--sage)/0.08)] blur-3xl" />
      
      <div className="container-section relative z-10">
        <motion.div
          className="grid gap-12 lg:grid-cols-2 lg:items-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeInLeft} className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[hsl(var(--paprika)/0.3)] to-[hsl(var(--sage)/0.2)] blur-2xl" />
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-2xl shadow-strong">
              <Image 
                src="/images/monik.webp"
                alt="Monik Santos, mentora do guia Juba Natural Hair"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            
            <motion.div 
              variants={fadeInUp}
              className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 glass rounded-2xl p-4 shadow-medium"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-cta">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[hsl(var(--espresso))]">+500</p>
                  <p className="text-xs text-[hsl(var(--muted-foreground))]">Alunas transformadas</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInRight} className="text-white">
            <p className="text-subtle !text-[hsl(var(--sage))]">
              EXPERIÊNCIA COMPROVADA NO MERCADO NORTE-AMERICANO
            </p>
            <p className="text-lg mt-4 text-white">
              Muito prazer, eu sou
            </p>
            <h2 className=" text-4xl font-bold tracking-tight sm:text-5xl">
              Monik Santana
            </h2>
            <div className="mt-2 flex items-center gap-2 text-[hsl(var(--linen)/0.7)]">
              <MapPin className="h-4 w-4" />
              <span>New Jersey</span>
            </div>
            
            <p className="text-body mt-6 !text-[hsl(var(--linen)/0.8)]">
              Brasileira, especialista e apaixonada por cabelos ondulados, cacheados e crespos! Te convido a descobrir o prazer de cuidar dos seus cachos com todo o amor que eles merecem. No guia, compartilho um pouco da minha experiência nos EUA: adaptei rotinas, produtos e cuidados aos desafios reais das brasileiras vivendo na América.
            </p>
            
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Award,
                  title: 'Especialidade',
                  desc: 'Especialista em cabelos naturais ondulados, cacheados e crespos.'
                },
                {
                  icon: BookOpen,
                  title: 'Formação',
                  desc: 'Cosmetologista com certificações no Brasil e nos EUA.'
                }
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-[hsl(var(--linen)/0.1)] bg-[hsl(var(--linen)/0.05)] p-4">
                  <div className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-[hsl(var(--paprika))]" />
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-[hsl(var(--linen)/0.7)]">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 relative rounded-xl border-l-4 border-[hsl(var(--paprika))] bg-[hsl(var(--linen)/0.05)] p-5">
              <Quote className="absolute -top-3 -left-3 h-8 w-8 text-[hsl(var(--paprika)/0.3)]" />
              <blockquote className="text-[hsl(var(--linen)/0.9)] italic">
                &quot;Quero compartilhar com você respostas às perguntas que tive ao me mudar para os EUA, mas não tinha a quem perguntar. Vem comigo e dê o primeiro passo para ter cabelos deslumbrantes e saudáveis!&quot;
              </blockquote>
            </div>

            <motion.div variants={fadeInUp} className="mt-8">
              <a
                href="https://pay.hotmart.com/I103599333T?bid=1770042403468"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group inline-flex"
              >
                Quero o Guia Completo
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
