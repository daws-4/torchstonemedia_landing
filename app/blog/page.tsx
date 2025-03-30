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
  );
}
