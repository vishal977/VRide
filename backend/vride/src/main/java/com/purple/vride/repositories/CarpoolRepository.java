package com.purple.vride.repositories;

/**
 * @author Vishal N 
 * @date February 16, 2020.
 * @version 1.0
 * 
*/

import org.springframework.data.repository.CrudRepository;

import com.purple.vride.models.Carpool;

public interface CarpoolRepository extends CrudRepository<Carpool,Integer> {

}
