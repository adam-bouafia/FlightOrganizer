import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import UpdateModal from './UpdateModal';

export default function UpdateFlight({flights,updateFlight}) {
    const ids = [];
    for (let i = 0; i < flights.length; i++) {
        ids.push(i);
    }
    const [id,setId]=React.useState(ids[0])

    const [show, setShow] = React.useState(false);
  return (
    <div className='align-self-center p-5 px-5 d-grid gap-4 '>
        <h3 className='fw-bold' style={{"marginRight":"150px"}}> “What’s important is that a customer should get off the airplane feeling, ‘I didn’t just get from A to B. I had one of the most pleasant experiences I ever had, and I’ll be back for that reason.’” <br/>– Herb Kelleher –</h3>
        <form className='d-grid gap-4 user-select-none'>
            <div>
                <h4 className='fw-bold'>Give Plane ID</h4>
                <div className='row'>
                    <Dropdown className='col-2 d-flex  text-center'>
                        <Dropdown.Toggle className='shadow-lg' variant="" id="dropdown-basic" style={{"boxShadow:":" 0px 8px 15px rgba(0, 0, 0, 1)","width":"55px"}}>{id<10?"0"+id:id}</Dropdown.Toggle>

                        <Dropdown.Menu className=''style={{"maxHeight":"200px","overflow":"scroll"}}>
                            {ids.map((element)=>{
                                    return(
                                        <Dropdown.Item key={element} onClick={()=>{setId(element)}}>{element}</Dropdown.Item>
                                    )
                                })
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
                
                
            <button type="button" className="btn btn-primary" style={{"width":"600px"}} onClick={()=>{setShow(!show)}}>Continue</button>
        </form>
        <UpdateModal show={show} setShow={setShow} id={id} updateFlight={updateFlight} flights={flights}/>
    </div>
  )
}
