'use client'
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { useRef, useEffect } from "react";

export default function Home() {
  const titleRef1 = useRef<HTMLHeadingElement>(null);
  const titleRef2 = useRef<HTMLHeadingElement>(null);
  const titleRef3 = useRef<HTMLHeadingElement>(null);

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

    return () => {
      if (titleRef1.current) observer.unobserve(titleRef1.current);
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

    if (titleRef2.current) observer.observe(titleRef2.current);
    if (titleRef3.current) observer.observe(titleRef3.current);

    return () => {
      if (titleRef2.current) observer.unobserve(titleRef2.current);
      if (titleRef3.current) observer.unobserve(titleRef3.current);
    };
  }, []);
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
          <div className={subtitle({ class: "mt-4" })}>
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
      <section>
        <div className="mt-8 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('fondo1.jpeg')" }}>
          <div ref={titleRef1} className='pt-14 pb-14 pl-32'>
            <span  className={title()}>CONTENIDO&nbsp;</span>
            <span className={title({ color: "blue" })}>AUDIOVISUAL&nbsp;</span>
            <br />
          </div>
          <div className='flex justify-end py-36 '>
            <div className=" w-2/3 pr-32 text-4xl text-justify">
              <h2 ref={titleRef2} className={`${subtitle()} font-kanit `}>Fotografías Profesionales, Grabaciones, Actos de grado, Matrimonios Producción de videoclips, videos promocionales, reels para artistas, influencers o marcas.</h2>
          </div>
          </div>
        </div>

      </section>
    </>
  );
}
