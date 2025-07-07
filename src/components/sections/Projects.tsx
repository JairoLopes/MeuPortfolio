import { motion } from "framer-motion";
import { slideUpFadeIn } from "../../animations";
import { FaGithub, FaInfoCircle } from "react-icons/fa";
import { useState } from "react";

const Projects = () => {
  const [activeTooltipIndex, setActiveTooltipIndex] = useState<number | null>(
    null
  );

  const data_projects = [
    {
      nome: "Tidetrack",
      desc: "Plataforma web para monitoramento marítimo global. Ele exibe dados em tempo real sobre a altura, temperatura e direção das ondas, além do nível do mar. Conecta-se à API Marine Weather da Open-Meteo para os dados marítimos e à API Nominatim da OpenStreetMap para informações de localização e busca no mapa.",
      tech_usadas: [
        "React",
        "Tailwind CSS",
        "Typescript",
        "Framer Motion",
        "API Rest",
      ],
      link_projeto: "https://tidetrack-sea.vercel.app/",
      github: "https://github.com/JairoLopes/Tidetrack",
      real: true,
      finish: true,
    },
    {
      nome: "Astrolobby",
      desc: "Plataforma web para exploração astronômica, atuando como um hub de notícias e conteúdo educativo. Integra informações oficiais da NASA conectando a API APOD, e oferece tradução instantânea para o português conectando uma segunda API(DeepL).",
      tech_usadas: [
        "React",
        "Tailwind CSS",
        "Typescript",
        "Framer Motion",
        "API Rest",
        "React router",
      ],
      link_projeto: "https://astrolobby.vercel.app/",
      github: "https://github.com/JairoLopes/Astrolobby",
      real: true,
      finish: true,
    },
    {
      nome: "E-commerce - Nuphar",
      desc: "Front-end de uma plataforma de e-commerce para venda de algas marinhas para aquarismo",
      tech_usadas: ["React", "Tailwind CSS", "Typescript", "Framer Motion"],
      link_projeto: "https://nuphar.vercel.app/",
      github: "https://github.com/JairoLopes/Ecommerce",
      real: false,
      finish: true,
    },
    {
      nome: "Site Personal",
      desc: "Landing page de portfólio e contratação de personal trainer",
      tech_usadas: ["React", "Tailwind CSS", "Typescript", "Framer Motion"],
      link_projeto: "https://talles-personal.vercel.app/",
      github: "https://github.com/JairoLopes/personal_trainer",
      real: true,
      finish: true,
    },
    {
      nome: "E-commerce",
      desc: "(EM DESENVOLVIMENTO)",
      tech_usadas: ["React", "Tailwind CSS", "Typescript", "Framer Motion"],
      link_projeto: "#",
      github: "",
      real: true,
      finish: false,
    },
  ];

  const handleTooltipToggle = (index: number) => {
    setActiveTooltipIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex justify-center pt-[10%] pb-20"
    >
      {/* Container que engloba todo o projeto */}
      <div className="max-w-5xl mx-auto px-4">
        {/* TITULO */}
        <motion.h2
          className="text-center text-2xl sm:text-3xl font-bold mb-16 gradient-text"
          initial={slideUpFadeIn.initial}
          whileInView={slideUpFadeIn.animate}
          transition={{ duration: 1.2 }}
        >
          Meus Projetos
        </motion.h2>

        {/* Container que engloba os cards do projeto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Iteração do objeto que da valor ao card para renderiza-lo */}
          {data_projects.map((i, index) => (
            <motion.div
              id="cardUniq"
              initial={slideUpFadeIn.initial}
              whileInView={slideUpFadeIn.animate}
              transition={{ delay: index * 0.2 }}
              key={index}
              className="relative flex flex-col gap-3 p-9 rounded-xl bg-mainTheme/6 border-2 border-mainTheme/10 hover:-translate-y-3
             hover:border-b-mainTheme/30 hover:shadow-2xl hover:shadow-mainTheme
              transition-all duration-500"
            >
              {/* CONTAINER PARA TITULO DO PROJETO + ICONE INFO */}
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold mb-2 text-secondaryTheme">
                  {i.nome}
                </h3>
                {i.real ? (
                  <div
                    className="relative cursor-pointer"
                    onClick={() => handleTooltipToggle(index)}
                  >
                    <FaInfoCircle size={22} className="text-mainTheme" />
                    {/* Alteração aqui: Controle de opacidade com base no estado */}
                    {activeTooltipIndex === index && (
                      <span
                        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                                   bg-emerald-600 text-white font-semibold text-sm rounded py-2 px-3
                                   transition-opacity duration-300 whitespace-nowrap z-10
                                   ${
                                     activeTooltipIndex === index
                                       ? "opacity-100"
                                       : "opacity-0"
                                   }`} // Controla opacidade com base no estado
                      >
                        Projeto Real
                      </span>
                    )}
                  </div>
                ) : (
                  <div
                    className="relative cursor-pointer"
                    onClick={() => handleTooltipToggle(index)}
                  >
                    <FaInfoCircle size={22} className="text-mainTheme" />
                    {/* Alteração aqui: Controle de opacidade com base no estado */}
                    {activeTooltipIndex === index && (
                      <span
                        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                                   bg-thirdTheme text-white text-sm font-semibold rounded py-2 px-3
                                   transition-opacity duration-300 whitespace-nowrap z-10
                                   ${
                                     activeTooltipIndex === index
                                       ? "opacity-100"
                                       : "opacity-0"
                                   }`} // Controla opacidade com base no estado
                      >
                        Projeto Simulado
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* DESCRIÇÃO DO PROJETO */}
              <p className="mb-4 min-h-[168px] flex items-center">{i.desc}</p>

              {/* Container onde ficam as techs utilizadas no projeto */}
              <div className="min-h-[88px]">
                {/* Titulo tecnologias usadas */}
                <h2 className="text-mainTheme text-lg font-bold mb-3">
                  Tecnologias usadas:
                </h2>

                {/* Aqui são as tecnologias usadas que serão renderizadas dentro de uma span */}
                <div className="flex flex-wrap gap-2">
                  {" "}
                  {/* flex-wrap para as tags quebrarem a linha */}
                  {i.tech_usadas.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`${
                        i.finish === false && `blur-sm opacity-40`
                      } bg-thirdTheme/10 text-thirdTheme py-1 px-3
                                 rounded-full text-sm hover:bg-thirdTheme/20 hover:shadow-2xl hover:shadow-thirdTheme/60`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/*Container parar ver projeto e Github*/}
              <div className="flex justify-between items-center mt-6">
                {/* Link para ver projeto */}
                <a
                  href={`${i.link_projeto}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 font-semibold border-b-2 pb-1 border-secondaryTheme
                   text-mainTheme hover:text-mainTheme/80 transition-colors duration-500 ${
                     i.finish
                       ? "cursor-pointer"
                       : "opacity-30 pointer-events-none"
                   }`}
                >
                  Ver Projeto
                  <i className="bx bx-right-arrow-circle text-2xl text-myWhite"></i>
                </a>

                {/* Link para o Github */}
                <a
                  className={`${
                    i.finish ? "block" : "hidden"
                  } flex flex-col gap-2 items-center`}
                  href={`${i.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} className="" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
