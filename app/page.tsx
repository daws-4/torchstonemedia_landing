'use client'
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";


import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { useRef, useEffect } from "react";
import { Form, Input, Button, Checkbox, Textarea, Card, Divider, CardBody, CardHeader, Image} from '@heroui/react';

export default function Home() {
  //izquierda

  const titleRef1 = useRef<HTMLHeadingElement>(null);
  const titleRef2 = useRef<HTMLHeadingElement>(null);
  const titleRef3 = useRef<HTMLHeadingElement>(null);
  const titleRef4 = useRef<HTMLHeadingElement>(null);
  const misionRef = useRef<HTMLHeadingElement>(null);

  //derecha

  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLHeadingElement>(null);


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
    if (misionRef.current) observer.observe(misionRef.current);

    return () => {
      if (titleRef1.current) observer.unobserve(titleRef1.current);
      if (titleRef2.current) observer.unobserve(titleRef2.current);
      if (titleRef3.current) observer.unobserve(titleRef3.current);
      if (titleRef4.current) observer.unobserve(titleRef4.current);
      if (misionRef.current) observer.unobserve(misionRef.current);
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
    if (visionRef.current) observer.observe(visionRef.current);

    return () => {
      if (ref1.current) observer.unobserve(ref1.current);
      if (ref2.current) observer.unobserve(ref2.current);
      if (ref3.current) observer.unobserve(ref3.current);
      if (ref4.current) observer.unobserve(ref4.current);
      if (visionRef.current) observer.unobserve(visionRef.current);
    };
  }, []);


  const onSubmitContactForm = (e:any) => {
    e.preventDefault();
  }


  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>INNOVA TU&nbsp;</span>
          <span className={title({ color: "yellow" })}>MARCA&nbsp;</span>
          <br />
          <span className={title()}>
            CON TODOS LOS RECURSOS NECESARIOS PARA DESTACAR.
          </span>
          <div className='text-black-200 w-full mt-4 text-4xl mb-4'>
            Automatización, Productos Novedosos, Atención al Cliente, Programación.
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
            href={siteConfig.links.servicios}
          >
            Servicios
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.nosotros}
          >
            Sobre Nosotros
          </Link>
        </div>

        <div className="mt-8">



        </div>
      </section>
      <section className="bg-gray-800">
        <div className="mt-2 bg-cover bg-center bg-no-repeat mx-auto" style={{ backgroundImage: "url('fondo1.jpg')" }}>
          <div ref={titleRef1} className='pt-14 pb-14 pl-32'>
            <div style={{
            backgroundColor: "rgba(31, 127, 206, 0.7)", // Fondo negro con opacidad
            padding: "20px", // Espaciado interno
            borderRadius: "20px", // Bordes redondeados
            color: "white", // Color del texto
            display: "inline-block"
            }}>
            <span className={title({ color: "yellow" })}>AUTOMATIZACIÓN&nbsp;</span>
            </div>
            <br />
          </div>
          <div className='flex justify-end py-36 '>
            <div className=" w-2/3 pr-32 text-4xl text-justify"
            style={{
              backgroundColor: "rgba(31, 127, 206, 0.7)", // Fondo negro con opacidad
              padding: "15px", // Espaciado interno
              borderRadius: "20px", // Bordes redondeados
              color: "white", // Color del texto
            }}>
              <h2 ref={ref1} className={`${subtitle()} font-kanit `}>Fotografías Profesionales, Grabaciones, Actos de grado, Matrimonios Producción de videoclips, videos promocionales, reels para artistas, influencers o marcas.</h2>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-2 bg-cover bg-center bg-no-repeat mx-auto" style={{ backgroundImage: "url('fondo2.jpeg')", backgroundPosition:"0px -70px" }}>
          <div ref={ref2} className='flex justify-end pt-14 pb-14 pr-32'>
            <div style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo negro con opacidad
            padding: "20px", // Espaciado interno
            borderRadius: "20px", // Bordes redondeados
            color: "white", // Color del texto
            display: "inline-block"
            }}>
            <span className={title()}>PRODUCTOS&nbsp;</span>
            <span className={title({ color: "green" })}>NOVEDOSOS&nbsp;</span>
            </div>
            <br />
          </div>
          <div className='pl-32  py-36 '>
            <div className=" w-2/3 text-4xl text-justify"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.7)", // Fondo negro con opacidad
              padding: "15px", // Espaciado interno
              borderRadius: "20px", // Bordes redondeados
              color: "white", // Color del texto
            }}>
              <h2 ref={titleRef2} className={`${subtitle()} font-kanit `}>Meta ads, Google ads, presencia en redes sociales, SEO, estrategias publicitarias, presencia de marca </h2>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-2 bg-cover bg-center bg-no-repeat mx-auto" style={{ backgroundImage: "url('fondo3.webp')" }}>
          <div ref={titleRef3} className='pt-14 pb-14 pl-32'>
            <div style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo negro con opacidad
            padding: "20px", // Espaciado interno
            borderRadius: "20px", // Bordes redondeados
            color: "white", // Color del texto
            display: "inline-block"
            }}>

            <span className={title()}>ATENCIÓN AL&nbsp;</span>
            <span className={title({ color: "green" })}>CLIENTE&nbsp;</span>
            </div>
            <br />
          </div>
          <div className='flex justify-end py-36 '>
            <div 
            className=" w-2/3 pr-32 text-4xl text-justify"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.7)", // Fondo negro con opacidad
              padding: "15px", // Espaciado interno
              borderRadius: "20px", // Bordes redondeados
              color: "white", // Color del texto
            }}>
              <h2 ref={ref3} className={`${subtitle()} font-kanit `}>Logotipos, branding, ilustraciones digitales, flyers para eventos, imagen de marca, edición de fotografías</h2>
            </div>
          </div>
        </div>
      </section>
      <section>
  <div
    className="mt-2 bg-cover bg-center bg-no-repeat mx-auto"
    style={{ backgroundImage: "url('fondo4.jpg')" }}
  >
    <div ref={ref4} 
      className="flex justify-end pt-14 pb-14 pr-32 "
      >
          <div style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Fondo negro con opacidad
          padding: "20px", // Espaciado interno
          borderRadius: "20px", // Bordes redondeados
          color: "white", // Color del texto
          
        }}>

      <span className={title({ color: "cyan" })}>PROGRAMACIÓN&nbsp;</span>
          </div>
      <br />
    </div>
    <div className="pl-32 py-36">
      <div
        className="w-2/3 text-4xl text-justify relative"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Fondo negro con opacidad
          padding: "15px", // Espaciado interno
          borderRadius: "20px", // Bordes redondeados
          color: "white", // Color del texto
        }}
      >
        <h2 ref={titleRef4} className={`${subtitle()} font-kanit`}>
          Landing Pages, sistemas de gestión de datos y bases de datos, apps móviles, páginas web, lógica de dispositivos y demás.
        </h2>
      </div>
    </div>
  </div>
</section>

      {/* contacto */}
{/* 
      <section className='mt-12 border-b-4'>
        <div className='flex items-center justify-center m-6 mb-14'>
          <span className={title()}>CONTACTO&nbsp;</span>
        </div>
        <div className='grid grid-cols-3'>
        <div className='flex flex-col items-center justify-center gap-8'>
          <Card className='p-4'>
            <h1>Email de contacto:</h1>
            <Divider/>
            <p>emailexample@example.com</p>
          </Card>
            <Card className='p-4'>
            <h1>Teléfono de contacto:</h1>
            <Divider/>
            <p>+58 424 1234567</p>
          </Card>
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
     </div>
      </section > */}
      {/* misión y visión */}
      <section className='grid sm:grid-cols-2 grid-cols-1  items-center justify-center mx-32 gap-12 mt-6'>
        <div ref={misionRef}>
        <Card  className='mt-12'>
          <CardHeader className='text-2xl flex items-center justify-center'>
            Misión
          </CardHeader>
          <Divider/>
              <CardBody className='text-xl text-justify'>
        Potenciar el crecimiento y el éxito de nuestros clientes mediante soluciones tecnológicas integrales e innovadoras en cuanto a optimización y automatización de diversos procesos mecanicos tediosos, pudiendose ser más amigables a nuevos trabajadores o clientes.
              </CardBody>
        </Card>
        </div>
        <div ref={visionRef}> 
          <Card  className='mt-12'>
            <CardHeader className='text-2xl flex items-center justify-center'>
        Visión
            </CardHeader>
            <Divider />
            <CardBody className='text-xl text-justify'>
        Ser la empresa referente en la transformación digital de marcas y en la producción de sistemas de gestión de información, reconocida por nuestra capacidad de innovación constante y la excelencia en nuestros servicios integrales, generando un impacto positivo en el mercado.
            </CardBody>
          </Card>
        </div>
      </section>
      {/* productos */}
      <section>
  <div id="productos" className="flex justify-center items-center py-4 gap-6">
    {/* Primera tarjeta */}
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Tan simple</p>
        <small className="text-default-500 text-sm">Que hasta un Alcatel sirve</small>
        <h4 className="font-bold text-large text-orange-500">BusQRCode</h4>
        <p className="wrap text-justify max-w-xs">
          Con la ayuda de los QR, automatiza el registro y control de los fiscales escaneandolo con cualquier teléfono, ahorrando las inmensas hojas a solo unos pocos datos en una computadora o teléfono.
        </p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/BusQRCode.jpg"
          width={329}
        />
      </CardBody>
      <div className="justify-center flex flex-wrap gap-4 items-center">
        <Button color="primary" variant="ghost" as="a" href="/productos/BusQRCode">
          Adquirir
        </Button>
      </div>
    </Card>

    {/* Segunda tarjeta */}
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">¿No sabes contar?</p>
        <small className="text-default-500 text-sm">Te ayudamos con eso</small>
        <h4 className="font-bold text-large text-orange-500">Contador de Personas</h4>
        <p className="wrap text-justify max-w-xs">
          ¿No estas muy seguro de cuantas personas entraron en un lugar o vehículo grande?
           Con este sistema, podrás contar cuantas personas entraron en todo el día, y además, podrás tener un historial de los registros.
        </p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/enconstruccion21.gif"
          width={329}
        />
      </CardBody>
      <div className="justify-center flex flex-wrap gap-4 items-center">
        <Button isDisabled color="primary" as="b" href="/products/CdP">
          Proximamente
        </Button>
      </div>
    </Card>
  </div>
</section>
    </>
  );
}
