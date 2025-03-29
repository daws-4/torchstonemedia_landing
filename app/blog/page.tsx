"use client";

import { title } from "@/components/primitives";
import { User } from "@heroui/react" ; 
import { color } from "framer-motion";

export default function BlogPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full max-w-7xl mx-auto px-4 sm:px-6"> {/* Contenedor que previene el desbordamiento */}
  <div className="inline-block max-w-xl text-center justify-center"> 
    {/* Contenedor responsivo estándar */}
        
    {/* Título principal */}
      <span className={title({color: "blue"})}>Nosotros</span>
      <br />
    {/* Slogan */}
    <h1>📢 ¡Somos pioneros en desarrollo de software en el Táchira! 💻🚀</h1>
    {/* Bloque de presentación */}
    <div className="bg-white rounded-lg md:rounded-xl shadow-sm p-6 md:p-8 mb-8 md:mb-10 border border-gray-100 w-full">
      <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
        En <strong className="text-blue-700">TORCHSTONE</strong>, buscamos la innovación tecnológica en el estado Táchira para mejorar el estilo de vida de los ciudadanos. 
        <br />
      </p>
      
      <div className="h-px bg-gradient-to-r from-blue-400 to-blue-100 rounded-full mb-6 md:mb-8"></div>
      
      <div className="space-y-4 md:space-y-6">
        <h3 className="text-lg md:text-xl font-bold text-blue-800 flex items-center">
          <svg className="w-5 h-5 md:w-6 md:h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
          ¿Por qué elegirnos?
        </h3>
        <ul className="space-y-3 md:space-y-4 pl-2">
          {[
            "Experiencia y trayectoria como referentes",
            "Equipo especializado en desarrollo",
            "Compromiso con la excelencia"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2 mt-0.5">✓</span>
              <span className="text-gray-700 text-sm md:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Servicios */}
    <div className="bg-blue-50 rounded-lg md:rounded-xl p-6 md:p-8 mb-8 md:mb-10">
      <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-4 md:mb-6 flex items-center">
        <svg className="w-5 h-5 md:w-6 md:h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
        </svg>
        Nuestros servicios
      </h3>
      <div className="grid gap-3 md:gap-4">
        {[
          "Desarrollo web y móvil",
          "Software empresarial",
          "Consultoría tecnológica",
          "Soluciones innovadoras"
        ].map((service, index) => (
          <div key={index} className="bg-white p-3 md:p-4 rounded-md shadow-xs flex items-start">
            <span className="text-blue-500 mr-2 text-sm md:text-base">•</span>
            <span className="text-gray-700 text-sm md:text-base">{service}</span>
          </div>
        ))}
      </div>
    </div>

    {/* CTA de contacto */}
    <div className="text-center bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg md:rounded-xl p-6 md:p-8 text-white">
      <p className="text-xl md:text-2xl font-bold mb-3">🌐 Conectamos el futuro hoy</p>
      <p className="mb-3 md:mb-4 text-sm md:text-base">¿Listo para transformar tu negocio?</p>
      <div className="space-y-2">
        <p className="text-base md:text-lg">📞 [Teléfono]</p>
        <p className="text-base md:text-lg">✉️ [Email]</p>
        <p className="text-xs md:text-sm opacity-90">📍 Ubicados en el Táchira</p>
      </div>
      <div className="mt-4 md:mt-6 flex flex-wrap justify-center gap-2">
        {['#InnovaciónTachirense', '#SoftwareDeCalidad'].map((tag) => (
          <span key={tag} className="bg-white/20 px-2 py-1 rounded-full text-xs md:text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
  </div>
  );
}
