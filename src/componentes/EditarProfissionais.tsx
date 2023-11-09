import axios from "axios";
import React, {Component, useState, ChangeEvent, FormEvent, useEffect} from "react";
import { useParams } from "react-router-dom";

import styles from "../App.module.css"
import Footer from "./Footer"
import Header from "./Header"


const EditarProfissionais = () => {

    const [Id, setId] = useState<string>("");
    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [celular, setCelular] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [DatadeNascimento, setDatadeNascimento] = useState<string>("");
    const [cidade, setCidade] = useState<string>("");
    const [estado, setEstado] = useState<string>("");
    const [pais, setPais] = useState<string>("");
    const [rua, setRua] = useState<string>("");
    const [numero, setNumero] = useState<string>("");
    const [bairro, setBairro] = useState<string>("");
    const [cep, setCep] = useState<string>("");
    const [complemento, setComplememnto] = useState<string>("");
    const [salario, setSalario] = useState<string>("");
    const parametro = useParams();


    const atualizarProffisionais = (e: FormEvent) => {
    e.preventDefault();

    const dados ={
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
        salario: salario
        
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
                const response = await axios.get("http://10.137.9.134:8000/api/find/"+parametro.id);
                setId(response.data.data.id);
                setNome(response.data.data.nome);
                setCelular(response.data.data.celular);
                setEmail(response.data.data.email);
                setCpf(response.data.data.cpf);
                setDatadeNascimento(response.data.data.datadenascimneto);
                setCidade(response.data.data.cidade);
                setEstado(response.data.data.estado);
                setPais(response.data.data.pais);
                setRua(response.data.data.rua);
                setNumero(response.data.data.numero);
                setBairro(response.data.data.bairro);
                setCep(response.data.data.id);
                setComplememnto(response.data.data.complemento);
                setSalario(response.data.data.salario);
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
                            <h5 className='card-title'>Cadastrar Cliente</h5>
                            <form onSubmit={atualizarProffisionais} className='row g-3'>
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
                                    <label htmlFor="password" className='form-label'>Salario</label>  
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

export default EditarProfissionais;