package com.purple.vride.models;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "carpools")
public class Carpool {
	@Id
	@Column(name = "carpoolid")
	private int carpoolId;
	@Column(name = "ownerid")
	private int ownerId;
	@Column(name = "ownername")
	private String ownerName;
	@Column(name = "fromlocation")
	private String fromLocation;
	@Column(name = "vehicle")
	private String vehicle;
	@Column(name = "regno")
	private String regno;
	@Column(name = "noofseats")
	private int noOfSeats;
	
	public int getCarpoolId() {
		return carpoolId;
	}
	public void setCarpoolId(int carpoolId) {
		this.carpoolId = carpoolId;
	}
	public int getOwnerId() {
		return ownerId;
	}
	public void setOwnerId(int ownerId) {
		this.ownerId = ownerId;
	}
	public String getOwnerName() {
		return ownerName;
	}
	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}
	public String getFromLocation() {
		return fromLocation;
	}
	public void setFromLocation(String fromLocation) {
		this.fromLocation = fromLocation;
	}
	public String getVehicle() {
		return vehicle;
	}
	public void setVehicle(String vehicle) {
		this.vehicle = vehicle;
	}
	public String getRegno() {
		return regno;
	}
	public void setRegno(String regno) {
		this.regno = regno;
	}
	public int getNoOfSeats() {
		return noOfSeats;
	}
	public void setNoOfSeats(int noOfSeats) {
		this.noOfSeats = noOfSeats;
	}
	public Carpool(int carpoolId, int ownerId, String ownerName, String fromLocation, String vehicle, String regno,
			int noOfSeats) {
		super();
		this.carpoolId = carpoolId;
		this.ownerId = ownerId;
		this.ownerName = ownerName;
		this.fromLocation = fromLocation;
		this.vehicle = vehicle;
		this.regno = regno;
		this.noOfSeats = noOfSeats;
	}
	
	public Carpool()
	{
		
	}
}
