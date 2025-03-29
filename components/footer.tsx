export function Footer(){
    return(
        <footer className="bg-blue-500 text-white py-8 mt-14">
              <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-2xl font-bold text-orange-500">TORCHSTONE</h2>
                  <p className="text-sm">© 2025 TORCHSTONE. Todos los derechos reservados.</p>
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
    )
}