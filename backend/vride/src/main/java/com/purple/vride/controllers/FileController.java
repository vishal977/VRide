package com.purple.vride.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import com.purple.vride.models.MPFile;
import com.purple.vride.services.MPFileStorageService;

/**
 * @author Vishal N 
 * @date June 1, 2020.
 * @version 1.0
 * 
*/

@RestController
@CrossOrigin(origins = "*")
public class FileController {
	
	@Autowired
	private MPFileStorageService mpfsService;
	
	@PostMapping("/uploadFile")
	public String uploadFile(@RequestParam("file") MultipartFile file)
	{
		MPFile mpf = mpfsService.storeFile(file);
		String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/downloadFile/")
                .path(mpf.getId())
                .toUriString();
		
		return fileDownloadUri;

	}
	
	@GetMapping("/downloadFile/{fileId}")
	public ResponseEntity<Resource> downloadFile(@PathVariable String fileId) throws Exception {
		
		MPFile mpfile = mpfsService.getFile(fileId);
		
		return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(mpfile.getFileType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + mpfile.getFileName() + "\"")
                .body(new ByteArrayResource(mpfile.getFileData()));
		
	}

}
