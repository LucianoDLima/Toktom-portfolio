import React, { useState } from 'react'

const MenuButton = ({ menuBtn, menuClass }) => {


  return (
    <div className={`menu-btn ${menuClass}`} onClick={menuBtn} tabIndex='0'>
      <div className={`menu-btn__burguer`}></div>
    </div>
  )
}

export default MenuButton