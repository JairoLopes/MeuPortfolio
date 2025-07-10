import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const skillsFront = [
    {
      tech: "React",
      icon: "bx bxl-react",
    },
    {
      tech: "TypeScript",
      icon: "bx bxl-typescript",
    },
    {
      tech: "Tailwind CSS",
      icon: "bx bxl-tailwind-css",
    },
  ];

  return (
    <footer className="bg-blue-800/5 py-12 px-4 sm:px-6 lg:px-8 text-white/80 border-t border-mainTheme/20 shadow-2xl shadow-mainTheme">
      <div className="container mx-auto max-w-6xl">
        {/* Grid para as principais seções do footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 text-center md:text-left">
          {/* Seção 1: Tecnologias Usadas */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl md:text-3xl mb-5 text-myWhite/80 font-bold">
              Site desenvolvido com:
            </h3>
            <div className="flex justify-center md:justify-start items-center gap-7 flex-wrap">
              {skillsFront.map((skill, index) => (
                <span
                  key={index}
                  className="flex flex-col justify-center items-center text-mainTheme"
                >
                  <i className={`${skill.icon} text-4xl md:text-5xl`}></i>
                  <span className="text-sm font-semibold text-myWhite/50 mt-1">
                    {skill.tech}
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* Seção 2: Código da Página (GitHub) */}
          <div className="flex flex-col items-center md:items-start md:ml-auto">
            <h3 className="text-xl md:text-3xl mb-5 text-myWhite/80 font-bold">
              Código da página
            </h3>
            <a
              href="https://github.com/JairoLopes/MeuPortfolio"
              target="_blank"
              rel="noopener noreferrer" // Adicionado para segurança em target="_blank"
              className="hover:scale-110 transition-transform duration-300"
            >
              <FaGithub size={40} className="text-mainTheme" />
            </a>
          </div>
        </div>

        {/* Linha separadora */}
        <hr className="border-gray-700 my-10" />

        {/* Direitos Autorais e Nome do Desenvolvedor */}
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
          <p className="mt-2">
            Desenvolvido por{" "}
            <a
              href="https://jairolopes-dev.vercel.app/" // Assumindo que este é o link do seu portfólio
              target="_blank"
              rel="noopener noreferrer"
              className="text-mainTheme text-lg transition-colors duration-300 font-semibold hover:underline" // Removi o animate-pulse, mas você pode adicionar se quiser
            >
              Jairo Lopes
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
