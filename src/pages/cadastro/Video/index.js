import React, { Fragment } from "react";

import { Link } from "react-router-dom";
import Menu from "../../../components/Menu/index";
import Footer from "../../../components/Footer/index";
import PageDefault from "../../../components/PageDefault";

function CadastroVideo() {
  return (
    <>
      <PageDefault>
        <h1>Cadastro de Vídeo </h1>
        <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
      </PageDefault>
    </>
  );
}

export default CadastroVideo;
