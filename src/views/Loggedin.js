import Header from "../components/Header"
import './Loggedin.css';
import { useNavigate } from 'react-router-dom';

function Loggedin (){
    const navigate = useNavigate();

    function redirectMenu(){
        navigate('/nav');
        }

    return(
        <section className="loggedin">
            <Header />
            <button className='menuButton' onClick={ redirectMenu }> </button>
            <section className="user">
            <h1>bild</h1>
            <h2>sixten kafflöver</h2>
            <p>här visas  din email</p>
            </section>
        
            <br></br>
            <div className="orderhistorik">
            <h3> Orderhistorik</h3>
            <p>här visas din orderhistorik</p>
            <p>här visas din orderhistorik</p>
            <p>här visas din orderhistorik</p>
            <p>här visas din orderhistorik</p>
            </div>


        </section>

    )
}

export default Loggedin
