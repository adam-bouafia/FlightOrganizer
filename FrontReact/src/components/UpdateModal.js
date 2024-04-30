import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import useFetch from "../useFetch"


export default function UpdateModal({show,setShow,id,updateFlight}) {
    const hours=[];
    const minutes=[];
    for (let i = 0; i < 12; i++) {
        hours.push(i);
    }
    for (let i = 0; i < 60; i++) {
        minutes.push(i);
    }
    const{data,isPending,error}=useFetch("https://restcountries.com/v3.1/all")
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today =yyyy+'-'+mm+'-'+dd;
    const [todayDate,setTodayDate]=React.useState(today);

    const [departHour,setDepartHour]=React.useState(hours[0]);
    const [departAmPm,setDepartAmPm]=React.useState("AM");
    const [departMinute,setDepartMinute]=React.useState(minutes[0]);
    const [arriveHour,setArriveHour]=React.useState(hours[5]);
    const [arriveAmPm,setArriveAmPm]=React.useState("AM");
    const [arriveMinute,setArriveMinute]=React.useState(minutes[0]);
    const [departPlace,setDepartPlace]=React.useState(0);
    const [arrivePlace,setArrivePlace]=React.useState(1);


  return (
    <Modal show={show} onHide={setShow} >
    <Modal.Header >
      <Modal.Title>Flight with ID  {id}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <form className='d-grid gap-4 user-select-none ' >
            <div>
                <h5 className='fw-bold'>Set Date</h5>
                <input type="date" name="date" min={today} value={todayDate} style={{"userSelect":"none"}} onChange={(el)=>{setTodayDate(el.target.value)}} required/>
            </div>
            <div className='d-flex'>
                <div>
                    <h5 className='fw-bold'>From <span className='text-muted'>(Time)</span></h5>
                    <div className='d-flex me-5'>
                            <Dropdown className=''>
                                <Dropdown.Toggle className='shadow-lg' variant="" id="dropdown-basic" style={{"boxShadow:":" 0px 8px 15px rgba(0, 0, 0, 1)"}}>{departHour<10?"0"+departHour:departHour}</Dropdown.Toggle>
                                <Dropdown.Menu style={{"height":"200px","overflow":"scroll"}}>
                                    {hours.map((element)=>{
                                            return(
                                                <Dropdown.Item key={element} onClick={()=>{setDepartHour(element)}}>{element}</Dropdown.Item>
                                            )
                                        })
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown className=''>
                                <Dropdown.Toggle className='shadow-lg' variant="" id="dropdown-basic" style={{"boxShadow:":" 0px 8px 15px rgba(0, 0, 0, 1)"}}>{departAmPm}</Dropdown.Toggle>
                                <Dropdown.Menu style={{"height":"80px","overflow":"scroll"}}>
                                    <Dropdown.Item onClick={()=>{setDepartAmPm("AM")}}>AM</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>{setDepartAmPm("PM")}}>PM</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown className=''>
                                <Dropdown.Toggle className='shadow-lg' variant="" id="dropdown-basic" style={{"boxShadow:":" 0px 8px 15px rgba(0, 0, 0, 1)"}}>{departMinute<10?"0"+departMinute:departMinute}</Dropdown.Toggle>
                                <Dropdown.Menu style={{"height":"200px","overflow":"scroll"}}>
                                    {minutes.map((element)=>{
                                            return(
                                                <Dropdown.Item key={element }onClick={()=>{setDepartMinute(element)}}>{element}</Dropdown.Item>
                                            )
                                        })
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                </div>
                <div>
                    <h5 className='fw-bold'>To <span className='text-muted'>(Time)</span></h5>
                    <div className='d-flex'>
                        <Dropdown className=''>
                            <Dropdown.Toggle className='shadow-lg' variant="" id="dropdown-basic" style={{"boxShadow:":" 0px 8px 15px rgba(0, 0, 0, 1)"}}>{arriveHour<10?"0"+arriveHour:arriveHour}</Dropdown.Toggle>
                            <Dropdown.Menu style={{"height":"200px","overflow":"scroll"}}>
                                {hours.map((element)=>{
                                        return(
                                            <Dropdown.Item key={element} onClick={()=>{setArriveHour(element)}}>{element}</Dropdown.Item>
                                        )
                                    })
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className=''>
                            <Dropdown.Toggle className='shadow-lg' variant="" id="dropdown-basic" style={{"boxShadow:":" 0px 8px 15px rgba(0, 0, 0, 1)"}}>{arriveAmPm}</Dropdown.Toggle>
                            <Dropdown.Menu style={{"height":"80","overflow":"scroll"}}>
                                <Dropdown.Item onClick={()=>{setArriveAmPm("AM")}}>AM</Dropdown.Item>
                                <Dropdown.Item onClick={()=>{setArriveAmPm("PM")}}>PM</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className=''>
                            <Dropdown.Toggle className='shadow-lg' variant="" id="dropdown-basic" style={{"boxShadow:":" 0px 8px 15px rgba(0, 0, 0, 1)"}}>{arriveMinute<10?"0"+arriveMinute:arriveMinute}</Dropdown.Toggle>
                            <Dropdown.Menu style={{"height":"200px","overflow":"scroll"}}>
                                {minutes.map((element)=>{
                                        return(
                                            <Dropdown.Item key={element} onClick={()=>{setArriveMinute(element)}}>{element}</Dropdown.Item>
                                        )
                                    })
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
            {data&&<div className='d-flex'>
                <div className='me-5'>
                    <h5 className='fw-bold'>From <span className='text-muted'>(Place)</span></h5>
                    <Dropdown>
                        <Dropdown.Toggle className='shadow-lg' variant="" id="dropdown-basic">{data&&data[departPlace]["flag"]} {data&&data[departPlace]["name"]["common"]}</Dropdown.Toggle>
                        <Dropdown.Menu style={{"height":"200px","overflow":"scroll"}}>
                            {data&&data.map((element,index)=>{
                                    index++
                                    return(
                                        <Dropdown.Item key={index} onClick={()=>{arrivePlace!==index-1&&setDepartPlace(index-1)}}>{element["flag"]} {element["name"]["common"]}</Dropdown.Item>
                                    )
                                })
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div>
                    <h5 className='fw-bold'>To <span className='text-muted'>(Place)</span></h5>
                    <Dropdown>
                        <Dropdown.Toggle className='shadow-lg' variant="" id="dropdown-basic">{data&&data[arrivePlace]["flag"]} {data&&data[arrivePlace]["name"]["common"]}</Dropdown.Toggle>
                        <Dropdown.Menu style={{"height":"200px","overflow":"scroll"}}>
                            {data&&data.map((element,index)=>{
                                    index++
                                    return(
                                        <Dropdown.Item key={index} onClick={()=>{departPlace!==index-1&&setArrivePlace(index-1)}}>{element["flag"]} {element["name"]["common"]}</Dropdown.Item>
                                    )
                                })
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </div>  
            </div>}
            
            {isPending&&<div>Loading...</div>}
            {error&&<div>Error when trying to fetch ressources</div>}
        </form></Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={()=>{
         if((departAmPm===arriveAmPm)&&(departHour>=arriveHour)){
            return;
        }
        if(departAmPm==="PM"&&arriveAmPm==="AM"){
            return;
        }
        updateFlight({"arriveTime":arriveHour+":"+arriveMinute+" "+arriveAmPm,"arriveplace":data[arrivePlace]["name"]["common"],"departTime":departHour+":"+departMinute+" "+departAmPm,"departplace":data[departPlace]["name"]["common"],"flightDate":todayDate},id);
        //setShow(!show);
      }
        }>
        Update
      </Button>
    </Modal.Footer>
  </Modal>
  )
}
