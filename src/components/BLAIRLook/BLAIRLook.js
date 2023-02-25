// import logo from './logo.svg'
import { Link } from 'react-router-dom'
import './BLAIRLook.css'

function BLAIRLook(props) {
    const { primary, id } = props
    return (
    <div className="BLAIRLook">
        <Link to={`/details/${id}`}>
        <img 
            src={primary} 
            width="300" 
            height="450" 
            alt="Hello" />
        </Link>
    </div>
    )
}

export default BLAIRLook