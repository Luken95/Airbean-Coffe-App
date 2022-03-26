import{ Link } from 'react-router-dom' 
import './nav.css';

function Nav (){


return(
    
<section className='Navbar'>
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


