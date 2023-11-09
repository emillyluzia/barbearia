import React from "react";

import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";



import CadastroCliente from "../componentes/CadastroCliente";
import CadastroProfissionais from "../componentes/CadastroProfissionais";
import CadastroServico from "../componentes/CadastroServiço";
import EditarCliente from "../componentes/EditarCliente";
import EditarProfissionais from "../componentes/EditarProfissionais";
import EditarServiços from "../componentes/EditarServicos";
import ListagemCliente from "../componentes/listagemcliente";
import ListagemProfissionais from "../componentes/listagemProfissionais";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                
                <Route path="cadastroCliente"
                    element={<CadastroCliente />} />
                <Route path="cadastroServico"
                    element={<CadastroServico />} />
                <Route path="cadastroProfissionais"
                    element={<CadastroProfissionais />} />
                <Route path="listagemCliente"
                    element={<ListagemCliente />} />
                <Route path="listagemProfissionais"
                    element={<ListagemProfissionais />} />
                <Route path="EditarCliente"
                    element={<EditarCliente />} />
                <Route path="EditarProfissionais"
                    element={<EditarProfissionais />} />
                <Route path="EditarServico"
                    element={<EditarServiços />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter; 