import React from "react";
//import {Navbar,Container,Nav} from "react-bootstrap";
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          BARRA DE HERRAMIENTAS
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-link active" aria-current="page" href="#">
              Home
            </Link>
            <Link class="nav-link" to="/">
              Features
            </Link>
            <Link class="nav-link" to="/producto">
              Productos
            </Link>
            <Link class="nav-link disabled" aria-disabled="true">
              Disabled
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
