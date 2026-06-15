"use client";

import { motion } from "framer-motion";
import { Sun, Euro, Home, CheckCircle } from "lucide-react";

const Why = () => {
  const benefits = [
    {
      icon: Sun,
      title: "Ensoleillement élevé",
      description: "Un ensoleillement annuel élevé qui maximise la production d'énergie solaire tout au long de l'année.",
    },
    {
      icon: Euro,
      title: "Réduction des factures",
      description: "Réduire significativement sa facture d'électricité jusqu'à 1000-1500 € par an et gagner en indépendance énergétique.",
    },
    {
      icon: Home,
      title: "Valorisation immobilière",
      description: "Valoriser son bien immobilier de 5000 € à 15000 € avec une installation moderne et durable.",
    },
    {
      icon: CheckCircle,
      title: "Toitures adaptées",
      description: "Des toitures souvent bien exposées, idéales pour l'installation solaire photovoltaïque.",
    },
  ];

  return (
    <section id="pourquoi" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pourquoi installer une solution solaire photovoltaïque ?
          </h2>
          <p className="text-xl text-gray-600">
            Une solution rentable et écologique pour votre foyer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 flex items-center justify-center text-primary-500">
                  <benefit.icon className="w-12 h-12" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
