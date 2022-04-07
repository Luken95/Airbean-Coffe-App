import Header from "../components/Header"
import './LogIn.css';
import { useNavigate } from 'react-router-dom';

function Login (props){
const navigate = useNavigate();
const { setUsername } = props;

    function navigatetologgedin(){
        navigate('/loggedin')
    }

    function redirectMenu(){
        navigate('/nav');
        }
    
    function handleKeyUp(e){
        setUsername(e.target.value);
    }

    return(
        <div className="logInFormMain">
            <Header />
            <button className='menuButton' onClick={ redirectMenu }> </button>
            <section className="logInForm">
            <form className="login">
            <h1>Välkommen till AirBean-familjen!</h1>
            <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
            <label>Namn</label>
            <input type="text" className="userName" onKeyUp={ handleKeyUp }></input>
            <label>Lösenord</label>
            <input type="text" className="password"></input>
            <button type="button" className="logInButton" onClick={ navigatetologgedin }>Logga in</button>
            </form>
            </section>
        </div>

    )
}

export default Login