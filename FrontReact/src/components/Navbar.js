import * as Icon from'react-bootstrap-icons';
import Tooltip  from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


export default function Navbar({setPageIndex}) {
  return (
    <div className="NavBar" style={{"position":"fixed","top":0,"width":"100%","zIndex":"4"}}>
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="container-xxl  d-felx justify-content-around">
                    <HashLink to="/" className="navbar-brand user-select-none" >
                        <div className='logo'>
                            <p className='text-primary' ></p>
                            <img  style={{"width":"240px"}} src={require("../assets/imgs/logo.png")} alt="l"/>
                        </div>
                    </HashLink>
                    <ul className="restCommands navbar-nav fw-bold" style={{"fontSize":"16px","fontWeight":"bold"}}>
                            <li className="nav-item">
                                <HashLink to="/" className="nav-link" onClick={()=>{setPageIndex(0)}}>Home</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink to="/" className="nav-link" onClick={()=>{setPageIndex(1)}}>Add</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink to="/" className="nav-link" onClick={()=>{setPageIndex(2)}}>Update</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink to="/" className="nav-link" onClick={()=>{setPageIndex(3)}}>Delete</HashLink>
                            </li>
                            {/* <li className="nav-item">
                            <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>
                                <a class="" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">Contact Us</a>
                            </li> */}
                        </ul>
                        <ul className="navbar-nav fw-bold">
                            <li className="nav-item d-none d-md-flex me-2" onClick={()=>{window.location.reload()}}>
                                <OverlayTrigger
                                    delay={{ hide: 450, show: 300 }}
                                    overlay={(props) => (
                                    <Tooltip {...props} style={{...props.style, position:'absolute'}}>History</Tooltip>
                                    )}
                                    placement="bottom">
                                    <Link to={`/`} className="nav-link p-1" ><Icon.ClockFill/></Link>
                                </OverlayTrigger>
                            </li>
                            <li className="nav-item d-flex justify-content-center align-items-center">
                                <h5 className='fw-bold mt-1'>Dashboard</h5>
                                {/* <a href="/" className="btn btn-primary ms-lg-2 rounded-3">Log in</a> */}
                            </li>
                        </ul>
                </div>
            </nav>
        </div>
  )
}
