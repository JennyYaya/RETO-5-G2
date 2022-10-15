package com.ga.retos.servicio;

import com.ga.retos.entidades.Admin;
import com.ga.retos.repositorio.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public List<Admin> getAll() {
        return adminRepository.getAll();
    }

    public Optional<Admin> getAdmin(int id) {
        return adminRepository.getAdmin(id);
    }

    public Admin save(Admin a) {
        if (a.getIdAdmin() == null) {
            return adminRepository.save(a);
        } else {
            Optional<Admin> e = adminRepository.getAdmin(a.getIdAdmin());
            if (e.isPresent()) {
                return a;
            } else {
                return adminRepository.save(a);
            }
        }

    }

    public Admin update(Admin a) {
        if (a.getIdAdmin() != null) {
            Optional<Admin> e = adminRepository.getAdmin(a.getIdAdmin());
            if (e.isPresent()) {
                if (a.getPassword() != null) {
                    e.get().setPassword(a.getPassword());
                }
                if (a.getName() != null) {
                    e.get().setName(a.getName());
                }
                return adminRepository.save(e.get());
            }

        }
        return a;
    }

    public boolean delete(int id) {
        Boolean aBoolean = false;
        Optional<Admin> p = adminRepository.getAdmin(id);
        if (p.isPresent()) {
            adminRepository.delete(p.get());
            aBoolean = true;
        }
        return aBoolean;
    }
}




