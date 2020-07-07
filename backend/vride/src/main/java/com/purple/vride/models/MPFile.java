package com.purple.vride.models;

import javax.persistence.*;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "files")
public class MPFile {
	
	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	private String id;
	
	private String fileName;
	
	private String fileType;
	
	@Lob
	private byte[] fileData;
	
	public MPFile() {
		
	}

	public MPFile(String fileName, String fileType, byte[] fileData) {
		this.fileName = fileName;
		this.fileType = fileType;
		this.fileData = fileData;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getFileType() {
		return fileType;
	}

	public void setFileType(String fileType) {
		this.fileType = fileType;
	}

	public byte[] getFileData() {
		return fileData;
	}

	public void setFileData(byte[] fileData) {
		this.fileData = fileData;
	}

	
	
	

}
