package com.purple.vride.controllers;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import com.purple.vride.models.User;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.purple.vride.repositories.UserRepository;
import com.purple.vride.services.PasswordHasher;
import com.purple.vride.models.Role;

@RestController
@CrossOrigin(origins = "*")
public class LoginController {
	
	@Autowired
	private UserRepository userRepository;
	
	
	@PostMapping("/login")
	public String logIn(@RequestBody Map<String,Object> loginParams)
	{
		String id;
		String password;
		StringBuilder response = new StringBuilder("");
		id = (String) loginParams.get("id");
		password = (String) loginParams.get("password");
		
		List<User> users = (List<User>) userRepository.findAll();
		
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
	
	@PostMapping("/signUp")
	public String signUp(@RequestBody Map<String,Object> credentials)
	{
		int id = Integer.parseInt(""+credentials.get("empid"));
		String firstName = (String) credentials.get("firstname");
		String lastName = (String) credentials.get("lastname");
		String email = (String) credentials.get("email");
		String password = (String) credentials.get("password");
		String status= (String) credentials.get("status");
		PasswordHasher ph = new PasswordHasher(password);
		try 
		{
			String hashedPassword = ph.getHash();
			User newUser = new User(id,firstName,lastName,email,hashedPassword,status);
			userRepository.save(newUser);
			return "SUCCESS";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return e.getMessage().toString();
		}
		
	}
	
	

}
