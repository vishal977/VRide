package com.purple.vride.repositories;

import org.springframework.data.repository.CrudRepository;

import com.purple.vride.models.MPFile;

public interface MultipartFileRepository extends CrudRepository<MPFile, String> {

}
