'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, MapPin, Star, TrendingUp, X } from 'lucide-react';
import { testimonials } from '../data';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

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

export const Results = () => {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(null);

  const autoplay = useRef(
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [autoplay.current]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  const goTo = (next) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(next);
  };

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--cream))] via-[hsl(var(--linen)/0.5)] to-[hsl(var(--cream))]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[hsl(var(--paprika)/0.05)] blur-3xl" />
      
      <div className="container-section relative z-10">
        <motion.div
          className="text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p variants={fadeInUp} className="text-subtle">
            Resultados Reais
          </motion.p>
          <motion.h2 variants={fadeInUp} className="heading-section mt-4 text-balance">
            Histórias de transformação nos EUA
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-body mx-auto mt-6 max-w-2xl text-balance">
            Mulheres brasileiras plenamente realizadas com seus cabelos naturais graças às técnicas e à curadoria do Guia Prático Juba Natural Hair.
          </motion.p>
        </motion.div>

        {/* Carrossel com autoplay (mobile e desktop) */}
        <div className="mt-16">
          <div className="overflow-hidden -mx-4 px-4" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((item, i) => (
                <div
                  key={`${item.name}-${i}`}
                  className="relative w-full shrink-0 basis-full sm:basis-2/3 lg:basis-1/3 overflow-hidden rounded-2xl shadow-medium hover:shadow-strong transition-shadow cursor-pointer"
                  onClick={() => setOpen(item)}
                >
                  <button
                    className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-cta shadow-md hover:scale-110 transition-transform"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpen(item);
                    }}
                    aria-label="Abrir depoimento"
                  >
                    <Quote className="h-4 w-4 text-white" />
                  </button>

                  <div className="relative aspect-4/3 overflow-hidden bg-[hsl(var(--cream))]">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={`Foto de ${item.name}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 400px"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-cta text-white text-3xl font-bold">
                        {item.name.charAt(0)}
                      </div>
                    )}
                  </div>

                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  i === index ? 'bg-[hsl(var(--paprika))] w-6' : 'bg-[hsl(var(--muted-foreground)/0.3)]'
                }`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>
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
          </a>
        </motion.div>

        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(null)}
            >
              <motion.div
                className="relative w-full max-w-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[hsl(var(--espresso))] shadow-lg hover:scale-110 transition-transform"
                  onClick={() => setOpen(null)}
                  aria-label="Fechar"
                >
                  <X className="h-5 w-5" />
                </button>
                
                <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl max-h-[85vh]">
                  {open.image && (
                    <Image
                      src={open.image}
                      alt={`Resultado de transformação`}
                      width={1200}
                      height={1600}
                      className="w-full h-auto max-h-[85vh] object-contain"
                      sizes="(max-width: 768px) 100vw, 1200px"
                      priority
                    />
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
