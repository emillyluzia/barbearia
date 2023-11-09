import axios from "axios";
import React, {Component, useState, ChangeEvent, FormEvent, useEffect} from "react";
import { useParams } from "react-router-dom";

import styles from "../App.module.css"
import Footer from "./Footer"
import Header from "./Header"


const EditarServiços = () => {

    const [Id, setId] = useState<string>("");
    const [nome, setNome] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [duracao, setDuracao] = useState<string>("");
    const [preco, setPreco] = useState<string>("");


    const atualizarServicos = (e: FormEvent) => {
    e.preventDefault();

    const dados ={
        Id: Id,
        nome: nome, 
        descricao: descricao, 
        duracao: duracao,
        preco: preco
        
        
    }

    axios.put("http://10.137.9.134:8000/api/update",
    dados,
    {
        headers: {
             "Accept": "application/json",
             "Content-Type": "application/json"
        }
    }).then(function(response){
         window.location.href = "/listagem"
    }).catch(function(error){
         console.log('Ocorreu um erro ao atualizar')
    });

    }

    useEffect(() => {
        async function fetchData () {
            try{
                const response = await axios.get("http://10.137.9.134:8000/api/find/");
                setId(response.data.data.id);
                setNome(response.data.data.nome);
                setDescricao(response.data.data.celular);
                setDuracao(response.data.data.email);
                setPreco(response.data.data.cpf);
            } catch(error){
                console.log("erro ao buscar dados api")
            }
        }
        fetchData();
    }, []);

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "Id"){
            setId(e.target.value);
        }
        if(e.target.name === "nome"){
            setNome(e.target.value);
        }
        if(e.target.name === "DESCRICAO"){
            setDescricao(e.target.value);
        }
        if(e.target.name === "email"){
            setDuracao(e.target.value);
        }
        if(e.target.name === "Preco"){
            setPreco(e.target.value);
        }
    }
    return (
        <div>
            <Header/>
            <main className={styles.main}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Cadastrar Cliente</h5>
                            <form onSubmit={atualizarServicos} className='row g-3'>
                            <div className='col-6'>
                                    <label htmlFor="Nome" className='form-label'>Nome</label>  
                                    <input type="text"
                                    name='Nome'
                                    className='form-control'
                                    required
                                    onChange={handleState}
                                     />   
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="descricao" className='form-label'>Descrição</label>  
                                    <input type="text"
                                    name='descricao'
                                    className='form-control'
                                    required
                                    onChange={handleState}
                                     />                         
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="duracao" className='form-label'>Duração</label>  
                                    <input type="text"
                                    name='duracao'
                                    className='form-control'
                                    required
                                    onChange={handleState}
                                     /> 
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="preco" className='form-label'>Preço</label>  
                                    <input type="text"
                                    name='preco'
                                    className='form-control'
                                    required
                                    onChange={handleState}
                                     /> 
                                </div>
                                <div className='col-12'>
                                    <button
                                    type='submit'
                                    className='btn btn-success btn-sm'>Atualizar</button>
                                </div>                       
                               
                            </form>
                        </div>
                    </div>
                </div>
            </main>
           <Footer/>
        </div>
    );
}

export default EditarServiços;