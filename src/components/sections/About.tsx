import { easeInOut, motion } from "framer-motion";
import { slideUpFadeIn, growIn } from "../../animations";

import { FaReact } from "react-icons/fa";
import { IoLogoVue } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const About = () => {
  const sizeIcons = 45;
  const skillsFront = [
    {
      tech: "Vue.js",
      icon: <IoLogoVue size={sizeIcons} className="text-thirdTheme" />,
    },
    {
      tech: "React",
      icon: <FaReact size={sizeIcons} className="text-mainTheme" />,
    },
    {
      tech: "Typescript",
      icon: <SiTypescript size={sizeIcons} className="text-blue-500" />,
    },
    {
      tech: "Tailwind CSS",
      icon: <RiTailwindCssFill size={sizeIcons} className="text-sky-400" />,
    },

    {
      tech: "JavaScript",
      icon: <IoLogoJavascript size={sizeIcons} className="text-yellow-500" />,
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-start pt-[10%] sm:pb-20"
    >
      {/* Conateiner que engloba todo o about */}
      <div className="max-w-3xl mx-auto px-4">
        {/* Titulo */}
        <motion.h2
          initial={slideUpFadeIn.initial}
          whileInView={slideUpFadeIn.animate}
          transition={{ duration: 1.2 }}
          className=" text-2xl sm:text-4xl font-bold mb-8 gradient-text text-center"
        >
          Sobre mim
        </motion.h2>

        {/* FOTO VAI FICAR AQUI!!! */}
        <div className="flex justify-center mb-10">
          <motion.img
            initial={growIn.initial}
            whileInView={growIn.animate}
            transition={{ duration: 1.2 }}
            src="/img/perfil.jpeg"
            alt="Foto Perfil"
            className="w-28 h-28 md:w-35 md:h-35 -rotate-35 border-2 border-mainTheme/40 rounded-full object-cover shadow-2xl shadow-mainTheme"
          />
        </div>

        {/* CONTAINER DE FORMAÇÃO */}
        <div className="text-center mb-9 space-y-6 sm:px-7">
          <motion.h3
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 1.2, ease: easeInOut }}
            className="text-secondaryTheme max-sm:text-lg text-2xl italic font-semibold"
          >
            Formação e Habilidades
          </motion.h3>
          <motion.p
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 1.2, ease: easeInOut }}
            className="text-sm sm:text-[16px] text-start sm:text-center"
          >
            <strong className="strong2">Graduado</strong> em{" "}
            <strong className="strong2">redes de computadores</strong>, {""}
            <strong className="strong2">especializado</strong> em {""}
            <strong className="strong2">desenvolvimento web</strong>, com foco
            em <strong className="strong2">React</strong>,{" "}
            <strong className="strong2">Tailwind CSS</strong> e{" "}
            <strong className="strong2">Typescript</strong>, criando interfaces
            elegantes, responsivas e de alto desempenho, desenvolvendo
            componentes reutilizáveis e aplicando animações envolventes com{" "}
            <strong className="strong2">Framer Motion</strong> para experiências
            dinâmicas.
          </motion.p>

          {/* Skills container */}
          <div className="flex flex-col gap-4">
            {/* Subcontainer que engloba as skills */}
            <div className="flex flex-col justify-center items-center rounded-xl p-6 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-myWhite">
                Tecnologias
              </h3>

              {/* Container que engloba todas as skills*/}
              <div className="flex justify-center items-center flex-wrap gap-10 pt-7">
                {/* Irá iterar o array de skills e estiliza-las cada uma nessa span */}
                {skillsFront.map((skill, index) => (
                  /* Conteiner onde fica armzenado o icone do boxicons e a span com o nome da tecnologia */
                  <motion.div
                    key={index}
                    initial={slideUpFadeIn.initial}
                    whileInView={slideUpFadeIn.animate}
                    transition={{ delay: index * 0.2 }}
                    className="flex flex-col items-center justify-center gap-2 hover:scale-95 active:scale-95 transition-all duration-500"
                  >
                    {skill.icon}
                    <span className="font-semibold text-myWhite">
                      {skill.tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
