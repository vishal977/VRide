package com.purple.vride.repositories;

/**
 * @author Vishal N 
 * @date February 15, 2020.
 * @version 1.0
 * 
*/

import org.springframework.data.repository.CrudRepository;

import com.purple.vride.models.User;


public interface UserRepository extends CrudRepository<User,Integer> {

}
