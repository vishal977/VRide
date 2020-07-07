package com.purple.vride.services;

/**
 * @author Vishal N 
 * @date February 16, 2020.
 * @version 1.0
 * 
*/


import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.logging.Level;
import java.util.logging.Logger;

public class PasswordHasher {
	
	private final static Logger LOGGER = Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);
	
	private String plainText;
	
	public PasswordHasher(String plainText)
	{
		LOGGER.log(Level.FINE, "Password Hashing initiated.");
		this.plainText = plainText;
	}
	
	public String getHash() throws NoSuchAlgorithmException
	{
		LOGGER.log(Level.FINE, "Hashing password...");
		MessageDigest messageDigest = MessageDigest.getInstance("SHA-256");
		return toHexString(messageDigest.digest(plainText.getBytes(StandardCharsets.UTF_8)));
	}
	
	public String toHexString(byte[] hash)
	{
		LOGGER.log(Level.FINE, "Converting to hexadecimal string...");
		BigInteger number = new BigInteger(1,hash);
		StringBuilder hexString = new StringBuilder(number.toString(16));
		while(hexString.length()<32)
		{
			hexString.insert(0,'0');
		}
		return hexString.toString();
	}

}
