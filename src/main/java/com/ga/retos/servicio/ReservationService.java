package com.ga.retos.servicio;

import com.ga.retos.entidades.DTOs.CompletedAndCancelled;
import com.ga.retos.entidades.DTOs.TotalAndClient;
import com.ga.retos.entidades.Reservation;
import com.ga.retos.repositorio.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    public List<Reservation> getAll() {
        return reservationRepository.getAll();
    }

    public Optional<Reservation> getReservation(int id) {
        return reservationRepository.getReservation(id);
    }

    public Reservation save(Reservation r) {
        if (r.getIdReservation() == null) {
            return reservationRepository.save(r);
        } else {
            Optional<Reservation> re = reservationRepository.getReservation(r.getIdReservation());
            if (re.isPresent()) {
                return r;
            } else {
                return reservationRepository.save(r);
            }
        }

    }

    public Reservation update(Reservation r) {
        if (r.getIdReservation() != null) {
            Optional<Reservation> re = reservationRepository.getReservation(r.getIdReservation());
            if (re.isPresent()) {
                if (r.getStartDate() != null) {
                    re.get().setStartDate(r.getStartDate());
                }
                if (r.getDevolutionDate() != null) {
                    re.get().setDevolutionDate(r.getDevolutionDate());
                }
                if (r.getStatus() != null) {
                    re.get().setStatus(r.getStatus());
                }

                reservationRepository.save(re.get());
                return re.get();
            } else {
                return r;
            }
        } else {
            return r;
        }
    }

    public boolean delete(int id) {
        Boolean aBoolean = false;
        Optional<Reservation> r = reservationRepository.getReservation(id);
        if (r.isPresent()) {
            reservationRepository.delete(r.get());
            aBoolean = true;
        }
        return aBoolean;
    }

    public List<Reservation> getReservationsInPeriodReport(String dateA, String dateB){
        SimpleDateFormat parser = new SimpleDateFormat("yyyy-MM-dd");
        Date a = new Date();
        Date b = new Date();
        try {
            a = parser.parse(dateA);
            b = parser.parse(dateB);
        }catch (ParseException exception){
            exception.printStackTrace();
        }

        if(a.before(b)){
            return reservationRepository.getReservationInPeriod(a, b);
        }else{
            return new ArrayList<>();
        }
    }

    public CompletedAndCancelled getReservationStatusReport(){
        List<Reservation> completed = reservationRepository.getReservationByStatus("completed");
        List<Reservation> cancelled = reservationRepository.getReservationByStatus("cancelled");

        return new CompletedAndCancelled((long) completed.size(), (long) cancelled.size());
    }

    public List<TotalAndClient> getTopClientsReport(){
        return reservationRepository.getTopClients();
    }
}




