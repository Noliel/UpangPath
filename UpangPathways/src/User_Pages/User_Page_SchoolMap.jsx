import React, { useState } from 'react'
import schoolmap from '../Container/Schoolmap.png'
import './User_page_SchoolMap.css'
import ptc from '../container/ptc/ptc3.png'
import GSD from '../Container/GSD.png'
import univforest from '../container/univforest.png'
import Forest from '../container/Forest.png'
import Atrium from '../container/Atrium.png'
import PedroHub from '../container/PedroHub.png'
import UnivResearch from '../container/UnivResearch.png'
import TES from '../container/TES.png'
import SP from '../container/SP.png'
import nstp from '../container/nstp.png'
import nrotc from '../container/nrotc.png'
import COO from '../container/COO.png'
import Marketing from '../container/Marketing.png'
import BASICED from '../container/BASICED.jpeg'
import cfaculty from '../container/cfaculty.png'
import gym from '../container/gym.png'
import opnefield from '../container/opnefield.png'
import User_Navbar from '../Components/User_Navbar'





const User_Page_SchoolMap = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCSDLopen, setIsCSDLOpen] = useState(false)
  const [isfvrOpen, setIsfvrOpen] = useState(false)
  const [isopopen, setIsopOpen] = useState(false)
  const [isATRIUMopen, setIsATRIUMOpen] = useState(false)
  const [isCMAopen, setIsCMAOpen] = useState(false)
  const [isSPopen, setIsSPOpen] = useState(false)
  const [isNHopen, setIsNHOpen] = useState(false)
  const [isFORESTopen, setIsFORESTOpen] = useState(false)
  const [isOSopen, setIsOSOpen] = useState(false)
  const [isMBAopen, setIsMBAOpen] = useState(false)
  const [isMBAHopen, setIsMBAHOpen] = useState(false)
  const [isRIVERSIDEopen, setIsRIVERSIDEOpen] = useState(false)
  const [isGYMopen, setIsGYMOpen] = useState(false)
  const [isDOopen, setIsDOOpen] = useState(false)
  const [isGSDopen, setIsGSDOpen] = useState(false)
  const [isCCJEopen, setIsCCJEOpen] = useState(false)
  const [isBASICEDopen, setIsBASICEDOpen] = useState(false)
  

  const openPanel = () => {
    setIsOpen(true);
  };

  const closePanel = () => {
    setIsOpen(false);
  };

  const openCSDL = () => {
    setIsCSDLOpen(true);
  };

  const closeCSDL = () => {
    setIsCSDLOpen(false);
  };

  const openfvr = () => {
    setIsfvrOpen(true);
  };

  const closefvr = () => {
    setIsfvrOpen(false);
  };

  const openop = () => {
    setIsopOpen(true);
  };

  const closeop = () => {
    setIsopOpen(false);
  };

  const openATRIUM = () => {
    setIsATRIUMOpen(true);
  };

  const closeATRIUM = () => {
    setIsATRIUMOpen(false);
  };

  const openCMA = () => {
    setIsCMAOpen(true);
  };

  const closeCMA = () => {
    setIsCMAOpen(false);
  };

  const openSP = () => {
    setIsSPOpen(true);
  };

  const closeSP = () => {
    setIsSPOpen(false);
  };
  
  const openNH = () => {
    setIsNHOpen(true);
  };

  const closeNH = () => {
    setIsNHOpen(false);
  };

  const openFOREST = () => {
    setIsFORESTOpen(true);
  };

  const closeFOREST = () => {
    setIsFORESTOpen(false);
  };

  const openOS = () => {
    setIsOSOpen(true);
  };

  const closeOS = () => {
    setIsOSOpen(false);
  };

  const openMBA = () => {
    setIsMBAOpen(true);
  };

  const closeMBA = () => {
    setIsMBAOpen(false);
  };

  const openMBAH = () => {
    setIsMBAHOpen(true);
  };

  const closeMBAH = () => {
    setIsMBAHOpen(false);
  };

  const openRIVERSIDE = () => {
    setIsRIVERSIDEOpen(true);
  };

  const closeRIVERSIDE = () => {
    setIsRIVERSIDEOpen(false);
  };

  const openGYM = () => {
    setIsGYMOpen(true);
  };

  const closeGYM = () => {
    setIsGYMOpen(false);
  };

  const openDO = () => {
    setIsDOOpen(true);
  };

  const closeDO = () => {
    setIsDOOpen(false);
  };

  const openGSD = () => {
    setIsGSDOpen(true);
  };

  const closeGSD = () => {
    setIsGSDOpen(false);
  };

  const openCCJE= () => {
    setIsCCJEOpen(true);
  };

  const closeCCJE= () => {
    setIsCCJEOpen(false);
  };

  const openBASICED= () => {
    setIsBASICEDOpen(true);
  };

  const closeBASICED= () => {
    setIsBASICEDOpen(false);
  };

  

  return (
    <div>
      <User_Navbar />
      <div class="title">
      <p class="font-mono ...">School Map</p>
        <p class="text-emerald-900">#KasamaMoAngPhinmaed #MakingLivesofOthersBetter #MakingLiveBetterThroughEducstion</p>
      </div>
      <div class='world-map'>
        <img src={schoolmap}/>
      </div>
      <div class="pin ptc cursor-pointer" onClick={openPanel}>
        <span>PTC</span>
      </div>
      <div class="pin csdl-its cursor-pointer" onClick={openCSDL}>
        <span>CSDL / ITS</span>
      </div>
      <div class="pin fvr cursor-pointer" onClick={openfvr}>
        <span>FVR</span>
      </div>
      <div class="pin op cursor-pointer" onClick={openop}>
        <span>OP</span>
      </div>
      <div class="pin atrium cursor-pointer" onClick={openATRIUM}>
        <span>ATRIUM</span>
      </div>
      <div class="pin cma cursor-pointer" onClick={openCMA}>
        <span>CMA</span>
      </div>
      <div class="pin sp cursor-pointer" onClick={openSP}>
        <span>STUDENT PLAZE(SP)</span>
      </div>
      <div class="pin nh cursor-pointer" onClick={openNH}>
        <span>NH</span>
      </div>
      <div class="pin forest cursor-pointer" onClick={openFOREST}>
        <span>FOREST</span>
      </div>
      <div class="pin os cursor-pointer" onClick={openOS}>
        <span>OLD STAGE</span>
      </div>
      <div class="pin mba cursor-pointer" onClick={openMBA}>
        <span>MBA</span>
      </div>
      <div class="pin mbah cursor-pointer" onClick={openMBAH}>
        <span>MBA - HALL</span>
      </div>
      <div class="pin riverside cursor-pointer" onClick={openRIVERSIDE}>
        <span>RIVERSIDE BUILDING</span>
      </div>
      <div class="pin gym cursor-pointer" onClick={openGYM}>
        <span>GYM</span>
      </div>
      <div class="pin do cursor-pointer" onClick={openDO}>
        <span>Dug-Out</span>
      </div>
      <div class="pin gsd cursor-pointer" onClick={openGSD}>
        <span>GSD</span>
      </div>
      <div class="pin ccje cursor-pointer" onClick={openCCJE}>
        <span>CCJE</span>
      </div>
      <div class="pin basiced cursor-pointer" onClick={openBASICED}>
        <span>BASIC ED</span>
      </div>
      <div className="App">
      {/* Side panel */}
      <div className={`side-panel ${isOpen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closePanel}>
          &times;
        </a>
        <h2 className='p-5 font-bold'>COLLEGE OF INFORMATION TECHNOLOGY OFFICE</h2>
        <img  className='p-5'src={cfaculty} alt="" />
        <p className='p-5'>It manages day-to-day operations and supports academic and administrative functions for both staff and students.</p>
      </div>

      <div className={`side-panel ${isCSDLopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeCSDL}>
          &times;
        </a>
        <h2>Side Panel Content</h2>
        <img src={ptc} alt="" />
        <p>This is the content inside the side panel.</p>
        <img src={ptc} alt="" />
        <p>This is the content inside the side panel.</p>
        <img src={ptc} alt="" />
      </div>

      <div className={`side-panel ${isfvrOpen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closefvr}>
          &times;
        </a>
        <h2>Side Panel Content</h2>
        <img src={ptc} alt="" /> 
        <p>This is the content inside the side panel.</p>
      </div>

      <div className={`side-panel ${isopopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeop}>
          &times;
        </a>
        <h2>Office of the COO</h2>
        <img src={COO} alt="" />
        <h2>Marketing Office</h2>
        <img src={Marketing} alt="" />
        <p>.</p>
      </div>

      <div className={`side-panel ${isATRIUMopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeATRIUM}>
          &times;
        </a>
        <h2>ATRIUM</h2>
        <img src={Atrium} alt="" />
        <h2>PEdro Hub</h2>
        <img src={PedroHub} alt="" />
        <p>University Research Center and Quality Assurance Office.</p>
        <img src={UnivResearch} alt="" />
        <p>TES Assistance.</p>
        <img src={TES} alt="" />
      </div>

      <div className={`side-panel ${isCMAopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeCMA}>
          &times;
        </a>
        <h2>COLLEGE OF MANAGEMENT AND ACCOUNTANCY</h2>
        <img src={ptc} alt="" />
        <p>This is the content inside the side panel.</p>
      </div>

      <div className={`side-panel ${isSPopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeSP}>
          &times;
        </a>
        <h2>Student Plaza</h2>
        <img src={SP} alt="" />
        <p>A place that a student can eat their meals or a place to bond with friends and study.</p>
      </div>

      <div className={`side-panel ${isNHopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeNH}>
          &times;
        </a>
        <h2>North Hall (NH)</h2>
        <img src={opnefield} alt="" />
      </div>

      <div className={`side-panel ${isFORESTopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeFOREST}>
          &times;
        </a>
        <h2>University Forest</h2>
        <img src={univforest} alt="" />
        <p>A place where you can chill with your friends and feel the nature.</p>
        <img src={Forest} alt="" />
      </div>

      <div className={`side-panel ${isOSopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeOS}>
          &times;
        </a>
        <h2>Old Stage</h2>
        <img src={ptc} alt="" />
        <p>This is the content inside the side panel.</p>
      </div>

      <div className={`side-panel ${isMBAopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeMBA}>
          &times;
        </a>
        <h2>Side Panel Content</h2>
        <img src={ptc} alt="" />
        <p>This is the content inside the side panel.</p>
      </div>

      <div className={`side-panel ${isMBAHopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeMBAH}>
          &times;
        </a>
        <h2>Side Panel Content</h2>
        <img src={ptc} alt="" />
        <p>This is the content inside the side panel.</p>
      </div>

      <div className={`side-panel ${isRIVERSIDEopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeRIVERSIDE}>
          &times;
        </a>
        <h2>Side Panel Content</h2>
        <img src={ptc} alt="" />
        <p>This is the content inside the side panel.</p>
      </div>

      <div className={`side-panel ${isGYMopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeGYM}>
          &times;
        </a>
        <h2>University Gymnasium</h2>
        <img src={gym} alt="" />
        <p>Facility designed to promote fitness, wellness, and recreational activities for students you can also find here the P.E. Dept which is the Dug-Out.</p>
        <img src={nstp} alt="" />
        <p>The NSTP Office (National Service Training Program Office) is a dedicated administrative unit within educational institutions in the Philippines that oversees the implementation and coordination of the National Service Training Program (NSTP), a civic education and defense preparedness program required for college students.</p>
        <img src={nrotc} alt="" />
        <p>NROTC Unit is use by CCJE Students and staffs.</p>

      </div>

      <div className={`side-panel ${isDOopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeDO}>
          &times;
        </a>
        <h2>Side Panel Content</h2>
        <p>This is the content inside the side panel.</p>
      </div>

      <div className={`side-panel ${isGSDopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeGSD}>
          &times;
        </a>
        <h2>Side Panel Content</h2>
        <img src={GSD} alt="" />
        <p>This is the content inside the side panel.</p>
      </div>

      <div className={`side-panel ${isCCJEopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeCCJE}>
          &times;
        </a>
        <h2>Side Panel Content</h2>
        <p>This is the content inside the side panel.</p>
      </div>

      <div className={`side-panel ${isBASICEDopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeBASICED}>
          &times;
        </a>
        <img src={GSD} alt="" />
        <p>This is the content inside the side panel.</p>
        
        
      </div>

    </div>
    </div>
  )
}

export default User_Page_SchoolMap