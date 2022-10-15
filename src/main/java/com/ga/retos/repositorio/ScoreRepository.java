package com.ga.retos.repositorio;

import com.ga.retos.entidades.Score;
import com.ga.retos.repositorio.crudRepositorio.ScoreCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ScoreRepository {
    @Autowired
    private ScoreCrudRepository scoreCrudRepository;

    public List<Score> getAll(){
        return (List<Score>) scoreCrudRepository.findAll();
    }
    public Optional<Score> getScore(int id){
        return scoreCrudRepository.findById(id);
    }
    public Score save(Score s) {
        return scoreCrudRepository.save(s);
    }
    public void delete(Score s){
        scoreCrudRepository.delete(s);
    }


}
