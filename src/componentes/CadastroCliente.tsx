import React, {
    Component, useState,
    ChangeEvent, FormEvent, useEffect
} from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../App.module.css';
import axios from 'axios';

const CadastroCliente = () => {
    
    const [Id, setId] = useState<string>("");
    const [nome, setnome] = useState<string>("");
    const [email, setemail] = useState<string>("");
    const [celular, setcelular] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [DatadeNascimento, setDatadeNascimento] = useState<string>("");
    const [cidade, setcidade] = useState<string>("");
    const [estado, setestado] = useState<string>("");
    const [pais, setpais] = useState<string>("");
    const [rua, setrua] = useState<string>("");
    const [numero, setnumero] = useState<string>("");
    const [bairro, setbairro] = useState<string>("");
    const [cep, setcep] = useState<string>("");
    const [complemento, setcomplememnto] = useState<string>("");
    const [senha, setsenha] = useState<string>("");

    const cadastrarCliente = (e: FormEvent) => {
        e.preventDefault();

        const dados = {

         Id: Id,
         nome: nome, 
         celular: celular, 
         email: email,
         cpf: cpf,
         DatadeNascimento: DatadeNascimento,
         cidade: cidade,
         estado:  estado,
         pais: pais,
         rua: rua,
         numero: numero,
         bairro: bairro,
         cep: cep,
         complemento: complemento,
         senha: senha,
          }

        axios.post('http://10.137.9.131:8000/api/store',
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
            setnome(e.target.value);
        }
        if(e.target.name === "celular"){
            setcelular(e.target.value);
        }
        if(e.target.name === "email"){
            setemail(e.target.value);
        }
        if(e.target.name === "cpf"){
            setCpf(e.target.value);
        }
        if(e.target.name === "DatadeNascimento"){
            setDatadeNascimento(e.target.value);
        }
        if(e.target.name === "cidade"){
            setcidade(e.target.value);
        }
        if(e.target.name === "estado"){
            setestado(e.target.value);
        }
        if(e.target.name === "pais"){
            setpais(e.target.value);
        }
        if(e.target.name === "rua"){
            setrua(e.target.value);
        }
        if(e.target.name === "numero"){
            setnumero(e.target.value);
        }
        if(e.target.name === "bairro"){
            setbairro(e.target.value);
        }
        if(e.target.name === "cep"){
            setcep(e.target.value);
        }
        if(e.target.name === "complemento"){
            setcomplememnto(e.target.value);
        }
        if(e.target.name === "senha"){
            setsenha(e.target.value);
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
                            <form onSubmit={cadastrarCliente} className='row g-3'>
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
                                    <label htmlFor="celular" className='form-label'>Celular</label>  
                                    <input type="text"
                                    name='celular'
                                    className='form-control'
                                    required
                                    onChange={handleState}
                                     />                         
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="E-mail" className='form-label'>E-mail</label>  
                                    <input type="text"
                                    name='E-mail'
                                    className='form-control'
                                    required
                                    onChange={handleState}
                                     /> 
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="Cpf" className='form-label'>Cpf</label>  
                                    <input type="text"
                                    name='Cpf'
                                    className='form-control'
                                    required
                                    onChange={handleState}
                                     /> 
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="password" className='form-label'>Data de Nascimento</label>  
                                    <input type="text"
                                    name='Data de Nascimento'
                                    className='form-control'
                                    required
                                    onChange={handleState}
                                     /> 
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="cidade" className='form-label'>Cidade</label>  
                                    <input type="text"
                                    name='cidade'
                                    className='form-control'
                                    required
                                    onChange={handleState}
                                     /> 
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="Estado" className='form-label'>Estado</label>  
                                    <input type="text"
                                    name='estado'
                                    className='form-control'
                                    required
                                    onChange={handleState}
                                     /> 
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="pais" className='form-label'>País</label>  
                                    <input type="text"
                                    name='pais'
                                    className='form-control'
                                    required
                                    onChange={handleState}
                                     /> 
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="rua" className='form-label'>Rua</label>  
                                    <input type="text"
                                    name='rua'
                                    className='form-control'
                                    required
                                    onChange={handleState}
                                     /> 
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="numero" className='form-label'>Número</label>  
                                    <input type="text"
                                    name='numero'
                                    className='form-control'
                                    required
                                    onChange={handleState}
                                     /> 
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="bairro" className='form-label'>Bairro</label>  
                                    <input type="text"
                                    name='bairro'
                                    className='form-control'
                                    required
                                    onChange={handleState}
                                     /> 
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="cep" className='form-label'>Cep</label>  
                                    <input type="text"
                                    name='cep'
                                    className='form-control'
                                    required
                                    onChange={handleState}
                                     /> 
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="complemento" className='form-label'>Complemento</label>  
                                    <input type="text"
                                    name='complemento'
                                    className='form-control'
                                    required
                                    onChange={handleState}
                                     /> 
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="password" className='form-label'>Senha</label>  
                                    <input type="text"
                                    name='password'
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

export default CadastroCliente