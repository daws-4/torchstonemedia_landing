"use client";

import { useState } from "react";
import { title, subtitle } from "@/components/primitives";
import { button as buttonStyles } from "@heroui/theme";
import { Form, Input, Button, Checkbox, Textarea, Card, Divider, CardBody, CardHeader, Image} from '@heroui/react';

export default function ProductosPage() {
    // Estado para alternar entre fondo claro y oscuro
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Estilos dinámicos para el fondo
    const backgroundStyle = isDarkMode
      ? {
          background: "linear-gradient(to right, #1e3c72, #2a5298)", // Fondo oscuro
          color: "white", // Texto claro para fondo oscuro
        }
      : {
          background: "linear-gradient(to right, #ff7e5f, #feb47b)", // Fondo claro
          color: "black", // Texto oscuro para fondo claro
        };

    return(

<>    
<div style={{
        ...backgroundStyle,
        width: "105.5%", // Asegura que ocupe todo el ancho
        minHeight: "100vh", // Asegura que cubra toda la altura de la ventana
      }}>   
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-xl text-center justify-center">
              <div style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo negro con opacidad
            padding: "20px", // Espaciado interno
            borderRadius: "20px", // Bordes redondeados
            color: "white", // Color del texto
            display: "inline-block"}}>
              <span className={title({ color: "yellow" })}>NUESTROS PRODUCTOS&nbsp;</span>
              <br />
              <span className={title()}>
                DISPUESTOS A MEJORAR TU NEGOCIO
              </span>
              </div>
            </div>
    </section>        
    <section>
        <div id="productos" className="flex justify-center items-center py-4 gap-6">
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
</div>
</>    
    
    )
}