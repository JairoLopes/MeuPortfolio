import Digitando from "../Digitando";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  slideRight,
  slideLeft,
  slideDownFadeIn,
  pulseIn,
  growIn,
} from "../../animations";

/* Armazena o componente numa classe motion para o componente aceitar as propriedades do motion */
const MotionDigitando = motion(Digitando);

const Home = () => {
  const timeDuration = 2.5;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative z-20"
    >
      {/* --------- VIDEOS PARA BACKGROUND --------------------- */}
      {/* Video para desktop */}
      <video
        className="hidden sm:block absolute inset-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        src="/video/bg5.mp4"
      />

      {/* Video para mobile */}
      <video
        className="block sm:hidden absolute inset-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        src="/video/bg_mobile1.mp4"
      />

      {/* Criando camada overlay para melhorar a legibilidade do texto */}
      <div className="absolute inset-0 bg-deepBlue opacity-60 sm:opacity-88 -z-10"></div>

      {/* -------- FIM DO BLOCO DE VIDEOS PARA BACKGROUND ------- */}

      {/* Sub-container que engloba toda a home */}
      <div className="text-center z-10 px-4">
        {/* Titulo Meu Nome */}
        <motion.h1
          initial={growIn.initial}
          whileInView={growIn.animate}
          transition={{ duration: timeDuration, delay: 0.25 }}
          className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
        >
          Jairo Lopes
        </motion.h1>

        {/* Container de descrição e digitando */}
        <div id="description" className="mb-8">
          {/* usando o componente embutido na classe motion para usar as animações */}
          <MotionDigitando
            initial={pulseIn.initial}
            whileInView={pulseIn.animate}
            transition={{ duration: 2, delay: 0.8 }}
            textos={[
              "Desenvolvedor Front-End",
              "Vue.js",
              "Pinia",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "JavaScript",
            ]}
            classesTw="text-myWhite font-semibold text-xl text-secondaryTheme sm:text-3xl mb-8 max-w-lg mx-auto min-h-[30px]"
            classeCursor="font-medium text-myWhite"
          />

          <motion.p
            initial={slideDownFadeIn.initial}
            whileInView={slideDownFadeIn.animate}
            transition={{ duration: timeDuration, delay: 0.25 }}
            className="text-gray-300 text-start sm:text-center sm:text-lg max-w-2xl mx-auto"
          >
            Desenvolvedor Frontend com foco em{" "}
            <strong className="strong2">Vue.js</strong>,{" "}
            <strong className="strong2">React</strong>,{" "}
            <strong className="strong2">Tailwind CSS</strong> e{" "}
            <strong className="strong2">TypeScript</strong>.<br />
            Utilizando ferramentas de <strong className="strong2">
              IA
            </strong>{" "}
            para otimização de código.
          </motion.p>
        </div>

        {/* CONTAINER ONDE FICA OS LINKS DE VER PROJETOS E CONTATO */}
        <div className="flex justify-center items-center space-x-4">
          {/* PROJETOS LINK */}
          <motion.a
            initial={slideRight.initial}
            whileInView={slideRight.animate}
            transition={{ duration: timeDuration, delay: 0.25 }}
            href="#projects"
            className="btn-hover2"
          >
            <span className="relative z-10">Ver Projetos</span>
          </motion.a>

          {/* CONTATO LINK */}
          <motion.a
            initial={slideLeft.initial}
            whileInView={slideLeft.animate}
            transition={{ duration: timeDuration, delay: 0.25 }}
            href="#contact"
            className="btn-hover"
          >
            <span className="relative z-10">Contato</span>
          </motion.a>
        </div>
      </div>

      {/*CONTAINER DO Linkedin e GITHUB LINK */}
      <div className="space-y-5 absolute bottom-4 right-4">
        {/* LINK DO LINKEDIN */}
        <motion.a
          initial={slideRight.initial}
          whileInView={slideRight.animate}
          transition={{ duration: timeDuration, delay: 0.25 }}
          href="https://www.linkedin.com/in/jairo-lopes-filho/"
          target="_blank"
          className="hidden sm:flex flex-col hover:-translate-y-2 transition-all duration-700"
        >
          <FaLinkedin className="text-4xl text-mainTheme hover:text-secondaryTheme transition-colors duration-1000" />
        </motion.a>

        {/* LINK DO GITHUB */}
        <motion.a
          initial={slideLeft.initial}
          whileInView={slideLeft.animate}
          transition={{ duration: timeDuration, delay: 0.25 }}
          href="https://github.com/JairoLopes"
          target="_blank"
          className="hidden sm:flex flex-col hover:-translate-y-2 transition-all duration-700"
        >
          <FaGithub className="text-4xl text-mainTheme hover:text-secondaryTheme transition-colors duration-1000" />
        </motion.a>
      </div>
    </section>
  );
};

export default Home;
