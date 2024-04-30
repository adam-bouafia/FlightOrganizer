import React from 'react'
import PlaneInfos from './PlaneInfos'

export default function Home({data}) {
  return (
    <div className='container' style={{"maxHeight":"593px"}}>
        <h3 className='fw-bold mb-4'>All Flights</h3>
        <div  className='container'  style={{"height":"428px","overflow":"scroll"}}>
            <table className='container'>
                <thead>
                    <tr style={{"position":"sticky","zIndex":"2","top":"0"}}>
                        <th className='pe-3'>ID</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Runway</th>
                    </tr>
                </thead>
                <tbody className='' >
                    {data&&data.map((el)=>{
                        return(
                            <PlaneInfos key={el.id} element={el}/>
                        )
                    })}
                </tbody>
            </table>
        </div>
        
    </div>
  )
}
