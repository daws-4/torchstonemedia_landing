"use client";



export default function BlogPage() {
  return (
  <div>
  <div>
    {/*titulo*/}
    <h1 className = "text-5xl text-blue-950">Nosotros</h1>
    <br />
  </div>
    {/* Slogan */}
    <h1 className = "text-3xl">📢 ¡Somos pioneros en desarrollo de software en el Táchira! 💻🚀</h1>
    <br />
    {/* Bloque de presentación */}
    <div className="bg-white rounded-lg md:rounded-xl shadow-sm p-6 md:p-8 mb-8 md:mb-10 border border-gray-100 w-full">
      <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
        En <span className="text-blue-700 font-bold">TORCHSTONE</span>, buscamos la innovación tecnológica en el estado Táchira para mejorar el estilo de vida de los ciudadanoss. 
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
    <div className="bg-gray-50 flex h-90 w-600 p-4">
    <h1>En <strong className="text-blue-700">TORCHSTONE</strong>, buscamos la innovación tecnológica en el estado Táchira para mejorar el estilo de vida de los ciudadanoss. </h1>
    </div>
    <br />
    <div>
    <h1 className="text-4xl text-blue-950">¿Por qué elegirnos?</h1>
    <br />
    <ul className=" list-inside bg-gray-50 flex h-90 w-600 p-4">
      <li>🔧 Experiencia y trayectoria como referentes</li>
      <li>🚀 Innovación constante</li>
      <li>🤝 Compromiso con la excelencia</li>
      <li>🌍 Enfoque en el cliente</li>
     </ul> 
    </div>
    <div>
      <br />
    {/* Servicios */}
    <h1 className="text-4xl text-blue-950">Nuestros Servicios</h1>
    <br />
    <ul className=" list-inside bg-gray-50 flex h-90 w-600 p-4">
      <li>Desarrollo web y móvil</li>
      <li>Software empresarial</li>
      <li>Consultoría tecnológica</li>
      <li>Soluciones innovadoras</li>
    </ul>
    </div>
    <br />
    {/* CTA de contacto */}
    <div>
    <h1 className="text-4xl text-blue-950">¡Contáctanos!</h1>
    <br />
    <p className = "text-2xl">🌐 Conectamos el futuro hoy</p>
    <p className="text-base md:text-lg">📞 04126667778</p>
    <p className="text-base md:text-lg">✉️ patucasa@gmail.com</p>
    <p className="text-base md:text-lg opacity-90">📍 Ubicados en el Táchira</p> 
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

  );
}

