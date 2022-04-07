import Header from "../components/Header"
import './Loggedin.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'

function Loggedin (props){
    const navigate = useNavigate();
    const { username } = props;

    const [ user, setUser ] = useState(''); 

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
        setUser(data);
        console.log(data)
    }

    useEffect(() =>{ getUsername() }, [])

    return(
        <section className="loggedin">
            <Header />
            <button className='menuButton' onClick={ redirectMenu }> </button>
            <section className="user">
            <h2>{user.length > 0 ? user[0].username : 'DITT NAMN'}</h2>
            </section>
        
            <br></br>
            <div className="orderhistorik">
            <h3> Orderhistorik</h3>
            <p>{user.length > 0 ? user[0].orderhistorik[0].orderNr : 'ORDERHISTORIK'} </p>

            </div>


        </section>

    )
}

export default Loggedin
