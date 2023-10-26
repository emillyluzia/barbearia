import React from "react";

import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";



import CadastroCliente from "../componentes/CadastroCliente";
import ListagemCliente from "../componentes/listagemcliente";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                
                <Route path="cadastro"
                    element={<CadastroCliente />} />
                <Route path="listagem"
                    element={<ListagemCliente />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter; 