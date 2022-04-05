import Header from "../components/Header"
import './LogIn.css';
import { useNavigate } from 'react-router-dom';

function Login (){
const navigate = useNavigate();

    function navigatetologgedin(){
        navigate('/loggedin')
    }

    function redirectMenu(){
        navigate('/nav');
        }

    return(
        <section >
            <Header />
            <button className='menuButton' onClick={ redirectMenu }> </button>
            <form className="login">
            <h1>Välkommen till AirBean-familjen!</h1>
            <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
            <label>Namn</label>
            <input type="text" className="userName"></input>
            <label>Lösenord</label>
            <input type="text" className="password"></input>
            <button type="button" className="logInButton" onClick={ navigatetologgedin }>Logga in</button>
            </form>
        </section>

    )
}

export default Login