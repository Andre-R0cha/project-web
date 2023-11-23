import styled from "styled-components";
import React, { useState, useEffect } from "react";

const colors = {
  primary: "#3498db",
  secundary: "#3366FF",
  background: " rgb(0, 179, 182)",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  // cor-primaria: '#3498db', /* Azul */
  // cor-secundaria: '#e74c3c', /* Vermelho */
  // cor-terciaria: '#2ecc71', /* Verde */
  // cor-quaternaria: '#f39c12', /* Laranja */
  // cor-quintenaria: '#9b59b6', /* Roxo */
  // cor-sextenaria: '#34495e', /* Cinza Azulado */
  // cor-base: '#ecf0f1', /* Cinza Claro */

  // cor1: '#ff3b30', /* Vermelho */
  // cor2: '#ff9500', /* Laranja */
  // cor3: '#ffcc00', /* Amarelo */
  // cor4: '#4cd964', /* Verde */
  // cor5: '#5ac8fa', /* Azul */
  // cor6: '#007aff', /* Azul Claro */
  // cor7: '#5856d6', /* Roxo */
  // cor8: '#ff2d55', /* Rosa */
};

export const Title = styled.h1`
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  text-align: justify;
  padding-bottom: 10px;
  font-size: 32px;
`;

export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "2% 35%",
    padding: "100px",
    backgroundColor: colors.background,
    borderRadius: "30px",
    boxShadow: colors.boxShadow,
    width: "300px",
    zIndex: "-1",
  },

};

export const Form = styled.form`
  /* h1 {
    position: relative;
    width: 100%;   
    padding: 2px;
    color: white;
    text-align: flex-end;
    font-size: 32px;
    font-weight: light;
  } */
  input {
    display: block;
    margin: 0 auto;
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 1px;
  }

  button {
    display: block;
    width: 200px;
    padding: 5px;
    margin-left: 40px;
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;
    background-color: #34495e;
    &:hover,
    a:hover {
      background-color: blue;
      color: green;
      text-transform: capitalize;
      border-radius: 10px;
      border: none;
    }
  }
  /* button:hover{
    background-color: blue;
    text-color:green;

  } */

  p {
    margin: 20px 40px 0 50px;
    color: white;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }

  a {
    color: white;
    font-size: 14px;
  }
`;

export const AnimatedGradient = () => {
  const [background, setBackground] = useState(getRandomGradient);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackground(getRandomGradient());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  function getRandomGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    return `linear-gradient(to right, ${color1}, ${color2})`;
    //  `linear-gradient(to botton, ${color1}, ${color2})`
    //   `linear-gradient(to botton right, ${color1}, ${color2})`
    //   `linear-gradient(circle, ${color1}, ${color2})`;
  }

  function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16); // efeito de mudar o gradiente
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: background,
        transition: "background 1s ease-in-out",
      }}
    />
  );
};
