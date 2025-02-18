import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const Produtos = () => {
  const { dados } = useContext(GlobalContext);
  console.log(dados);

  if (!dados) return <p>Carregando...</p>;
  return (
    <div>
      <h1>Produtos</h1>
      {dados.map((item, index) => (
        <li key={item.id}>{item.titulo}</li>
      ))}
    </div>
  );
};

export default Produtos;
