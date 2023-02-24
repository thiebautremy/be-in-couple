import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import "./page404.scss";

const Page404 = () => {
  const [redirect, setRedirect] = useState(false);

  return (
    <div className="page404">
      <section className="page404__section">
        <h1 className="page404__section__title">
          Vous ne vous seriez pas un peu perdu par hasard ???
        </h1>
        <h1 className="page404__section__title">
          Allez...je vous aide à retourner à la page d'accueil :
        </h1>
        <button
          type="button"
          className="page404__section__btn"
          onClick={() => setRedirect(true)}
        >
          Retour à l'accueil
        </button>
      </section>
      {redirect && <Redirect to="/" />}
    </div>
  );
};

export default Page404;
