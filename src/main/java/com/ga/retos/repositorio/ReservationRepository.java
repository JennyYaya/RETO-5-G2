package com.ga.retos.repositorio;

import com.ga.retos.entidades.Client;
import com.ga.retos.entidades.DTOs.TotalAndClient;
import com.ga.retos.entidades.Reservation;
import com.ga.retos.repositorio.crudRepositorio.ReservationCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public class ReservationRepository {
    @Autowired
    private ReservationCrudRepository reservationCrudRepository;

    public List<Reservation> getAll(){return (List<Reservation>) reservationCrudRepository.findAll();}
    public Optional<Reservation> getReservation(int id){
        return reservationCrudRepository.findById(id);
    }
    public Reservation save(Reservation c) {
        return reservationCrudRepository.save(c);
    }
    public void delete(Reservation c){
        reservationCrudRepository.delete(c);
    }

    public List<Reservation> getReservationInPeriod(Date a, Date b ){
        return reservationCrudRepository.findAllByStartDateAfterAndDevolutionDateBefore(a, b);
    }
    public List<Reservation> getReservationByStatus(String status){
        return reservationCrudRepository.findAllByStatus(status);
    }
    public List<TotalAndClient> getTopClients(){
        List<TotalAndClient> respuesta = new ArrayList<>();
        List<Object[]> report = reservationCrudRepository.countTotalReservationsByClient();
        for(int i=0;i<report.size();i++){
            respuesta.add(new TotalAndClient((Long)report.get(i)[1],(Client)report.get(i)[0]));
        }
        return respuesta;
    }
}
