import React, {
    Component, useState,
    ChangeEvent, FormEvent, useEffect
} from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../App.module.css';
import axios from 'axios';

const CadastroServico = () => {
    
    const [Id, setId] = useState<string>("");
    const [nome, setNome] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [duracao, setDuracao] = useState<string>("");
    const [preco, setPreco] = useState<string>("");

    const cadastrarServico = (e: FormEvent) => {
        e.preventDefault();

        const dados = {

         Id: Id,
         nome: nome, 
         descricao: descricao, 
         duracao: duracao,
         preco: preco,
          }

        axios.post('http://127.0.0.1:8000/api/store',
        dados,
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(function(response){  
            window.location.href = "/listagem"
        }).catch(function (error){
            console.log(error);
        });
       

    }

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "Id"){
            setId(e.target.value);
        }
        if(e.target.name === "nome"){
            setNome(e.target.value);
        }
        if(e.target.name === "descricao"){
            setDescricao(e.target.value);
        }
        if(e.target.name === "duracao"){
            setDuracao(e.target.value);
        }
        if(e.target.name === "preco"){
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
                            <form onSubmit={cadastrarServico} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor="Id" className='form-label'>Id</label>   
                                    <input type="text"
                                    name='Id'
                                    className='form-control'
                                    required
                                    onChange={handleState}
                                    />              
                                </div>
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
                                    <label htmlFor="descriçao" className='form-label'>Descrição</label>  
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
                                    className='btn btn-success btn-sm'>Cadastrar</button>
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

export default CadastroServico