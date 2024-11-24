import './Home.css'
import { Link } from 'react-router-dom';
import img from './imgHome.png'
function Home(){
    return(
    <>
    <div className="container_home">
        <h1 id="title_black">JOHNNY</h1>  
        <h1 id="title_yellow">BARBEARIA</h1>  
    </div>
    <div className="img">
        <img src={img} alt="" srcset="" />
    </div>
    <div className="btn_agendar">
        <Link to='/login'>
        <button>Agendar</button>
        </Link>
    </div>
    </>
    )
}
export default Home;