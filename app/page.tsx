'use client'
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { useRef, useEffect } from "react";
import { Form, Input, Button, Checkbox, Textarea } from '@heroui/react';

export default function Home() {
  //izquierda

  const titleRef1 = useRef<HTMLHeadingElement>(null);
  const titleRef2 = useRef<HTMLHeadingElement>(null);
  const titleRef3 = useRef<HTMLHeadingElement>(null);
  const titleRef4 = useRef<HTMLHeadingElement>(null);

  //derecha

  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideInFromLeft');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef1.current) observer.observe(titleRef1.current);
    if (titleRef2.current) observer.observe(titleRef2.current);
    if (titleRef3.current) observer.observe(titleRef3.current);
    if (titleRef4.current) observer.observe(titleRef4.current);

    return () => {
      if (titleRef1.current) observer.unobserve(titleRef1.current);
      if (titleRef2.current) observer.unobserve(titleRef2.current);
      if (titleRef3.current) observer.unobserve(titleRef3.current);
      if (titleRef4.current) observer.unobserve(titleRef4.current);
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideInFromRight');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref1.current) observer.observe(ref1.current);
    if (ref2.current) observer.observe(ref2.current);
    if (ref3.current) observer.observe(ref3.current);
    if (ref4.current) observer.observe(ref4.current);

    return () => {
      if (ref1.current) observer.unobserve(ref1.current);
      if (ref2.current) observer.unobserve(ref2.current);
      if (ref3.current) observer.unobserve(ref3.current);
      if (ref4.current) observer.unobserve(ref4.current);
    };
  }, []);


  const onSubmitContactForm = (e:any) => {
    e.preventDefault();
  }


  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>IMPULSA TU&nbsp;</span>
          <span className={title({ color: "yellow" })}>MARCA&nbsp;</span>
          <br />
          <span className={title()}>
            CON TODOS LOS RECURSOS NECESARIOS PARA DESTACAR.
          </span>
          <div className='text-default-200 w-full mt-4 text-4xl mb-4'>
            Contenido Audiovisual, Marketing, Diseño Gráfico, Programación.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Servicios
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            Sobre Nosotros
          </Link>
        </div>

        <div className="mt-8">



        </div>
      </section>
      <section className="bg-gray-800">
        <div className="mt-2 bg-cover bg-center bg-no-repeat mx-auto" style={{ backgroundImage: "url('fondo1.jpeg')" }}>
          <div ref={titleRef1} className='pt-14 pb-14 pl-32'>
            <span className={title()}>CONTENIDO&nbsp;</span>
            <span className={title({ color: "blue" })}>AUDIOVISUAL&nbsp;</span>
            <br />
          </div>
          <div className='flex justify-end py-36 '>
            <div className=" w-2/3 pr-32 text-4xl text-justify">
              <h2 ref={ref1} className={`${subtitle()} font-kanit `}>Fotografías Profesionales, Grabaciones, Actos de grado, Matrimonios Producción de videoclips, videos promocionales, reels para artistas, influencers o marcas.</h2>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-2 bg-cover bg-center bg-no-repeat mx-auto" style={{ backgroundImage: "url('fondo2.jpg')" }}>
          <div ref={ref2} className='flex justify-end pt-14 pb-14 pr-32'>
            <span className={title({ color: "blue" })}>MARKETING&nbsp;</span>
            <br />
          </div>
          <div className='pl-32  py-36 '>
            <div className=" w-2/3 text-4xl text-justify">
              <h2 ref={titleRef2} className={`${subtitle()} font-kanit `}>Meta ads, Google ads, presencia en redes sociales, SEO, estrategias publicitarias, presencia de marca </h2>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-2 bg-cover bg-center bg-no-repeat mx-auto" style={{ backgroundImage: "url('fondo3.jpg')" }}>
          <div ref={titleRef3} className='pt-14 pb-14 pl-32'>
            <span className={title()}>DISEÑO&nbsp;</span>
            <span className={title({ color: "green" })}>GRÁFICO&nbsp;</span>
            <br />
          </div>
          <div className='flex justify-end py-36 '>
            <div className=" w-2/3 pr-32 text-4xl text-justify">
              <h2 ref={ref3} className={`${subtitle()} font-kanit `}>Logotipos, branding, ilustraciones digitales, flyers para eventos, imagen de marca, edición de fotografías</h2>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-2 bg-cover bg-center bg-no-repeat mx-auto" style={{ backgroundImage: "url('fondo4.jpg')" }}>
          <div ref={ref4} className='flex justify-end pt-14 pb-14 pr-32'>
            <span className={title({ color: "cyan" })}>PROGRAMACIÓN&nbsp;</span>
            <br />
          </div>
          <div className='pl-32 py-36 '>
            <div className=" w-2/3  text-4xl text-justify">
              <h2 ref={titleRef4} className={`${subtitle()} font-kanit `}>Landing Pages, Sistemas de gestión de datos, apps móviles, páginas web, apps de escritorio, gestión de bases de datos </h2>
            </div>
          </div>
        </div>
      </section>

      {/* contacto */}

      <section className='mt-12'>
        <div className='flex items-center justify-center m-6 mb-14'>
          <span className={title()}>CONTACTO&nbsp;</span>
        </div>
        <div className='grid grid-cols-3'>
        <div className='flex flex-col items-center justify-center gap-8'>
          <div>
            <h1>Email de contacto:</h1>
            <p>emailexample@example.com</p>
          </div>
          <div>
            <h1>Teléfono de contacto:</h1>
            <p>+58 424 1234567</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-8'>
            <Button className='flex flex-wrap' variant='bordered'>
                 <p>Contacta al equipo de contenido Audiovisual</p>
              </Button>
            <Button className='' variant='bordered'>
              <p>Contacta al equipo de Marketing</p>
            </Button> 
            <Button className='' variant='bordered'>
              <p>Contacta al equipo de Diseño Gráfico</p>
            </Button>
            <Button className='' variant='bordered'>
                 <p>Contacta al equipo de Programación</p>
            </Button>
        </div>
        <div className=' rounded border-gray-900 p-8'>
          <Form className="flex flex-col gap-8 max-w-lg" onSubmit={onSubmitContactForm}>
            <Input
              isRequired
              errorMessage="Please enter a valid email"
              label="Nombre"
              labelPlacement="outside"
              name="nombre"
              placeholder="Ingresa tu nombre"
              type="text"
              className="max-w-xs"
            />
            <Input
              isRequired
              errorMessage="Please enter a valid email"
              label="Email"
              labelPlacement="outside"
              name="email"
              placeholder="Ingresa tu email"
              type="email"
              className="max-w-xs"
              />
            <Input
              className="max-w-xs"
              isRequired
              errorMessage="Please enter a valid email"
              label="Número de Teléfono"
              labelPlacement="outside"
              name="email"
              placeholder="Ingresa tu número de teléfono"
              type="number"
              />
            <Textarea className="max-w-xs" name='solicitud' label="Solicitud" placeholder="Ingresa tu solicitud" />
          
            <Button type="submit" variant="bordered">
              Submit
            </Button>

          </Form>
        </div>
|     </div>
      </section>
      {/* misión y visión */}
      <section>

      </section>
      {/* equipo */}
    </>
  );
}
