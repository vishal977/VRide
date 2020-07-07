package com.purple.vride.services;

/**
 * @author Vishal N 
 * @date June 1, 2020.
 * @version 1.0
 * 
*/

import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;

import com.purple.vride.repositories.MultipartFileRepository;
import com.purple.vride.models.MPFile;

@Service
public class MPFileStorageService {
	
	private final static Logger LOGGER = Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);
	
	@Autowired
	private MultipartFileRepository mpfRepository;
	
	public MPFile storeFile(MultipartFile file) {
		
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		
		try {
			if(fileName.contains("..")) {
                throw new Exception("Sorry! Filename contains invalid path sequence " + fileName);
            }
			
			MPFile mpFile = new MPFile(fileName, file.getContentType(), file.getBytes());
			return mpfRepository.save(mpFile);

		}
		catch(Exception e) {
			LOGGER.log(Level.SEVERE, "Error storing file: " + e.getMessage());
		}
		return null;
	}
	
	public MPFile getFile(String fileId) throws Exception {
        return mpfRepository.findById(fileId)
                .orElseThrow(() -> new Exception("File not found with id " + fileId));
    }
	

}
