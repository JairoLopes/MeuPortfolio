import React from "react";

const Cores = () => {
  // Definindo combinações de cores vibrantes inspiradas em tendências de design
  const colorSets = [
    // Paleta Mocha Mousse
    ["#6F4F1F", "#D2B48C", "#C49A6C"], // marrom chocolate, bege, marrom claro
    // Paleta Bambú 237-05
    ["#A7C957", "#D9E26D", "#F1F1C1"], // verde bambu, verde claro, amarelo pálido
    // Paleta Magenta Elétrico
    ["#D5006D", "#FF4081", "#F50057"], // magenta intenso, rosa choque, rosa vibrante
    // Paleta Azul Elétrico
    ["#2962FF", "#0091EA", "#00B0FF"], // azul elétrico, azul claro, azul celeste
    // Paleta Verde Neon
    ["#00E676", "#00C853", "#00BFAE"], // verde neon, verde escuro, verde água
    // Paleta Minimalista Neutra
    ["#F5F5F5", "#E0E0E0", "#BDBDBD"], // cinza claro, cinza médio, cinza escuro
    // Paleta Natural Sustentável
    ["#8D6E63", "#A1887F", "#D7CCC8"], // marrom terroso, cinza amadeirado, bege suave
    // Paleta Laranja Vibrante
    ["#FF5722", "#FF7043", "#FF8A65"], // laranja intenso, laranja claro, pêssego
    // Paleta Roxo Sofisticado
    ["#8E24AA", "#9C27B0", "#AB47BC"], // roxo vibrante, roxo médio, lilás
    // Paleta Azul Sereno
    ["#0288D1", "#039BE5", "#03A9F4"], // azul sereno, azul médio, azul claro
  ];

  return (
    <div className="flex flex-wrap gap-6 p-6 bg-gray-900 min-h-screen justify-center">
      {colorSets.map((set, index) => (
        <div
          key={index}
          className="p-4 bg-gray-800 rounded-lg shadow-lg flex flex-col gap-2"
        >
          {set.map((color, subIndex) => (
            <div
              key={subIndex}
              className="w-40 h-20 flex items-center justify-center rounded-md shadow-md text-white font-semibold"
              style={{ backgroundColor: color }}
            >
              {color}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Cores;
