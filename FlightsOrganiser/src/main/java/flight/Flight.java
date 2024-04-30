package flight;
import javax.xml.bind.annotation.XmlRootElement;
@XmlRootElement
public class Flight {
	private int id;
	private String departTime;
	private String arriveTime;
	private String departplace;
	private String arriveplace;
	private String flightDate;
	public Flight() {}
	public Flight(int id, String departTime,String arriveTime,String departplace
			,String arriveplace,String flightDate) {
	super();
	this.id=id;
	this.departTime = departTime;
	this.arriveTime = arriveTime;
	this.departplace = departplace;
	this.arriveplace = arriveplace;
	this.flightDate = flightDate;
	}
	public int getId() {
		return id;
		}
	public void setId(int id) {
		this.id = id;
		}
	
	
	public String getDepartTime() {
		return departTime;
		}
	public void setDepartTime(String departTime) {
		this.departTime = departTime;
		}
	
	public String getArriveTime() {
		return arriveTime;
		}
	public void setArriveTime(String arriveTime) {
		this.arriveTime = arriveTime;
		}
	
	public String getDepartplace() {
		return departplace;
		}
	public void setDepartplace(String departplace) {
		this.departplace = departplace;
		}
	
	public String getArriveplace() {
		return arriveplace;
		}
	public void setArriveplace(String arriveplace) {
		this.arriveplace = arriveplace;
		}
	public String getFlightDate() {
		return flightDate;
		}
	public void setFlightDate(String flightDate) {
		this.flightDate = flightDate;
		}
}
