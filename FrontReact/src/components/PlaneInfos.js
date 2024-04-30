import React from 'react'

export default function PlaneInfos({element}) {
    const departPartPlace=""+element.departplace+"";
    const arrivePartPlace=""+element.arriveplace+"";

    const departTime=""+element.departTime+"";
    const departHour=departTime.substring(0,departTime.indexOf(":"));
    const departMin=parseInt(departTime.substring(departTime.indexOf(":")+1,departTime.indexOf(" ")))<10?"0"+departTime.substring(departTime.indexOf(":")+1):departTime.substring(departTime.indexOf(":")+1);

    const arriveTime=""+element.arriveTime+"";
    const arriveHour=arriveTime.substring(0,arriveTime.indexOf(":"));
    const arriveMin=parseInt(arriveTime.substring(arriveTime.indexOf(":")+1,arriveTime.indexOf(" ")))<10?"0"+arriveTime.substring(arriveTime.indexOf(":")+1):arriveTime.substring(arriveTime.indexOf(":")+1);

    const runWay=Math.floor(Math.random() * 20)

    const H1=departTime.substring(0,departTime.indexOf(":"))
    const H2=arriveTime.substring(0,arriveTime.indexOf(":"))
    const M1=departTime.substring(departTime.indexOf(":")+1,departTime.indexOf(" "))
    const M2=arriveTime.substring(arriveTime.indexOf(":")+1,arriveTime.indexOf(" "))
    const A1=departTime.substring(departTime.indexOf(" "))
    const A2=arriveTime.substring(arriveTime.indexOf(" "))
    let durationH=0;
    let durationM=0;
    function calculateDuration(){
        if(A1==A2){
            if(M2>=M1){
                durationH=H2-H1;
                durationM=M2-M1;
            }
            else{
                durationH=H2-H1-1
                durationM=M2-M1+60
            }
        }
        if(A1!=A2){
            if(M2>=M1){
                durationH=H2-H1+12;
                durationM=M2-M1;
            }
            else{
                durationH=H2-H1+11
                durationM=M1-M2+60
            }
        }
    }
    calculateDuration()
  return (
            <>
                <tr>
                    <td>
                        <p className='fw-bold pe-3 ps-1'>
                            {element.id}
                        </p>
                    </td>
                    <td>
                        <div className='row'>
                            <div className='col-2 d-flex justify-content-center align-items-center'>
                                <img src={require("../assets/imgs/image.png")} />
                            </div>
                            <div className='col-3 d-flex flex-column justify-content-center align-items-center'>
                                <h5 className='fw-bold mt-3'>{departHour+":"+departMin}</h5>
                                <p className='text-secondary fw-bold'>{element.departplace}</p>
                            </div>
                            <div className='col-4 d-flex flex-column justify-content-center align-items-center '>
                                <p className='text-secondary m-0 p-0 fw-bold'>Duration {durationH}h {durationM<10?"0"+durationM:durationM}m</p>
                                <div className='d-flex container justify-content-center align-items-center'>
                                    <img src={require("../assets/imgs/dot.png")}/>
                                    <hr className='m-0 p-0 container'style={{"height":"3px","background":"#2a9df4","color":"#2a9df4"}}/>
                                    <img src={require("../assets/imgs/dot.png")} />
                                </div>
                                <div className=' m-0 p-0 px-2 d-flex justify-content-between container'>
                                    <small className='text-secondary'>{departPartPlace.substring(0,3).toUpperCase()}</small>
                                    <small className='text-secondary'>{arrivePartPlace.substring(0,3).toUpperCase()}</small>
                                </div>
                            </div>
                            <div className='col-3 d-flex flex-column justify-content-center align-items-center'>
                                <h5 className='fw-bold mt-3'>{arriveHour+":"+arriveMin}</h5>
                                <p className='text-secondary fw-bold'>{element.arriveplace}</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='fw-bold'>{element.flightDate}</p>
                    </td>
                    <td>
                        <p className='fw-bold'>A{runWay<10?"0"+runWay:runWay}</p>
                    </td>
                </tr>
                <tr className='text-center'>
                    <td colSpan={4}><hr className="p-0 m-0" style={{"height":"3px","background":"gray","color":"gray","width":"97%"}}/></td>
                </tr>
            </>
  )
}
