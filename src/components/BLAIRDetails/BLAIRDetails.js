import React from 'react'
import { useParams } from 'react-router'
import data from '../../blair-data.js'
import './BLAIRDetails.css'
import BLAIRItemList from '../BLAIRItems/BLAIRItemList'



function BLAIRDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { primary, items } = data[id]

  return (
    <div>
      <div className="BLAIRDetails">
        <div className="BLAIRDetails-image">
          <img src={primary} alt='look'/>
         </div>
        <div className="BLAIRDetails-info">
          <h2>Shop this look</h2>
          <BLAIRItemList items={items}/>
        </div>
      </div>
</div>
  )
}

export default BLAIRDetails