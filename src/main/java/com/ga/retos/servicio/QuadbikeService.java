package com.ga.retos.servicio;

import com.ga.retos.entidades.Quadbike;
import com.ga.retos.repositorio.QuadbikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuadbikeService {

    @Autowired
    private QuadbikeRepository quadbikeRepository;

    public List<Quadbike> getAll() {
        return quadbikeRepository.getAll();
    }

    public Optional<Quadbike> getQuadbike(int id) {
        return quadbikeRepository.getQuadbike(id);
    }

    public Quadbike save(Quadbike q) {
        if (q.getId() == null) {
            return quadbikeRepository.save(q);
        } else {
            Optional<Quadbike> qe = quadbikeRepository.getQuadbike(q.getId());
            if (qe.isPresent()) {
                  return q;
            } else {
                return quadbikeRepository.save(q);
            }
        }

    }

    public Quadbike update(Quadbike q) {
        if (q.getId() != null) {
            Optional<Quadbike> qe = quadbikeRepository.getQuadbike(q.getId());
            if (qe.isPresent()) {
                if (q.getName() != null) {
                    qe.get().setName(q.getName());
                }
                if (q.getBrand() != null) {
                    qe.get().setBrand(q.getBrand());
                }
                if (q.getYear() != null) {
                    qe.get().setYear(q.getYear());
                }
                if (q.getDescription() != null) {
                    qe.get().setDescription(q.getDescription());
                    }
                if (q.getCategory() != null) {
                    qe.get().setCategory(q.getCategory());
                    }
                quadbikeRepository.save(qe.get());
                return qe.get();
            } else {
                return q;
            }
        } else {
            return q;
            }
        }


    public boolean delete(int id) {
        Boolean aBoolean = false;
        Optional<Quadbike> q = quadbikeRepository.getQuadbike(id);
        if (q.isPresent()) {
            quadbikeRepository.delete(q.get());
            aBoolean = true;
        }
        return aBoolean;
    }
}




