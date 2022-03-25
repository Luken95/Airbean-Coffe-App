import{ Link } from 'react-router-dom' 
import './nav.css';

function Nav (){


return(
    
<section className='Navbar'>

<Link className='Links' to="/menu" style={{ textDecoration: 'none' }}> Meny </Link>
<br></br>
<br></br>
<Link className='Links' to="/about" style={{ textDecoration: 'none' }}> Vårt kaffe </Link>
<br></br>
<br></br>
<Link className='Links' to="/status" style={{ textDecoration: 'none' }}> Orderstatus </Link>

</section>
)
}

export default Nav


