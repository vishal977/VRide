package com.purple.vride;

/**
 * @author Vishal N 
 * @date February 12, 2020.
 * @version 1.0
 * 
*/

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.logging.Level;
import java.util.logging.Logger;

@SpringBootApplication
public class VrideApplication {
	
	private final static Logger LOGGER = Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);

	public static void main(String[] args) {
		LOGGER.log(Level.FINE, "Spring application running..");
		SpringApplication.run(VrideApplication.class, args);
	}

}
