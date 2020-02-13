package com.purple.vride.repositories;
import org.springframework.data.repository.CrudRepository;

import com.purple.vride.models.User;


public interface UserRepository extends CrudRepository<User,Integer> {

}
