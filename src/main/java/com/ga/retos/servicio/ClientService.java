package com.ga.retos.servicio;

import com.ga.retos.entidades.Client;
import com.ga.retos.repositorio.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    public List<Client> getAll() {
        return clientRepository.getAll();
    }

    public Optional<Client> getClient(int id) {
        return clientRepository.getClient(id);
    }

    public Client save(Client cl) {
        if (cl.getIdClient() == null) {
            return clientRepository.save(cl);
        } else {
            Optional<Client> cle = clientRepository.getClient(cl.getIdClient());
            if (cle.isPresent()) {
                  return cl;
            } else {
                return clientRepository.save(cl);
            }
        }

    }

    public Client update(Client cl) {
        if (cl.getIdClient() != null) {
            Optional<Client> cle = clientRepository.getClient(cl.getIdClient());
            if (cle.isPresent()) {
                if (cl.getName() != null) {
                    cle.get().setName(cl.getName());
                }
                if (cl.getAge() != null) {
                    cle.get().setAge(cl.getAge());
                }
                if (cl.getPassword() != null) {
                    cle.get().setPassword(cl.getPassword());
                }
                    clientRepository.save(cle.get());
                    return cle.get();
                } else {
                    return cl;
                }
            } else {
                return cl;
            }
        }


    public boolean delete(int id) {
        Boolean aBoolean = false;
        Optional<Client> cl = clientRepository.getClient(id);
        if (cl.isPresent()) {
            clientRepository.delete(cl.get());
            aBoolean = true;
        }
        return aBoolean;
    }
}




