import { motion, easeInOut } from "framer-motion";
import { Fragment } from "react";
import { slideUpFadeIn, growIn } from "../../animations";

// Dados da experiência profissional
const exp = [
  {
    titulo: "Desenvolvedor React",
    empresa: "Freelancer",
    desc: "Desenvolvimento de interfaces web responsivas utilizando React e Tailwind para a criação de componentes reutilizáveis para diferentes dispositivos.",
    ano: "2024",
    direction: "left", // Direção em que o card será exibido (esquerda)
  },
  {
    titulo: "Programador Front-end",
    empresa: "Prefeitura de Olinda",
    desc: "Realização de ajustes e melhorias no front-end de sistemas corporativos.",
    ano: "2021",
    direction: "right", // Direção em que o card será exibido (direita)
  },
  {
    titulo: "Técnico em segurança da informação",
    empresa: "Bidweb Security",
    desc: "Trabalhando com o desenvolvimento/manutenção de scripts Python em containers, e monitoramento de ameaças.",
    ano: "2020",
    direction: "left", // Direção em que o card será exibido (esquerda)
  },
  {
    titulo: "Help Desk",
    empresa: "Secretaria da fazenda",
    desc: "Prestação de suporte técnico.",
    ano: "2017",
    direction: "right", // Direção em que o card será exibido (direita)
  },
];

// Componente para o círculo na linha do tempo
function Circle() {
  return (
    <div className="hidden md:block rounded-full w-4 h-4 bg-secondaryTheme mx-auto"></div>
  ); // Círculo estilizado
}

// Componente para o card COMPLETO de evento
function EventCard({
  titulo,
  empresa,
  desc,
  ano,
}: {
  titulo: string;
  empresa: string;
  desc: string;
  ano: string;
}) {
  return (
    <motion.div
      initial={slideUpFadeIn.initial}
      whileInView={slideUpFadeIn.animate}
      transition={{ duration: 1.2, ease: easeInOut }}
      className="flex flex-col items-center justify-center gap-y-2 rounded-xl mt-4 md:mt-0 md:mx-6 px-6 pt-2 pb-6 md:p-6 bg-mainTheme/6 md:shadow-2xl md:hover:shadow-none shadow-mainTheme hover:-translate-y-2 transition-all duration-700 border-2 border-mainTheme/10"
    >
      <h1 className="text-lg text-secondaryTheme font-bold rounded-b-md border-b-2 border-mainTheme pb-1">
        {titulo}
      </h1>
      <h2 className="text-sm sm:text-[16px] text-thirdTheme font-semibold mt-1">
        {empresa}
      </h2>
      {/* Exibe a descrição */}
      <p className="text-sm sm:text-[16px] mt-2 text-start">{desc}</p>
      {/* Exibe o ano */}
      <span className="text-[16px] border-b-2 border-secondaryTheme pb-1 font-extrabold mt-5">
        {ano}
      </span>
    </motion.div>
  ); // Card com informações do evento
}

// Componente para a barra vertical na linha do tempo
function Pillar() {
  return (
    <div className="rounded-t-full rounded-b-full w-2 h-full bg-mainTheme mx-auto"></div>
  ); // Barra vertical estilizada
}

// Componente para a linha do tempo
function TimeLine({ events }: { events: typeof exp }) {
  return (
    <div className="w-full my-4">
      {/* Versão Mobile/Tablet: exibe os eventos centralizados em uma única coluna */}
      <div className="md:hidden flex flex-col gap-y-3">
        {events.map((i, index) => (
          <Fragment key={index}>
            {/* Renderiza o card do evento */}
            <EventCard
              titulo={i.titulo}
              empresa={i.empresa}
              desc={i.desc}
              ano={i.ano}
            />
            {/* Renderiza o círculo, exceto após o último evento */}
            {index < events.length - 1 && <Circle />}
          </Fragment>
        ))}
      </div>

      {/* Versão Desktop: utiliza grid de três colunas para posicionar o evento à esquerda ou direita */}
      <div className="hidden md:flex flex-col gap-y-3">
        <Circle />
        {events.map((i, index) => (
          <Fragment key={index}>
            <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto">
              {/* SE A DIREÇÃO FOR LEFT FAÇA: */}
              {i.direction === "left" ? (
                <EventCard
                  titulo={i.titulo}
                  empresa={i.empresa}
                  desc={i.desc}
                  ano={i.ano}
                />
              ) : (
                /* SE NÃO FOR LEFT, OU SEJA, RIGHT, FAÇA: */
                <div></div>
              )}
              <Pillar />
              {/* SE A DIREÇÃO FOR RIGHT FAÇA: */}
              {i.direction === "right" ? (
                <EventCard
                  titulo={i.titulo}
                  empresa={i.empresa}
                  desc={i.desc}
                  ano={i.ano}
                />
              ) : (
                /* SE NÃO FOR RIGHT, OU SEJA, LEFT, FAÇA: */
                <div></div>
              )}
            </div>
            {index < events.length - 1 && <Circle />}
          </Fragment>
        ))}
        <Circle />
      </div>
    </div>
  ); // Linha do tempo com eventos
}

// Componente principal da seção de experiência
const Exp = () => {
  return (
    <section
      id="experiencia"
      className="min-h-screen flex flex-col items-center justify-start pt-[10%] sm:pb-20"
    >
      {/* Container que engloba experiência */}
      <div className="max-w-4xl mx-auto px-4">
        <motion.h3
          initial={slideUpFadeIn.initial}
          whileInView={slideUpFadeIn.animate}
          transition={{ duration: 1.2, ease: easeInOut }}
          className="text-2xl sm:text-4xl font-bold mb-8 text-mainTheme text-center"
        >
          Experiência Profissional
        </motion.h3>

        <motion.p
          initial={slideUpFadeIn.initial}
          whileInView={slideUpFadeIn.animate}
          transition={{ duration: 1.2, ease: easeInOut }}
          className="text-center  font-semibold"
        >
          Segue abaixo um pouco do meu histórico profissional referente a área
          de tecnologia.
        </motion.p>

        {/* Container da timeline */}
        <div className="mt-12 sm:mt-26">
          <TimeLine events={exp} />
        </div>
      </div>
    </section>
  ); // Seção de experiência profissional
};

export default Exp;
