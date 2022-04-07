import Header from "../components/Header"
import './Loggedin.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'

function Loggedin (props){
    const navigate = useNavigate();
    const { username } = props;

    function redirectMenu(){
        navigate('/nav');
        }

    async function getUsername() {
        const res = await fetch('http://localhost:5000/api/beans/userData', {
            method: 'GET',
            headers: { 
                'Authorization': 'Bearer ' + username
            }
        })
        const data = await res.json();
        console.log(data)
    }

    useEffect(() =>{ getUsername() }, [])

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
