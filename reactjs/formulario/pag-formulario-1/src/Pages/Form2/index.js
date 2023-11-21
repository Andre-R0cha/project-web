import React, {useState} from 'react';
import { styles } from './style';
import UserService from '../../Services/login/UserService';
import { validarEmail, validarNome, validarSenha, validarTelefone, validarConfirmarSenha } from '../../Utils/valid/validadores';
import Input from '../../Components/Input';
import Botao from '../../Components/Botao';
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";











const userService = new UserService()


const Cadastro = () => {
  const [loading, setLoading] = useState()
  const [form, setForm] = useState([])
  const navigate = useNavigate()


  const Title = styled.h1`
  position: relative;
  align-items: flex-start;

  /* justify-content: flex-end; */
  padding-bottom: 20px;
  font-size:2.5em;
  `;
// const Input = styled.Input`
// width: 20px;
// `;



  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true)
      const { data } = await userService.cadastrar({
        nome: form.nome,
        telefone: form.telefone,
        email: form.email,
        password: form.password,
      })
      if (data) {
        const responseLogin = await userService.login({
          email: form.email,
          password: form.password
        })
        if (responseLogin === true) {
          alert('usuário Cadastrado com Sucesso')
          navigate('/home')
        }
    }
      setLoading(false)
    }
    catch (err) {
      alert('Algo deu errado com o Cadastro' + err)
    }
  }

  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const validadorInput = () => {
    return validarEmail(form.email) 
    && validarSenha(form.password)
    && validarTelefone(form.telefone)
    && validarConfirmarSenha(form.password, form.confirmarPassword)
    && validarNome(form.nome)
  }

  return (
    <div style={styles.container}>
   <form>
        <Title >Faça o seu Cadastro</Title>
        <Input
        style={styles.input}
          name='nome'
          placeholder='Digite o seu nome'
          onChange={handleChange}
          type='text'
        />
        <Input
   style={styles.input}
          name='telefone'
          placeholder='Digite o seu telefone'
          onChange={handleChange}
          type='number'
        />
        <Input
        style={styles.input}
        
          name='email'
          placeholder='Digite o seu e-mail'
          onChange={handleChange}
          type='email'
        />
        <Input
        style={styles.input}
          name='password'
          placeholder='Digite a sua senha'
          onChange={handleChange}
          type='password'
        />
        <Input
style={styles.input}
          name='confirmarPassword'
          placeholder='Confirme a sua senha'
          onChange={handleChange}
          type='password'
        />
        {/* <Botao
        style={styles.button}
          type='submit'
          text='Efetuar Cadastro!'
          onClick={handleSubmit}
          disabled={loading === true || !validadorInput()}
        /> */}
        {/* <SubContainerSign>
          <p>Já possui conta?</p>
          <NavLink to="*">Login</NavLink>
        </SubContainerSign> */}
               <button
          style={styles.button}
          type='submit'
          onClick={handleSubmit}
          disabled={loading === true || !validadorInput()}
        >
          Efetuar Cadastro!
        </button>
    </form>
    </div>
    
  )
}


export default Cadastro;
