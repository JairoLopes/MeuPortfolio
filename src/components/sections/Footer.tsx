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
    <section
      id="footer"
      className="bg-black/70 shadow-2xl shadow-thirdTheme border-t border-mainTheme/40 w-full"
    >
      {/* Container que engloba todo o footer */}
      <div className="w-full mx-auto text-white pt-10 pb-4 space-y-4">
        {/* CONTEINER QUE ENGLOBA TITULO E ICONES */}
        <div className="flex flex-col gap-5 text-center mb-16">
          <h3 className="text-xl md:text-3xl mb-3 text-myWhite/80">
            Site desenvolvido com:
          </h3>
          {/* CONTAINER QUE ENGLOBA TODOS OS ICONES */}
          <div className="flex justify-center items-center gap-7 flex-wrap">
            {skillsFront.map((i, index) => (
              /* SPAN PARA CADA ICONE */
              <span
                key={index}
                className="flex flex-col justify-center items-center text-mainTheme"
              >
                <i className={`${i.icon} text-4xl md:text-5xl`}></i>
                <span className="text-sm font-semibold text-myWhite/50">
                  {i.tech}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Container que engloba o ícone do Github da página */}
        <div className="flex flex-col items-center justify-center gap-4 py-4">
          <h3 className="text-xl md:text-3xl mb-3 text-myWhite/80">
            Código da página
          </h3>
          <a href="https://github.com/JairoLopes/MeuPortfolio" target="_blank">
            {/* ÍCONE DO GITHUB */}
            <FaGithub size={50} className="text-mainTheme" />
          </a>
        </div>

        {/* CONTAINER QUE ENGLOBA O NOME DO DESENVOLVEDOR */}
        <div className="flex justify-center mt-10">
          <span className="text-myWhite">
            Desenvolvido por <strong>Jairo Lopes</strong>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
