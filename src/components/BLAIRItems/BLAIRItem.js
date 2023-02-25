import React from 'react'
import './BLAIRItem.css'
import { Link } from 'react-router-dom'

function BLAIRItem(props) {
	
	return <div className="BLAIRItem">
	 <Link to={props.items.link}>
        <img 
            src={props.items.image} 
            width="100" 
            height="150" 
            alt="item" />
        </Link>
	</div>
}

export default BLAIRItem