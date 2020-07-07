package com.purple.vride.controllers;

/**
 * @author Vishal N 
 * @date February 15, 2020.
 * @version 1.0
 * 
*/

import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import com.purple.vride.models.User;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.purple.vride.repositories.SignedInRepository;
import com.purple.vride.repositories.UserRepository;
import com.purple.vride.services.PasswordHasher;
import com.purple.vride.models.SignedIn;

@RestController
@CrossOrigin(origins = "*")
public class LoginController {
	
	private final static Logger LOGGER = Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);
	
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private SignedInRepository signedInRepository;
	
	
	@PostMapping("/login")
	public String logIn(@RequestBody Map<String,Object> loginParams)
	{
		LOGGER.log(Level.FINE, "Log-in initiated.");
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
					System.out.println(hash);
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
			LOGGER.log(Level.SEVERE, "Error logging in: " + e.getMessage());
			response.append("FAILURE");
		}
		
		return response.toString();
	}
	
	@PostMapping("/signUp")
	public String signUp(@RequestBody Map<String,Object> credentials)
	{
		LOGGER.log(Level.FINE, "Sign up initiated.");
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
			LOGGER.log(Level.SEVERE, "Error signing up: " + e.getMessage());
			return "FAILURE";
		}
		
	}
	
	@PostMapping("checksignin")
	public boolean isSignedIn(@RequestBody Map<String,Object> details)
	{
		LOGGER.log(Level.FINE, "Sign in check initiated.");
		int id = 2;
		boolean signedIn = false;
		List<SignedIn> list= (List<SignedIn>) signedInRepository.findAll();
		Iterator iter = list.iterator();
		while(iter.hasNext())
		{
			SignedIn s = (SignedIn) iter.next();
			if(s.getEmpid() == id)
			{
				signedIn = true;
			}
		}
		return signedIn;
	}
	
	@PostMapping("signout")
	public String signOut(@RequestBody Map<String,Object> details)
	{
		LOGGER.log(Level.FINE, "Sign out initiated.");
		int id = Integer.parseInt("" + details.get("empid"));
		String firstname = (String) details.get("firstname");
		SignedIn entity = new SignedIn(id,firstname);
		try {
		signedInRepository.delete(entity);
		return "SUCCESS";
		}
		catch(Exception e)
		{
			LOGGER.log(Level.SEVERE, "Error signing out: " + e.getMessage());
			return "FAILURE";
		}
	}
	
	

}
