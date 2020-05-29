package com.purple.vride.controllers;

/**
 * @author Vishal N 
 * @date February 13, 2020.
 * @version 1.0
 * 
*/

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.purple.vride.repositories.CarpoolRepository;
import com.purple.vride.models.Carpool;;

@RestController
@CrossOrigin(origins = "*")
public class CarpoolController {
	
	@Autowired
	private CarpoolRepository carpoolRepository;
	
	@GetMapping("/carpools")
	public List<Carpool> getCarpools()
	{
		return (List<Carpool>) carpoolRepository.findAll();
	}

}
