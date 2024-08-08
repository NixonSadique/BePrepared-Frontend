import logo from "../../assets/logo.svg";
import { FormEvent, useState } from 'react';
import { Input } from "../../components/input";
import './styles.css';
import { api, postData } from "../../services/api";
import { useNavigate } from "react-router-dom";

interface LoginResponseProps{
  accessToken: string;
}

export function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    function handleSubmitLogin(e: FormEvent){
        e.preventDefault();
        postData<LoginResponseProps>('/auth/authenticate', {
            email,
            password
        })
        .then((response) => {
            //console.log(response);
            api.defaults.headers.Authorization = `Bearer ${response.accessToken}`;
            navigate('/dashboard');
        })
        .catch((error) => {
            alert('Falha na autenticacao');
        });
    }

    return(
    <main id ="login-page">
        <header>
            <img src={logo} alt="Logo Beprepared"/>
        </header>
        
            <form action="" onSubmit={handleSubmitLogin}>
                <Input name="Email" label="E-mail" type="email" onChange={(e) => setEmail(e.target.value)} />
                <Input name="password" label="Palavra-passe" type="password" onChange={(p) => setPassword(p.target.value)}/>

                <a href="/">Esqueci a palavra-passe</a>
                <button type="submit" >Entrar</button>
            </form>
        
    </main>
    )
}