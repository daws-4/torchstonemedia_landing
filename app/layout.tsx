import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 flex-grow">
              {children}
            </main>
            <footer className="bg-blue-500 text-white py-8 mt-14">
              <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-2xl font-bold text-orange-500">Empresa XYZ</h2>
                  <p className="text-sm">© 2023 Empresa XYZ. Todos los derechos reservados.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">Contacto</h3>
                    <p className="text-sm">Email: contacto@empresa.com</p>
                    <p className="text-sm">Teléfono: +123 456 7890</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Enlaces</h3>
                    <ul className="text-sm">
                      <li><a href="#" className="hover:text-orange-500">Inicio</a></li>
                      <li><a href="#" className="hover:text-orange-500">Servicios</a></li>
                      <li><a href="#" className="hover:text-orange-500">Sobre Nosotros</a></li>
                      <li><a href="#" className="hover:text-orange-500">Contacto</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Síguenos</h3>
                    <ul className="flex gap-4 text-sm">
                      <li><a href="#" className="hover:text-orange-500">Twitter</a></li>
                      <li><a href="#" className="hover:text-orange-500">Facebook</a></li>
                      <li><a href="#" className="hover:text-orange-500">Instagram</a></li>
                      <li><a href="#" className="hover:text-orange-500">LinkedIn</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
