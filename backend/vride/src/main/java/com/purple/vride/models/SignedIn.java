package com.purple.vride.models;

/**
 * @author Vishal N 
 * @date February 15, 2020.
 * @version 1.0
 * 
*/

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "signedin")
public class SignedIn {
	
	@Id
	@Column(name = "empid")
	private int empid;
	
	@Column(name = "firstname")
	private String firstname;
	
	public int getEmpid() {
		return empid;
	}
	
	public void setEmpid(int empid) {
		this.empid = empid;
	}
	
	public String getFirstname() {
		return firstname;
	}
	
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	
	public SignedIn() {}
	
	public SignedIn(int empid, String firstname) {
		this.empid = empid;
		this.firstname = firstname;
	}
}
