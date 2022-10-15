package com.ga.retos.controlador;

import com.ga.retos.entidades.Client;
import com.ga.retos.entidades.Score;
import com.ga.retos.servicio.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RestController
@RequestMapping("/api/Score")
public class ScoreControllable {

    @Autowired
    private ScoreService scoreService;

    @GetMapping("/all")
    public List<Score> getAll() {
        return scoreService.getAll();
    }
    @GetMapping("/{id}")
    public Optional<Score> getScore(@PathVariable("id") int id) {
        return scoreService.getScore(id);
    }
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Score save(@RequestBody Score s) {
        return scoreService.save(s);
    }
    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Score update(@RequestBody Score s) {return scoreService.update(s);}
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id")int id) {return scoreService.delete(id);}

}
