import React, { useState } from "react";
import { Link } from "react-router-dom";

import FormField from "../../../components/FormField";
import PageDefault from "../../../components/PageDefault";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "",
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: nome,descricao,bla, bla
    setValues({ ...values, [chave]: valor }); // nome : 'valor'
  }

  function handleChange(infosDoEvento) {
    //console.log(infosDoEvento.target.getAttribute("name"));

    setValue(
      infosDoEvento.target.getAttribute("name"),
      infosDoEvento.target.value
    );
  }

  return (
    <>
      <PageDefault>
        <h1>Cadastro de Categoria : {values.nome} </h1>
        <form
          style={{ background: values.cor }}
          onSubmit={function handleSubmit(infosDoEvento) {
            infosDoEvento.preventDefault();
            //console.log("xxxx", categorias);
            setCategorias([...categorias, values]);
            // values;

            setValues({});
          }}
        >
          <div>
            <FormField
              value={values.nome}
              name="nome"
              onChange={handleChange}
            />
          </div>

          <div>
            <label>
              Descrição
              <textarea
                onChange={handleChange}
                name="descricao"
                value={values.descricao}
              />
            </label>
          </div>

          <div>
            <label>
              Cor
              <input
                onChange={handleChange}
                name="cor"
                type="color"
                value={values.cor}
              />
            </label>
          </div>

          <button>Cadastrar </button>
        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return <li key={`${categoria}${indice}`}>{categoria.nome}</li>;
          })}
        </ul>
        <Link to="/">Ir pra Home</Link>
      </PageDefault>
    </>
  );
}

export default CadastroCategoria;
