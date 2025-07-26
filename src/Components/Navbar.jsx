import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-neutral-200 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-light tracking-tight">Mi Portafolio</h1>
        <ul className="flex gap-6 text-sm text-neutral-700">
          <li><Link to="/" className="hover:text-black transition">Inicio</Link></li>
          <li><Link to="/acerca" className="hover:text-black transition">Acerca de mí</Link></li>
          <li><Link to="/proyectos" className="hover:text-black transition">Proyectos</Link></li>
          <li><Link to="/devlogs" className="hover:text-black transition">Devlogs</Link></li>
          <li><Link to="/contacto" className="hover:text-black transition">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
}
