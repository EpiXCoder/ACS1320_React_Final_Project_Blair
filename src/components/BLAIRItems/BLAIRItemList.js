import React from 'react'
import BLAIRItem from './BLAIRItem'
import './BLAIRItemList.css'

function BLAIRItemList(props) {
	const shopItem = props.items.map((item) => {
    return <BLAIRItem key={item.key} items={item} />
  })
	return <div className="BLAIRItemList">{shopItem}</div>
}

export default BLAIRItemList