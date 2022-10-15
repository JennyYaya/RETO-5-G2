package com.ga.retos.repositorio.crudRepositorio;

import com.ga.retos.entidades.Message;
import org.springframework.data.repository.CrudRepository;

public interface MessageCrudRepository extends CrudRepository <Message, Integer> {
}
