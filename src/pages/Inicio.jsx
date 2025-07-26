import SectionTitle from "../Components/SectionTitle";
import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-white text-neutral-900">

      {/* HERO */}
      <section className="text-center mb-20">
        <h1 className="text-4xl font-light tracking-tight">Jorge Castroo</h1>
        <p className="text-md text-neutral-500 mt-2">Diseñador</p>
        <p className="mt-6 italic text-neutral-400">“Transformo ideas en interfaces funcionales y atractivas.”</p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/proyectos"
            className="px-6 py-2 border border-neutral-800 rounded-full text-sm hover:bg-neutral-100 transition"
          >
            Ver proyectos
          </Link>
          <Link
            to="/contacto"
            className="px-6 py-2 text-sm text-neutral-700 underline underline-offset-4 hover:text-black transition"
          >
            Contactar
          </Link>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="mb-24">
        <SectionTitle>Proyectos destacados</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="border border-neutral-200 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-2">Proyecto RH - WebApp</h3>
            <p className="text-neutral-500 text-sm mb-4">Aplicación para gestión de recursos humanos desarrollada con React y Firebase.</p>
            <a
              href="#"
              className="text-sm text-neutral-700 underline hover:text-black"
            >
              Ver proyecto →
            </a>
          </div>

          <div className="border border-neutral-200 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-2">Proyecto 2</h3>
            <p className="text-neutral-500 text-sm mb-4">texto de ejemplo</p>
            <a
              href="#"
              className="text-sm text-neutral-700 underline hover:text-black"
            >
              Ver proyecto →
            </a>
          </div>
        </div>
        <div className="text-center mt-10">
          <Link to="/proyectos" className="text-sm underline text-neutral-700 hover:text-black">
            Ver todos los proyectos
          </Link>
        </div>
      </section>

      {/* TECNOLOGÍAS */}
      <section className="mb-20">
        <SectionTitle>Tecnologías que utilizo</SectionTitle>
        <div className="flex flex-wrap justify-center gap-3 mt-6 text-sm">
          {["React", "Tailwind", "Firebase", "GitHub","Netlify"].map((tech) => (
            <span
              key={tech}
              className="border border-neutral-300 rounded-full px-4 py-1 text-neutral-600 hover:bg-neutral-100 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* FRASE */}
      <section className="text-center text-neutral-400 italic text-md mt-12">
        <p>“El diseño no es solo cómo se ve, sino cómo funciona.” – Steve Jobs</p>
      </section>
    </div>
  );
}
