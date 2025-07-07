import { useState, useEffect, forwardRef } from "react";

interface DigitandoProps {
  textos: string[]; // Agora 'textos' é um array de strings
  classesTw?: string; // Estilização do texto
  classeCursor?: string; // Estilização do cursor
}

const Digitando = forwardRef<HTMLHeadingElement, DigitandoProps>(
  ({ textos, classesTw = "", classeCursor = "" }, ref) => {
    const [indexTextoAtual, setIndexTextoAtual] = useState(0); // Índice do texto no array 'textos'
    const [indexCaractere, setIndexCaractere] = useState(0); // Índice do caractere dentro do texto atual
    const [deletando, setDeletando] = useState(false);
    const [mostrarCursor, setMostrarCursor] = useState(true);

    const textoAtual = textos[indexTextoAtual];

    useEffect(() => {
      const velocidadeDigitar = 80;
      const velocidadeDeletar = 40; // Um pouco mais rápido para deleção
      const pausaNoFinalDigitar = 2000; // Pausa após digitar o texto completo
      const pausaNoFinalDeletar = 500; // Pausa após deletar o texto, antes de começar o próximo

      let timeout: ReturnType<typeof setTimeout>; // Correção na tipagem aqui

      if (deletando) {
        // Lógica para deletar
        if (indexCaractere > 0) {
          timeout = setTimeout(() => {
            setIndexCaractere((prev) => prev - 1);
          }, velocidadeDeletar);
        } else {
          // Terminou de deletar o texto atual
          timeout = setTimeout(() => {
            setDeletando(false); // Seta para começar a digitar
            setIndexTextoAtual((prev) => (prev + 1) % textos.length); // Próximo texto
          }, pausaNoFinalDeletar);
        }
      } else {
        // Lógica para digitar
        if (indexCaractere < textoAtual.length) {
          timeout = setTimeout(() => {
            setIndexCaractere((prev) => prev + 1);
          }, velocidadeDigitar);
        } else {
          // Terminou de digitar o texto atual
          timeout = setTimeout(() => {
            setDeletando(true); // Seta para começar a deletar
          }, pausaNoFinalDigitar);
        }
      }

      return () => clearTimeout(timeout);
    }, [indexCaractere, deletando, textoAtual, textos.length, indexTextoAtual]); // Dependências completas

    useEffect(() => {
      // Lógica para piscar o cursor
      const intervalo = setInterval(
        () => setMostrarCursor((prev) => !prev),
        500
      );
      return () => clearInterval(intervalo);
    }, []);

    return (
      <h1 ref={ref} className={classesTw}>
        {/* Exibe o texto cortado até o indexCaractere */}
        {textoAtual.slice(0, indexCaractere)}
        <span
          className={`${classeCursor} inline-block w-[0.5ch]`}
          style={{ opacity: mostrarCursor ? 1 : 0 }}
        >
          |
        </span>
      </h1>
    );
  }
);

export default Digitando;
