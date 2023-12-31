import React, {
    Component, useState,
    ChangeEvent, FormEvent, useEffect
} from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../App.module.css';
import axios from 'axios';

const CadastroProfissionais = () => {
    
    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [celular, setCelular] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [datadenascimento, setDatadeNascimento] = useState<string>("");
    const [cidade, setCidade] = useState<string>("");
    const [estado, setEstado] = useState<string>("");
    const [pais, setPais] = useState<string>("");
    const [rua, setRua] = useState<string>("");
    const [numero, setNumero] = useState<string>("");
    const [bairro, setBairro] = useState<string>("");
    const [cep, setCep] = useState<string>("");
    const [complemento, setComplememnto] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [salario, setSalario] = useState<string>("");

    const cadastrarProfissionais = (e: FormEvent) => {
        e.preventDefault();

        const dados = {

         
         nome: nome, 
         celular: celular, 
         email: email,
         cpf: cpf,
         DatadeNascimento: datadenascimento,
         cidade: cidade,
         estado:  estado,
         pais: pais,
         rua: rua,
         numero: numero,
         bairro: bairro,
         cep: cep,
         complemento: complemento,
         senha: senha,
         salario: salario
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
        if(e.target.name === "nome"){
            setNome(e.target.value);
        }
        if(e.target.name === "celular"){
            setCelular(e.target.value);
        }
        if(e.target.name === "email"){
            setEmail(e.target.value);
        }
        if(e.target.name === "cpf"){
            setCpf(e.target.value);
        }
        if(e.target.name === "DatadeNascimento"){
            setDatadeNascimento(e.target.value);
        }
        if(e.target.name === "cidade"){
            setCidade(e.target.value);
        }
        if(e.target.name === "estado"){
            setEstado(e.target.value);
        }
        if(e.target.name === "pais"){
            setPais(e.target.value);
        }
        if(e.target.name === "rua"){
            setRua(e.target.value);
        }
        if(e.target.name === "numero"){
            setNumero(e.target.value);
        }
        if(e.target.name === "bairro"){
            setBairro(e.target.value);
        }
        if(e.target.name === "cep"){
            setCep(e.target.value);
        }
        if(e.target.name === "complemento"){
            setComplememnto(e.target.value);
        }
        if(e.target.name === "senha"){
            setSenha(e.target.value);
        }
        if(e.target.name === "salario"){
            setSalario(e.target.value);
        }
        
    }

    return (
        <div>
           <Header/>
            <main className={styles.main}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Cadastrar Profissionais</h5>
                            <form onSubmit={cadastrarProfissionais} className='row g-3'>
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
                                <div className='col-6'>
                                    <label htmlFor="salario" className='form-label'>Salário</label>  
                                    <input type="text"
                                    name='salario'
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

export default CadastroProfissionais