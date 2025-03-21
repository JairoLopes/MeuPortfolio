import { motion } from "framer-motion";
import { slideUpFadeIn } from "../../animations";

const Projects = () => {
  const data_projects = [
    {
      nome: "Site Personal",
      desc: "Landing page de portfólio e contratação de personal trainer",
      tech_usadas: ["React", "Tailwind CSS", "Typescript", "Framer Motion"],
      link_projeto: "https://tallespersonal.vercel.app/",
      finish: true,
    },
    {
      nome: "Gerador de senhas customizável",
      desc: "(EM BREVE) - Gerador de senhas fortes altamente customizável",
      tech_usadas: ["React", "Tailwind CSS", "Typescript", "Framer Motion"],
      link_projeto: "#",
      finish: false,
    },
    {
      nome: "Plataforma E-comerce",
      desc: "(EM BREVE) - Front-end funcional de uma plataforma de e-comerce",
      tech_usadas: ["React", "Tailwind CSS", "Typescript", "Framer Motion"],
      link_projeto: "#",
      finish: false,
    },
  ];

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
              className="flex flex-col gap-3 p-9 rounded-xl bg-mainTheme/6 border-2 border-mainTheme/10 hover:-translate-y-3
             hover:border-b-mainTheme/30 hover:shadow-2xl hover:shadow-mainTheme
              transition-all duration-500"
            >
              {/* TITULO DO PROJETO */}
              <h3 className="text-xl font-bold mb-2 text-secondaryTheme">
                {i.nome}
              </h3>
              {/* DESCRIÇÃO DO PROJETO */}
              <p className="mb-4">{i.desc}</p>

              {/* Container onde ficam as techs utilizadas no projeto */}
              <div className="">
                {/* Titulo tecnologias usadas */}
                <h2 className="text-mainTheme text-lg font-bold mb-3">
                  Tecnologias usadas:
                </h2>

                {/* Aqui irá são as tecnologias usadas que serão renderizadas dentro de uma span */}
                {i.tech_usadas.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-thirdTheme/10 text-thirdTheme py-1 px-3
                rounded-full text-sm hover:bg-thirdTheme/20 hover:shadow-2xl hover:shadow-thirdTheme/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/*Container parar ver projeto */}
              <div className="flex items-center  gap-5 mt-6">
                <a
                  href={`${i.link_projeto}`}
                  target="_blank"
                  className={`flex items-center gap-2 font-semibold border-b-2 pb-1 border-secondaryTheme
                   text-mainTheme hover:text-mainTheme/80 transition-colors duration-500 ${
                     i.finish ? "cursor-pointer" : "hidden"
                   }`}
                >
                  Ver Projeto
                  <i className="bx bx-right-arrow-circle text-2xl text-myWhite"></i>
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
