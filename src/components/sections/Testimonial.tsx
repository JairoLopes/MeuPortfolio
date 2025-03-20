import React, { useState, useEffect, useRef } from "react";
import Slider, { Settings } from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slideUpFadeIn } from "../../animations";

// Extendendo a instância do Slider para acessar a propriedade interna $list
interface CustomSlider extends Slider {
  $list: HTMLElement[];
}

// Extendendo as configurações para manter os eventos de toque/click
interface CustomSettings extends Settings {
  onTouchStart?: (e: React.TouchEvent) => void;
  onClick?: (e: React.MouseEvent) => void;
}

const Testimonial = () => {
  // Dados dos depoimentos
  const depoimentos = [
    {
      dep: "Altamente profissional e cumpre o prazo, superou minhas expectativas",
      user: "Talles Furtado",
    },
    {
      dep: "Desde a faculdade que ele tinha desenvoltura pra código, e posso dizer que ele se aprimorou",
      user: "Emerson Rocha",
    },
    {
      dep: "Como colega de trabalho posso falar, Jairo tem uma mente extremamente criativa na hora de codificar",
      user: "Ana Beatriz",
    },
    {
      dep: "Contrataria novamente, prazo cumprido e trabalho de qualidade",
      user: "Vinicius Chagas",
    },
    {
      dep: "Atencioso e sempre perguntando a opnião do cliente, amei o resultado final",
      user: "Mariana Souza",
    },
    {
      dep: "Muito criativo, mentalidade de codificador",
      user: "Pedro Almeida",
    },
  ];

  return (
    <section
      id="depoimentos"
      className="min-h-fit flex flex-col items-center justify-start pt-[10%] pb-15 sm:pb-25 "
    >
      {/* Container dos depoimentos */}
      <div className="max-w-4xl mx-auto px-4 w-full">
        {/* Título */}
        <motion.h2
          initial={slideUpFadeIn.initial}
          whileInView={slideUpFadeIn.animate}
          transition={{ duration: 1.2 }}
          className="text-2xl sm:text-4xl font-bold mb-8 text-mainTheme text-center"
        >
          Depoimentos
        </motion.h2>

        <p className="text-center font-semibold sm:text-lg mb-6 sm:mb-14">
          Segue abaixo a opnião de alguns clientes e/ou colegas de trabalho.
        </p>

        {/* Uso do EncapsulatedSlider para renderizar os depoimentos */}
        <EncapsulatedSlider>
          {depoimentos.map((item, index) => (
            // Container individual de cada depoimento
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-4 text-sm sm:text-base min-h-[200px] p-6 bg-mainTheme/6 rounded-lg shadow-md transition-all duration-300"
            >
              {/* Parte superior do card(IMAGEM E DEPOIMENTO) */}
              <div className="flex flex-col items-center justify-center gap-4 px-3 py-3">
                <i className="bx bxs-user-circle text-4xl sm:text-6xl text-mainTheme/80"></i>
                <p className="text-center font-semibold text-myWhite leading-relaxed">
                  &ldquo;{item.dep}&rdquo;
                </p>
              </div>

              {/* Parte inferior do card(NOME USUARIO E LINK INSTAGRAM) */}
              <div className="flex flex-col items-center">
                <p className="sm:text-lg font-semibold text-secondaryTheme mt-6">
                  {item.user}
                </p>
              </div>
            </div>
          ))}
        </EncapsulatedSlider>
      </div>
    </section>
  );
};

const EncapsulatedSlider: React.FC<{ children: React.ReactNode }> = ({
  children,
  ...rest
}) => {
  const [autoplay, setAutoplay] = useState(true);
  const sliderRef = useRef<Slider>(null);

  // Função para pausar o autoplay em caso de interação
  const handleInteraction = () => {
    setAutoplay(false);
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  const settings: CustomSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    pauseOnFocus: true,
    swipeToSlide: true,
    touchMove: true,
    arrows: false,
    beforeChange: () => setAutoplay(true),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Adiciona listeners para pausar/reiniciar o autoplay ao passar o mouse
  useEffect(() => {
    const sliderInstance = sliderRef.current as CustomSlider | null;
    const handleMouseEnter = () => {
      setAutoplay(false);
      if (sliderInstance) {
        sliderInstance.slickPause();
      }
    };
    const handleMouseLeave = () => {
      if (sliderInstance) {
        sliderInstance.slickPlay();
      }
    };

    if (sliderInstance) {
      const slickList = sliderInstance.$list;
      if (slickList && slickList[0]) {
        slickList[0].addEventListener("mouseenter", handleMouseEnter);
        slickList[0].addEventListener("mouseleave", handleMouseLeave);
      }
    }
    return () => {
      if (sliderInstance) {
        const slickList = sliderInstance.$list;
        if (slickList && slickList[0]) {
          slickList[0].removeEventListener("mouseenter", handleMouseEnter);
          slickList[0].removeEventListener("mouseleave", handleMouseLeave);
        }
      }
    };
  }, []);

  return (
    <div onTouchStart={handleInteraction} onClick={handleInteraction} {...rest}>
      <Slider {...settings} ref={sliderRef}>
        {children}
      </Slider>
    </div>
  );
};

export default Testimonial;
