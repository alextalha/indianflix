import React, { Fragment } from "react";

import Menu from "../../../components/Menu/index";
import Footer from "../../../components/Footer/index";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function CadastroCategoria() {
  return (
    <Fragment>
      <PageDefault>
        <h1>Cadastro de Categoria </h1>
        <Link to="/">Ir pra Home</Link>
      </PageDefault>
    </Fragment>
  );
}

export default CadastroCategoria;
