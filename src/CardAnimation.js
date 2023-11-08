import React, { useEffect } from "react";
import Card from "./Card";
import "./CardAnimation.css";

const projects = [
  {
    number: 1,
    title: "Finanças",
    subtitle: "Aplicação para organização financeira",
    key: 1,
  },
  {
    number: 2,
    title: "Spider-man",
    subtitle: "Spider-man website for PS4 UI Concept",
    key: 2,
  },
  {
    number: 3,
    title: "Spider-man",
    subtitle: "Spider-man website for PS4 UI Concept",
    key: 3,
  },
  {
    number: 4,
    title: "Spider-man",
    subtitle: "Spider-man website for PS4 UI Concept",
    key: 4,
  },
];

const CardAnimation = () => {
  useEffect(() => {
    // Função de callback para a Intersection Observer API
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Quando o elemento estiver visível na tela, aplicar a animação
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    };

    // Opções para a Intersection Observer API
    const options = {
      root: null, // Observar a viewport do navegador
      rootMargin: "0px",
      threshold: 1, // Configurar o limiar de visibilidade (quando 50% do elemento estiver visível)
    };

    // Criar uma nova instância do Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, options);

    // Obter todos os elementos com a classe ".row"
    const cards = document.querySelectorAll(".row");

    // Observar cada elemento ".row"
    cards.forEach((card) => {
      observer.observe(card);
    });

    // Cancelar a observação quando o componente for desmontado
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      {projects.map((obj) => {
        return (
          <a href="/financas" className=".links">
            <Card
              number={obj.number}
              title={obj.title}
              subtitle={obj.subtitle}
              key={obj.key}
            />
          </a>
        );
      })}
    </div>
  );
};

export default CardAnimation;
