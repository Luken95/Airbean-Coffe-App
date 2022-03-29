import{ Link, useNavigate } from 'react-router-dom'
import './Nav.css';

function Nav (){
let navigate = useNavigate();

    function redirectToPrevious(){
        navigate(-1)
        }

return(

<section className='Navbar'>
<button className='crossButton' onClick={ redirectToPrevious }> </button>
<Link className='Links' to="/menu" style={{ textDecoration: 'none' }}> Meny </Link>
<br></br>
<div className="dash"></div>
<br></br>
<Link className='Links' to="/about" style={{ textDecoration: 'none' }}> Vårt kaffe </Link>
<br></br>
<div className="dash"></div>
<br></br>
<Link className='Links' to="/status" style={{ textDecoration: 'none' }}> Orderstatus </Link>
<br></br>
<div className="dash"></div>

</section>
)
}

export default Nav
