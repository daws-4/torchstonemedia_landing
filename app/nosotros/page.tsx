"use client";

import {Card, CardBody, CardFooter, Image} from "@heroui/react";


export default function BlogPage() {
  const list = [
    {
      title: "Línea Santa Teresa - Las Lomas",
      img: "https://venebuses.com/m1/photos/23e3597c6548765a981dc1cd8ce8e2b6.jpg",
    },
    {
      title: "Línea Torbes Barrios",
      img: "https://venebuses.com/m1/photos/a22724d91ae06d181f192086e0ba034d.jpg",
    },
    {
      title: "Línea Union Cordero",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsK6x7qNnaoZOG8FRHj9tFRzFit9EDlWPCAw&s.jpg",
    },
  ];

  return (
  <div>
  <div>
    {/*titulo*/}
    <h1 className = "text-5xl text-black-950">Nosotros</h1>
    <br />
  </div>
    {/* Slogan */}
    <h1 className = "text-3xl">📢 ¡Somos pioneros en desarrollo de software en el Táchira! 💻🚀</h1>
    <br />
    {/* Bloque de presentación */}
    <div className="bg-white rounded-lg md:rounded-xl shadow-sm p-6 md:p-8 mb-8 md:mb-10 border border-gray-100 w-full">
      <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
        En <span className="text-blue-700 font-bold">TORCHSTONE</span>, buscamos la innovación tecnológica en el estado Táchira para mejorar el estilo de vida de los ciudadanos. 
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
    <div>
      <br />
    {/* Servicios */}
    <div className="space-y-4 md:space-y-6">
        <h3 className="text-lg md:text-xl font-bold text-blue-800 flex items-center">
          <svg className="w-5 h-5 md:w-6 md:h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
          Nuestros Servicios
        </h3>
        <ul className="space-y-3 md:space-y-4 pl-2">
          {[
            "Desarrollo web y móvil",
            "Software empresarial",
            "Consultoría tecnológica",
            "Soluciones innovadoras"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2 mt-0.5">✓</span>
              <span className="text-gray-700 text-sm md:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    <br />
    {/* CTA de contacto */}
    <div className="space-y-4 md:space-y-6">
        <h3 className="text-lg md:text-xl font-bold text-blue-800 flex items-center">
          <svg className="w-5 h-5 md:w-6 md:h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
          Empresas con las que trabajamos
    </h3>
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        /* eslint-disable no-console */
        <Card key={index} isPressable shadow="sm" onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              alt={item.title}
              className="w-full object-cover h-[140px]"
              radius="lg"
              shadow="sm"
              src={item.img}
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
    <div className="mt-4 md:mt-6 flex flex-wrap justify-center gap-2">
        {['#InnovaciónTachirense', '#SoftwareDeCalidad'].map((tag) => (
          <span key={tag} className="bg-white/20 px-2 py-1 rounded-full text-xs md:text-sm text-blue-800">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
  </div>
  </div>  
  );
}

