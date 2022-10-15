package com.ga.retos.servicio;

import com.ga.retos.entidades.Score;
import com.ga.retos.repositorio.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ScoreService {

    @Autowired
    private ScoreRepository scoreRepository;

    public List<Score> getAll() {
        return scoreRepository.getAll();
    }

    public Optional<Score> getScore(int id) {
        return scoreRepository.getScore(id);
    }

    public Score save(Score s) {
        if (s.getIdScore() == null) {
            return scoreRepository.save(s);
        } else {
            Optional<Score> se = scoreRepository.getScore(s.getIdScore());
            if (se.isPresent()) {
                return s;
            } else {
                return scoreRepository.save(s);
            }
        }

    }

    public Score update(Score s) {
        if (s.getIdScore() != null) {
            Optional<Score> se = scoreRepository.getScore(s.getIdScore());
            if (se.isPresent()) {
                if (s.getMessageText() != null) {
                    se.get().setMessageText(s.getMessageText());
                }
                if (s.getStars() != null) {
                    se.get().setStars(s.getStars());
                }
                scoreRepository.save(se.get());
                return se.get();
            } else {
                return s;
            }
        } else {
            return s;
        }
    }

    public boolean delete(int id) {
        Boolean aBoolean = false;
        Optional<Score> s = scoreRepository.getScore(id);
        if (s.isPresent()) {
            scoreRepository.delete(s.get());
            aBoolean = true;
        }
        return aBoolean;
    }
}




