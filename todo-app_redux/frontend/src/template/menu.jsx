import "modules/jquery/dist/jquery.min.js";
import "modules/bootstrap/dist/js/bootstrap.min.js";

import React from 'react';

export default props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
        <a className="navbar-brand" href="#"><i className="fa fa-calendar-check-o" /> TodoApp</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <a className="nav-item nav-link" href="#/todos">Tarefas</a>
        <a className="nav-item nav-link" href="#/about">Sobre</a>
        </div>
    </div>
    </nav>
)