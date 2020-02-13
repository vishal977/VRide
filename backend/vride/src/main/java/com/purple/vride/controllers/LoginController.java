package com.purple.vride.controllers;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import com.purple.vride.models.User;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.purple.vride.repositories.UserRepository;
import com.purple.vride.services.PasswordHasher;

@RestController
@CrossOrigin(origins = "*")
public class LoginController {
	
	@Autowired
	private UserRepository userRepository;
	
	
	@PostMapping("/login")
	public String logIn(@RequestParam("id") String id, @RequestParam("password") String password)
	{
		List<User> users = (List<User>) userRepository.findAll();
		StringBuilder response = new StringBuilder("");
		try 
		{
			Iterator iter = users.iterator();
			while(iter.hasNext())
			{
				User us = (User) iter.next();
				if(id.equals(""+us.getId()))
				{
					PasswordHasher ph = new PasswordHasher(password);
					String hash = ph.getHash();
					if(hash.equals(us.getPassword()))
					{
						response.append("SUCCESS");
					}
					else
					{
						response.append("FAILURE");
					}
				}
			}
		}
		catch(Exception e)
		{
			return e.getMessage();
		}
		
		return response.toString();
	}

}
