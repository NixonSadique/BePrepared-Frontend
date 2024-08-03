import logo from "../../assets/logo.svg"
import { Input } from "../../components/input"
import './styles.css'
export function Login(){
    return(
    <main id ="login-page">
        <header>
            <img src={logo} alt="Logo Beprepared"/>
        </header>
        
            <form action="">
                <Input name="Email" label="E-mail" type="email" />
                <Input name="password" label="Palavra-passe" type="password"/>

                <a href="/">Esqueci a palavra-passe</a>
                <button type="submit">Entrar</button>
            </form>
        
    </main>
    )
}