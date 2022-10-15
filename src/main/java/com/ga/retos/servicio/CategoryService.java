package com.ga.retos.servicio;

import com.ga.retos.entidades.Category;
import com.ga.retos.repositorio.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> getAll() {
        return categoryRepository.getAll();
    }

    public Optional<Category> getCategory(int id) {
        return categoryRepository.getCategory(id);
    }

    public Category save(Category ca) {
        if (ca.getId() == null) {
            return categoryRepository.save(ca);
        } else {
            Optional<Category> e = categoryRepository.getCategory(ca.getId());
            if (e.isPresent()) {
                return ca;
            } else {
                return categoryRepository.save(ca);
            }
        }

    }

    public Category update(Category ca) {
        if (ca.getId() != null) {
            Optional<Category> ce = categoryRepository.getCategory(ca.getId());
            if (ce.isPresent()) {
                if (ca.getDescription() != null) {
                    ce.get().setDescription(ca.getDescription());
                }
                if (ca.getName() != null) {
                    ce.get().setName(ca.getName());
                }
                return categoryRepository.save(ce.get());
            }

        }
        return ca;
    }

    public boolean delete(int id) {
        Boolean aBoolean = false;
        Optional<Category> ca = categoryRepository.getCategory(id);
        if (ca.isPresent()) {
            categoryRepository.delete(ca.get());
            aBoolean = true;
        }
        return aBoolean;
    }
}




