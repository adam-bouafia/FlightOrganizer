package flight;

import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.*;

@Path("/organiser")
public class Organiser {
	static List<Flight> flights = new ArrayList<Flight>();
	@POST
	@Consumes("application/xml")
	@Path("/flight")
	public String ajouterFlight(Flight flight){
		if(flights.add(flight))return "flight ajouté.";
		else return "Impossible d'ajouter flight.";
	}
	
	@GET
	@Produces("application/xml")
	@Path("/flight")
	public List<Flight> listerFlights(){
	return flights;
	}

	@POST
	@Consumes("application/xml")
	@Path("/flight/{id}")
	public String updateFlight(@PathParam("id") int id, Flight flight){
		for(Flight l:flights){
		if(l.getId()==id){
			l.setId(l.getId());
			l.setDepartplace(flight.getDepartplace());
			l.setArriveplace(flight.getArriveplace());
			l.setDepartTime(flight.getDepartTime());
			l.setArriveTime(flight.getArriveTime());
			l.setFlightDate(flight.getFlightDate());
			return "flight modifié.";
			}
		}
		return "Impossible de modifier flight.";
	}
	
	
	@DELETE
	@Consumes("application/xml")
	@Path("/flight/{id}")
	public String supprimerFlight(@PathParam("id") int id){
		for(int i=0; i<flights.size(); i++){
			if(flights.get(i).getId()==id){
				flights.remove(i);
				return "flight supprimé.";
		}
	}
		return "Impossible de supprimer flight.";
	}
}
