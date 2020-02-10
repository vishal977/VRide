package com.purple.repositories;

import org.springframework.data.repository.CrudRepository;
import com.purple.models.User;


public interface UserRepository extends CrudRepository<User, Integer> {

}
