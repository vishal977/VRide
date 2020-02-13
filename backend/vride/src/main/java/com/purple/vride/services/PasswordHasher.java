package com.purple.vride.services;

import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class PasswordHasher {
	
	private String plainText;
	
	public PasswordHasher(String plainText)
	{
		this.plainText = plainText;
	}
	
	public String getHash() throws NoSuchAlgorithmException
	{
		MessageDigest messageDigest = MessageDigest.getInstance("SHA-256");
		return toHexString(messageDigest.digest(plainText.getBytes(StandardCharsets.UTF_8)));
	}
	
	public String toHexString(byte[] hash)
	{
		BigInteger number = new BigInteger(1,hash);
		StringBuilder hexString = new StringBuilder(number.toString(16));
		while(hexString.length()<32)
		{
			hexString.insert(0,'0');
		}
		return hexString.toString();
	}

}
