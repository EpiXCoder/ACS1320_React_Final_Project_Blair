import React from 'react';
import BLAIRLook from '../BLAIRLook/BLAIRLook';
import './BLAIRList.css';
import data from '../../blair-data'
// import { useState } from 'react'
// import RandomSpace from '../RandomLook/RandomLook'


function BLAIRList() {
  const looks = data.map((obj) => {
    const { id, primary} = obj
  // const spaces = data.map(({ title, address, images, hours }, i) => {
    return (
      <BLAIRLook
        id={id}
        key={id}
        primary={primary}
      />
    )
  })
  return (
    <div>
      <div className="BLAIRList">
			  {looks}
      </div>
      <div className="Footer">
          <hr className="Line"/>
        <small>Laura Blair copyright 2023</small>
        <p></p>
      </div>
    </div>
  )
}
  
  export default BLAIRList