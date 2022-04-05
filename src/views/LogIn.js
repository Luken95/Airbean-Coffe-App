import Header from "../components/Header"
import './LogIn.css';

function Login (){

    return(
        <section className="login">
            <Header />
            <h1>Logga in</h1>
            <input type="text" className="userName"></input>
            <input type="text" className="password"></input>
            <button type="button" className="logInButton">Logga in</button>
        </section>

    )
}

export default Login