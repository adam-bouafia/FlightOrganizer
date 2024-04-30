import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

export default function DeleteFlight({dataLength,deleteFlight}) {
  const ids = [];
    for (let i = 0; i < dataLength; i++) {
        ids.push(i);
    }
    const [id,setId]=React.useState(ids[0])
  return (
    <div className='align-self-center p-5 px-5 d-grid gap-4 '>
        <h3 className='fw-bold' style={{"marginRight":"150px"}}> “The similarities between commercial airplanes and automobiles are striking. It’s all about safe and efficient transportation using the latest technology and the best fuel efficiency.”<br/> – Alan Mulally –</h3>
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
                
                
            <button type="button" className="btn btn-primary" style={{"width":"600px"}} onClick={()=>{deleteFlight(id)}}>Delete</button>
        </form>
    </div>
  )
}
