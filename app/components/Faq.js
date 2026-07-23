'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '../data';

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
    transition: { staggerChildren: 0.08 },
  },
};

const FaqItem = ({ faq, isOpen, onClick, index }) => {
  return (
    <motion.div 
      variants={fadeInUp}
      className="overflow-hidden"
    >
      <button 
        className={`flex w-full items-center justify-between rounded-2xl border p-5 text-left transition-all ${
          isOpen 
            ? 'border-[hsl(var(--paprika)/0.3)] bg-[hsl(var(--paprika)/0.05)]' 
            : 'border-[hsl(var(--border))] bg-[hsl(var(--white))] hover:border-[hsl(var(--paprika)/0.2)]'
        }`}
        onClick={onClick}
      >
        <span className="pr-4 font-semibold text-[hsl(var(--espresso))]">{faq.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors ${
            isOpen 
              ? 'bg-gradient-cta text-white' 
              : 'bg-[hsl(var(--linen))] text-[hsl(var(--muted-foreground))]'
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="px-5 pb-5 pt-3">
              <p className="text-[hsl(var(--muted-foreground))]">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section-spacing bg-gradient-section">
      <div className="container-section">
        <motion.div
          className="text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeInUp} className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-cta">
            <HelpCircle className="h-7 w-7 text-white" />
          </motion.div>
          <motion.p variants={fadeInUp} className="text-subtle">
            FAQ
          </motion.p>
          <motion.h2 variants={fadeInUp} className="heading-section mt-4 text-balance">
            Perguntas Frequentes
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-body mx-auto mt-6 max-w-2xl text-balance">
            Transparência total antes de você entrar para o clube.
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 max-w-3xl space-y-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {faqs.map((faq, i) => (
            <FaqItem 
              key={i} 
              faq={faq} 
              index={i}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
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
          Quero Garantir Meu Acesso
          <HelpCircle className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </section>
  );
};
