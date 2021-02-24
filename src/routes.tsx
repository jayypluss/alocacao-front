import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing';
import ContainerForm from './pages/ContainerForm';
import ContainerList from './pages/ContainerList';
import GrupoCaixasForm from './pages/GrupoCaixasForm';
import GrupoCaixasList from './pages/GrupoCaixasList';


function Routes() {
    return (
        <BrowserRouter basename="/alocacao-front">
            <Route path="/" exact component={Landing} />
            <Route path="/container/criar" component={ContainerForm} />
            <Route path="/container/listar" component={ContainerList} />
            <Route path="/grupocaixas/criar" component={GrupoCaixasForm} />
            <Route path="/grupocaixas/listar/" component={GrupoCaixasList} />
        </BrowserRouter>
    )
}

export default Routes;