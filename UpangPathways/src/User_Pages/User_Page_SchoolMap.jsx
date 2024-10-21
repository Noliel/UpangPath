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
import fvr from '../Container/2.png'
import its from '../Container/3.png'
import ITSS from '../Container/4.png'
import old from '../Container/5.png'
import co from '../Container/6.png'
import forest from '../Container/7.png'
import nh from '../Container/8.png'
import bc from '../Container/9.png'
import cma from '../Container/10.png'
import mba from '../Container/11.png'
import ccje from '../Container/phinma.png'





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
        <span>STUDENT PLAZA(SP)</span>
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
        <h2 className='p-5 font-bold'>CENTER FOR STUDENT DEVELOPMENT AND LEADERSHIP (CSDL) & INFORMATION TECHNOLOGY SERVICES DEPARTMENT (ITS) OFFICE</h2>
        <img className='p-5' src={ITSS} alt="" />
        <p className='p-5'> The CSDL (Center for Student Development and Leadership) office is a vital hub for students, parents, alumni, and others who need assistance with various academic and administrative matters. It handles concerns related to scholarships, helping students apply for student loans and Bukas loans, especially for those facing financial challenges. The office also provides support in processing essential documents, such as certificates of good moral character, for both current students and graduates. In addition, the CSDL office is involved in planning and organizing school events, ensuring smooth coordination of activities and programs. It serves as a key resource for addressing a wide range of concerns within the school community. </p>
        <img className='p-5' src={its} alt="" />
        <p className='p-5'>The ITS (Information Technology Services) department is responsible for managing and supporting students' school-related accounts, such as email accounts and access to student portals. It also assists with the printing of important documents, including ORFs (Official Request Forms) and other essential materials. The office ensures that students have smooth access to their digital resources and provides technical support for any issues related to these services.</p>
  
      </div>

      <div className={`side-panel ${isfvrOpen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closefvr}>
          &times;
        </a>
        <h2 className='p-5 font-bold'>FIDEL V. RAMOS LIBRARY</h2>
        <img className='p-5' src={fvr} alt="" /> 
        <p className='p-5' >The FVR Library is a three-story building that serves as a quiet and ideal place for students to study and review for exams. In addition to offering a peaceful environment, it provides access to a wide range of books that students can borrow for their academic needs. The library also offers a convenient service where students can avail and collect their uniforms. With its calm atmosphere and helpful resources, the FVR Library is one of the best places on campus for focused studying and preparation.</p>
      </div>

      <div className={`side-panel ${isopopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeop}>
          &times;
        </a>
        <h2 className='p-5 font-bold'>OFFICE OF THE COO</h2>
        <img className='p-5' src={co} alt="" />
        <h2 className='p-5 font-bold'>MARKETING OFFICE</h2>
        <img className='p-5' src={Marketing} alt="" />
        <p>.</p>
      </div>

      <div className={`side-panel ${isATRIUMopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeATRIUM}>
          &times;
        </a>
        <h2 className='p-5 font-bold'>ATRIUM</h2>
        <img className='p-5'src={Atrium} alt="" />
        <p className='p-5'>The Atrium is a thriving space within the institution that serves as a center for a variety of important offices and resources. The TES Assistance Office is located here, and it assists students with tuition and educational support programs, as well as financial aid and academic guidance. Adjacent to it is the University Research Center, which promotes cross-disciplinary research initiatives and collaborations while also providing grant writing resources and networking opportunities. The Quality Assurance Office, also located in the Atrium, is responsible for maintaining and improving the quality of educational programs and services through accreditation processes and program assessments. In addition, the Pedro Hub acts as a dynamic space for students to discuss their email addresses.</p>
  
      </div>

      <div className={`side-panel ${isCMAopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeCMA}>
          &times;
        </a>
        <h2 className='p-5 font-bold' >COLLEGE OF MANAGEMENT AND ACCOUNTANCY</h2>
        <img className='p-5' src={cma} alt="" />
        <p className='p-5' >The CMA building is a four-story structure primarily dedicated to CMA (College of Management and Accountancy) students, though it also serves CAS (College of Arts and Sciences), freshman students, and those from various other courses. Known for hosting academic activities like debates, the building provides versatile spaces for student learning and engagement. Notably, it houses a banquet hall on the fourth floor, which is used for special events and gatherings. The CMA building is a central hub for diverse academic activities within the campus.</p>
      </div>

      <div className={`side-panel ${isSPopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeSP}>
          &times;
        </a>
        <h2 className='p-5 font-bold'>Student Plaza</h2>
        <img className='p-5' src={SP} alt="" />
        <p className='p-5' >A place that a student can eat their meals or a place to bond with friends and study.</p>
      </div>

      <div className={`side-panel ${isNHopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeNH}>
          &times;
        </a>
        <h2 className='p-5 font-bold'>North Hall (NH)</h2>
        <img className='p-5' src={nh} alt="" />
        <p>NH Hall is a dedicated building designed primarily for education students, fostering a collaborative and innovative learning environment. It features state-of-the-art facilities tailored to meet the needs of future educators. One of the standout areas is the architecture room located on the fifth floor, which offers specialized resources and tools for students interested in design and planning. While NH Hall caters primarily to education students, its facilities are open to all courses, promoting interdisciplinary collaboration and allowing students from various fields to benefit from its resources. The building is a hub of activity, encouraging creativity, teamwork, and academic growth among the university community.</p>
      </div>

      <div className={`side-panel ${isFORESTopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeFOREST}>
          &times;
        </a>
        <h2 className='p-5 font-bold'>University Forest</h2>
        <img  className='p-5' src={forest} alt="" />
        <p className='p-5' >A place where you can chill with your friends and feel the nature.</p>
        <img src={Forest} alt="" />
      </div>

      <div className={`side-panel ${isOSopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeOS}>
          &times;
        </a>
        <h2 className='p-5 font-bold'>Old Stage</h2>
        <img className='p-5' src={old} alt="" />
        <p className='p-5' >The Old Stage is a lively space primarily used by students for practicing choreography and honing their performance skills. It's a bustling hub where dancers come together to rehearse routines, refine their movements, and collaborate on creative projects. Additionally, the stage serves as a venue for students to practice marching, providing ample room for formations and drills. With its energetic atmosphere and supportive community, the Old Stage is an essential part of the students' artistic journey, fostering talent and teamwork in a vibrant setting.</p>
      </div>

      <div className={`side-panel ${isMBAopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeMBA}>
          &times;
        </a>
        <h2 className='p-5 font-bold'>MBA BUILDING</h2>
        <img className='p-5' src={mba} alt="" />
        <p className='p-5' >
        The MBA Building is a dedicated four-story facility designed specifically for the College of Engineering and Architecture (CEA) and the College of Education and Liberal Arts (CELA) courses. It features modern classrooms and specialized spaces that cater to the unique needs of students in these fields, fostering an environment of creativity and collaboration. The building is equipped with cutting-edge technology and resources to support hands-on learning and project-based activities. With its focus on engineering, architecture, and liberal arts education, the MBA Building serves as a vital hub for academic growth and innovation, encouraging students to explore and develop their skills in a dynamic setting.</p>
      </div>

      <div className={`side-panel ${isMBAHopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeMBAH}>
          &times;
        </a>
        <h2 className='p-5 font-bold'>MBA HALL</h2>
        <img className='p-5' src={ptc} alt="" />
        <p className='p-5'>MBA Hall is a spacious and versatile venue seamlessly connected to the NH Building, providing easy access for students and faculty. Positioned strategically to lead to the back entrance, MBA Hall offers a convenient route for students moving between buildings.</p>
      </div>

      <div className={`side-panel ${isRIVERSIDEopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeRIVERSIDE}>
          &times;
        </a>
        <h2 className='p-5 font-bold'>RIVER-SIDE BUILDING </h2>
        <img className='p-5'src={ptc} alt="" />
        <p className='p-5'>The Riverside Building is a modern five-story facility designed to support medical and health-related education. It boasts 54 classrooms and 18 specialized laboratories, including a state-of-the-art mock hospital that allows students to gain practical experience in a realistic clinical setting. The building is also home to the College of Arts and Sciences (CAS) faculty, fostering interdisciplinary collaboration and a vibrant academic community. Additionally, the Riverside Building features its own canteen on the fourth floor, providing a convenient space for students and faculty to relax and enjoy meals between classes. Overall, this facility serves as a dynamic hub for learning and innovation in the fields of health and science.</p>
      </div>

      <div className={`side-panel ${isGYMopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeGYM}>
          &times;
        </a>
        <h2 className='p-5 font-bold'>University Gymnasium</h2>
        <img className='p-5' src={gym} alt="" />
        <p className='p-5'>Facility designed to promote fitness, wellness, and recreational activities for students you can also find here the P.E. Dept which is the Dug-Out.</p>
        <img className='p-5'src={nstp} alt="" />
        <p className='p-5'>The NSTP Office (National Service Training Program Office) is a dedicated administrative unit within educational institutions in the Philippines that oversees the implementation and coordination of the National Service Training Program (NSTP), a civic education and defense preparedness program required for college students.</p>
        <img className='p-5' src={nrotc} alt="" />
        <p className='p-5'>NROTC Unit is use by CCJE Students and staffs.</p>

      </div>

      <div className={`side-panel ${isDOopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeDO}>
          &times;
        </a>
        <h2 className='p-5 font-bold'>DUG-OUT</h2>
        <img className='p-5'src={GSD} alt="" />
        <p className='p-5'>This is the content inside the side panel.</p>
      </div>

      <div className={`side-panel ${isGSDopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeGSD}>
          &times;
        </a>
        <h2 className='p-5 font-bold'> GENERAL SERVICE DEPARTMENT</h2>
        <img className='p-5'src={GSD} alt="" />
        <p className='p-5'>This is the content inside the side panel.</p>
      </div>

      <div className={`side-panel ${isCCJEopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeCCJE}>
          &times;
        </a>
        <h2 className='p-5 font-bold'>COLLEGE OF CRIMINOLOGY AND JUSTICE EDUCATION BUILDING</h2>
        <img className='p-5'src={ccje} alt="" />
        <p className='p-5'>
        The CCJE Building, formerly known as the CHS Building, has been repurposed to support the criminology program at the university. This modern facility is designed to provide students with the resources and environment necessary for studying criminology and criminal justice. Inside, you’ll find specialized classrooms, labs, and study areas tailored to the unique needs of criminology students. The building fosters a collaborative atmosphere, encouraging discussions and research on key topics in the field. With its focus on criminology, the CCJE Building is an essential part of the university's commitment to providing a comprehensive education in criminal justice and related disciplines.</p>
      </div>

      <div className={`side-panel ${isBASICEDopen ? 'open' : ''}`}>
        <a href="#" className="close-btn" onClick={closeBASICED}>
          &times;
        </a>
        <h2 className='p-5 font-bold'>BASIC ED BUILDING</h2>
        <img className='p-5' src={bc} alt="" />
        <p className='p-5'>The Basic Education Building is a dedicated space for senior high school and education students, designed to support their academic needs and enhance their learning experience. This building features classrooms equipped with modern facilities that foster collaboration and engagement among students. Additionally, it houses the module distribution center, making it a central location for students to access essential learning materials and resources. With its focus on both senior high school and education students, the Basic Education Building serves as a vital hub for academic growth, providing a supportive environment for the next generation of educators and learners.</p>
        
        
      </div>

    </div>
    </div>
  )
}

export default User_Page_SchoolMap