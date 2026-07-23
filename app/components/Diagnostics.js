'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShoppingCart, BookOpen, Tag, Store, ArrowRight } from 'lucide-react';

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

const guideTeaches = [
  {
    icon: BookOpen,
    title: 'Ler Rótulos',
    description: 'Como interpretar rótulos de produtos americanos e entender o que realmente funciona.',
  },
  {
    icon: Tag,
    title: 'Ingredientes Certos',
    description: 'Quais ingredientes funcionam de verdade aqui nos EUA.',
  },
  {
    icon: ShoppingCart,
    title: 'Marcas que Funcionam',
    description: 'Conheça quais as marcas dos EUA que entregam um resultado maravilhoso.',
  },
  {
    icon: Store,
    title: 'Rotina Acessível',
    description: 'Como montar uma rotina eficaz usando produtos acessíveis de Target, Walmart, Amazon e Marshalls.',
  },
];

export const Diagnostics = () => {
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
          <motion.p variants={fadeInUp} className="text-subtle">
            PARE DE DESPERDIÇAR DINHEIRO
          </motion.p>
          <motion.h2 variants={fadeInUp} className="heading-section mt-4 text-balance">
            Chega de gastar dinheiro com produtos errados
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-body mx-auto mt-6 max-w-2xl text-balance">
            Nos EUA, as prateleiras são enormes e confusas com produtos muito bons e outros de péssima qualidade.
          </motion.p>
        </motion.div>

        <motion.div 
          className="mt-16 space-y-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {guideTeaches.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card-base shadow-soft h-full flex flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-cta mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="heading-card text-lg">{item.title}</h3>
                  <p className="text-body mt-3 text-sm">{item.description}</p>
                </div>
              );
            })}
          </motion.div>

          {/* <motion.div variants={fadeInUp} className="card-base max-w-2xl mx-auto border-[hsl(var(--paprika)/0.3)] bg-[hsl(var(--paprika)/0.05)] shadow-soft">
            <p className="text-center text-xl font-bold text-[hsl(var(--espresso))]">
              &ldquo;Menos tentativa e erro. Mais resultado.&rdquo;
            </p>
          </motion.div> */}

          <motion.div variants={fadeInUp} className="h-120 w-auto mx-auto relative shadow-soft">
            <Image src="/images/foto loja.webp" alt="quote" fill className="object-cover w-full h-full rounded-3xl" />
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
