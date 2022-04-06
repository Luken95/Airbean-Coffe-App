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
            <p>här kommer du se din order historik</p>

        </section>

    )
}

export default Loggedin
