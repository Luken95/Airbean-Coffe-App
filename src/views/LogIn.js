import Header from "../components/Header"
import './LogIn.css';

function Login (){

    return(
        <section >
            <Header />
            <form className="login">
            <h1>Välkommen till AirBean-familjen!</h1>
            <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
            <label>Namn</label>
            <input type="text" className="userName"></input>
            <label>Lösenord</label>
            <input type="text" className="password"></input>
            <button type="button" className="logInButton">Logga in</button>
            </form>
        </section>

    )
}

export default Login