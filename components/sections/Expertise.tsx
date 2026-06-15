"use client";

import { motion } from "framer-motion";
import { Wrench, CheckCircle, Shield, Users } from "lucide-react";

const Expertise = () => {
  const expertiseItems = [
    {
      icon: Wrench,
      title: "Expertise technique locale",
      description: "Connaissance approfondie des contraintes locales, des spécificités climatiques et des réglementations en vigueur.",
    },
    {
      icon: CheckCircle,
      title: "Approche personnalisée",
      description: "Chaque projet est unique. Nous réalisons une étude personnalisée adaptée à votre situation et vos objectifs.",
    },
    {
      icon: Shield,
      title: "Installation conforme",
      description: "Installation conforme et sécurisée, avec accompagnement de A à Z pour garantir votre tranquillité d'esprit.",
    },
    {
      icon: Users,
      title: "Transparence totale",
      description: "Approche transparente, pédagogique et durable, loin des promesses irréalistes. Nous privilégions la confiance.",
    },
  ];

  return (
    <section id="expertise" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Un expert solaire local à votre service
          </h2>
          <p className="text-xl text-gray-600">
            Electrotech, votre expert local en énergie solaire
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center text-primary-500">
                  <item.icon className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
