import React, { Fragment } from "react";

import Menu from "../../../components/Menu/index";
import Footer from "../../../components/Footer/index";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function CadastroVideo() {
  return (
    <Fragment>
      <PageDefault>
        <h1>Cadastro de Vídeo </h1>
        <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
      </PageDefault>
    </Fragment>
  );
}

export default CadastroVideo;
