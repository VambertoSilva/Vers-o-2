import React, { useEffect, useState } from "react";
import "./AnimatedItem.css";
import Eu from "./Imagens/Eu.png";

function AnimatedItem() {
  const [isVisible, setIsVisible] = useState(false);

  // Função para verificar se o meio do elemento está visível na tela
  function isElementInViewport(elem) {
    var bounding = elem.getBoundingClientRect();
    var elementTop = bounding.top;
    var elementBottom = bounding.bottom;
    var windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    return elementTop < windowHeight / 2 && elementBottom > windowHeight / 2;
  }

  // Função para animar o elemento quando estiver no centro da tela
  function animateOnScroll() {
    const element = document.getElementById("animated-item");
    if (element && isElementInViewport(element)) {
      setIsVisible(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", animateOnScroll);
    return () => {
      window.removeEventListener("scroll", animateOnScroll);
    };
  }, []);

  return (
    <div
      id="animated-item"
      className={`animated-item ${isVisible ? "animate" : ""}`}
    >
      <img src={Eu} className="Eu" />
      <div className="MinhaDescricao">
        <p className="QuemEVambertoSilva">Quem é Vamberto Silva?</p>
        <p className="MinhaDescricaoEmTexto">
          {/* Sou desenvolvedor front-end, e UI designer, completamente apaixonado
          por tecnologia. Comecei a minha caminhada no começo de 2022, quando
          tinha 17 anos, desde então estou a cada dia melhorando a qualidade do
          meu trabalho. */}
          Sou um designer UI/UX e desenvolvedor front-end com habilidades
          sólidas em HTML, CSS e React. Foco na criação de interfaces web
          responsivas e otimizadas para diversos dispositivos, utilizando
          ferramentas como Figma e Adobe XD. Busco o equilíbrio entre
          usabilidade, acessibilidade e estética em meus projetos, seguindo as
          melhores práticas de codificação. Minha paixão é encantar os usuários
          com um design funcional e atraente, garantindo experiências incríveis
          em aplicações seguras, escaláveis e eficientes.
        </p>
        <img src={Eu} className="EuMobile" />

        {/* <button className="BtnConhecerMais">CONHECER MAIS</button> */}
      </div>
    </div>
  );
}

export default AnimatedItem;
