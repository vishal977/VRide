package com.purple.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.purple.models.User;
import com.purple.repositories.UserRepository;

@RestController
public class LoginController {
	
	@Autowired
	UserRepository userRepo;
	
	@GetMapping("/login")
	public Iterable noOfUsers()
	{
		return userRepo.findAll();
	}
	
	

}
