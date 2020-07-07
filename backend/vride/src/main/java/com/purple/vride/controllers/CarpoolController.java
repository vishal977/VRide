package com.purple.vride.controllers;

/**
 * @author Vishal N 
 * @date February 13, 2020.
 * @version 1.0
 * 
*/

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.purple.vride.repositories.CarpoolRepository;
import com.purple.vride.models.Carpool;;

@RestController
@CrossOrigin(origins = "*")
public class CarpoolController {
	
	private final static Logger LOGGER = Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);
	
	@Autowired
	private CarpoolRepository carpoolRepository;
	
	@GetMapping("/carpools")
	public List<Carpool> getCarpools()
	{
		LOGGER.log(Level.FINE, "Getting available carpools");
		return (List<Carpool>) carpoolRepository.findAll();
	}
	
	@PostMapping("/createcarpool")
	public String createCarpool(@RequestBody Map<String,Object> details) {
		
		LOGGER.log(Level.FINE, "Creating carpool...");
		String response = "";
		
		String fromLocation = (String) details.get("fromLocation");
		String toLocation = (String) details.get("toLocation");
		int ownerId = (int) details.get("ownerid");
		String ownername = (String) details.get("ownername");
		String vehicle = (String) details.get("vehicle");
		String regno = (String) details.get("regno");
		int noOfSeats = (int) details.get("noofSeats");
		String date = (String) details.get("date");
		String time = (String) details.get("time");
		
		Carpool cr = new Carpool(ownerId, ownername, fromLocation, vehicle, regno, noOfSeats);
		
		try {
			carpoolRepository.save(cr);
			response = "SUCCESS";
		}
		catch(Exception e) {
			response = "FAILURE";
		}
		
		
		return response;
		
	}

}
