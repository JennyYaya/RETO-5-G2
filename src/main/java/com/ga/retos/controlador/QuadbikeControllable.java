package com.ga.retos.controlador;

import com.ga.retos.entidades.Client;
import com.ga.retos.entidades.Quadbike;
import com.ga.retos.servicio.QuadbikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RestController
@RequestMapping("/api/Quadbike")
public class QuadbikeControllable {

    @Autowired
    private QuadbikeService quadbikeService;

    @GetMapping("/all")
    public List<Quadbike> getAll(){
        return quadbikeService.getAll();
    }
    @GetMapping("/{id}")
    public Optional<Quadbike> getQuadbike(@PathVariable("id") int id) {
        return quadbikeService.getQuadbike(id);
    }
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Quadbike save(@RequestBody Quadbike q){
        return quadbikeService.save(q);
    }
    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Quadbike update(@RequestBody Quadbike q) {return quadbikeService.update(q);}
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id")int id) {return quadbikeService.delete(id);}
}
