import React, { useState } from 'react'
import schoolmap from '../Container/Schoolmap.png'
import './User_page_SchoolMap.css'

const User_Page_SchoolMap = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPanel = () => {
    setIsOpen(true);
  };

  const closePanel = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div class="title">
        <h1>School Map</h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium ex aliquid ipsam fugiat ad error quos,
              omnis ab modi porro doloribus, consequatur sint? Quas,
              laudantium at. Harum earum recusandae reprehenderit.
          </p>
      </div>
      <div class='world-map'>
        <img src={schoolmap}/>
      </div>
      <div class="pin ptc">
        <span>PTC</span>
      </div>
      <div class="pin csdl-its">
        <span>CSDL / ITS</span>
      </div>
      <div class="pin fvr">
        <span>FVR</span>
      </div>
      <div class="pin op">
        <span>OP</span>
      </div>
      <div class="pin atrium">
        <span>ATRIUM</span>
      </div>
      <div class="pin cma">
        <span>CMA</span>
      </div>
      <div class="pin sp">
        <span>STUDENT PLAZE(SP)</span>
      </div>
      <div class="pin nh">
        <span>NH</span>
      </div>
      <div class="pin forest">
        <span>FOREST</span>
      </div>
      <div class="pin os">
        <span>OLD STAGE</span>
      </div>
      <div class="pin mba">
        <span>MBA</span>
      </div>
      <div class="pin riverside">
        <span>RIVERSIDE BUILDING</span>
      </div>
      <div class="pin gym">
        <span>GYM</span>
      </div>
      <div class="pin chs">
        <span>CHS</span>
      </div>
      <div class="pin basiced">
        <span>BASIC ED</span>
      </div>
      <div className="App">
      {/* Logo that triggers the side panel */}
      <div className="logo" onClick={openPanel}>
        <img src="logo.png" alt="Logo" />
      </div>

      {/* Side panel */}
      <div className={`side-panel ${isOpen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closePanel}>
          &times;
        </a>
        <h2>Side Panel Content</h2>
        <p>This is the content inside the side panel.</p>
      </div>
    </div>
    </div>
  )
}

export default User_Page_SchoolMap