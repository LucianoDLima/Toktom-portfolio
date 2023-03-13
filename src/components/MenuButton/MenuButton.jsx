import React, { useState } from 'react'

const MenuButton = ({ menuBtn, menuClass, enterPress }) => {

  return (
    <div className={`menu-btn ${menuClass}`} onClick={menuBtn} tabIndex='0' onKeyDown={enterPress}>
      <div className={`menu-btn__burguer`}></div>
    </div>
  )
}

export default MenuButton