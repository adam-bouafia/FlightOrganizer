import React from "react";
import AddFlight from "./AddFlight"
import UpdateFlight from "./UpdateFlight"
import DeleteFlight from "./DeleteFlight";
import Home from "./Home";


export default function Section({pageIndex}) {
 
  const [flights, setFlights] = React.useState([]);

  const getFlights = () => {
    fetch("http://localhost:8080/FlightsOrganiser/organiser/flight")
      .then(response => response.text())
      .then(xmlString => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlString, 'text/xml');
        const flightsData = Array.from(xml.querySelectorAll('flight')).map(node => {
          const id = node.querySelector('id').textContent;
          const departplace = node.querySelector('departplace').textContent;
          const departTime = node.querySelector('departTime').textContent;
          const arriveplace = node.querySelector('arriveplace').textContent;
          const arriveTime = node.querySelector('arriveTime').textContent;
          const flightDate = node.querySelector('flightDate').textContent;
          return {id,departplace,departTime,arriveplace,arriveTime,flightDate}
        })
        setFlights(flightsData)
        })
  }

  React.useEffect(() => {
    getFlights();
  }, []);

  const addFlight = (flightInfos) => {
    fetch('http://localhost:8080/FlightsOrganiser/organiser/flight', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/xml'
    },
    body:
      `<flight>
      <arriveTime>${flightInfos.arriveTime}</arriveTime>
      <arriveplace>${flightInfos.arriveplace}</arriveplace>
      <departTime>${flightInfos.departTime}</departTime>
      <departplace>${flightInfos.departplace}</departplace>
      <flightDate>${flightInfos.flightDate}</flightDate>
      <id>${flights.length}</id>
      </flight>`
  }).then(setTimeout(()=>{window.location.reload()},300))}

  const updateFlight = (flightInfos,id) => {
    fetch(`http://localhost:8080/FlightsOrganiser/organiser/flight/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/xml'
    },
    body:
      `<flight>
      <arriveTime>${flightInfos.arriveTime}</arriveTime>
      <arriveplace>${flightInfos.arriveplace}</arriveplace>
      <departTime>${flightInfos.departTime}</departTime>
      <departplace>${flightInfos.departplace}</departplace>
      <flightDate>${flightInfos.flightDate}</flightDate>
      <id>${id}</id>
      </flight>`
  }).then(setTimeout(()=>{window.location.reload()},300))}

  const deleteFlight =(id)=>{
    // Make a POST request
    fetch(`http://localhost:8080/FlightsOrganiser/organiser/flight/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/xml'
  }}).then(setTimeout(()=>{window.location.reload()},300))}
  console.log(flights&&flights)

  return (
    <div className="col-7 d-flex justify-content-start align-items-center " style={{"background":""}}>
        {pageIndex===0?<Home data={flights}/>:pageIndex===1?<AddFlight addFlight={addFlight}/>:pageIndex===2?<UpdateFlight flights={flights} updateFlight={updateFlight} />:<DeleteFlight dataLength={flights.length} deleteFlight={deleteFlight}/>}
    </div>
  )
}