import{ Link } from 'react-router-dom' 
import './nav.css';

function Nav (){


return(
    
<section className='Navbar'>

<Link to="/menu"> Meny </Link>
<br></br>
<br></br>
<Link to="/about"> Vårt kaffe </Link>
<br></br>
<br></br>
<Link to="/status"> Orderstatus </Link>

</section>
)
}

export default Nav


