package com.purple.vride.repositories;

/**
 * @author Vishal N 
 * @date February 15, 2020.
 * @version 1.0
 * 
*/

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.purple.vride.models.SignedIn;

public interface SignedInRepository extends CrudRepository<SignedIn, Integer> {
	
	@Query(value = "DELETE FROM SIGNEDIN u WHERE u.empid = ?1", 
			  nativeQuery = true)
    List<SignedIn> findUser(int id);

}
