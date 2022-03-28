package br.com.vapor.publicador;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
public class PublicadorController {
    @Autowired
    private PublicadorRepo publicadorRepo;
    
    public PublicadorController() {}
    
    @GetMapping("/api/publicadores")
    Iterable<Publicador> getPublicadores() {
        return publicadorRepo.findAll();
    }
    
    @GetMapping("/api/publicadores/{id}")
    Optional<Publicador> getPublicador(@PathVariable long id) {
        return publicadorRepo.findById(id);
    }
    
    @PostMapping("/api/publicadores")
    Publicador createPublicador(@RequestBody Publicador p) {
        return publicadorRepo.save(p);
    }
    
    @PutMapping("/api/publicadores/{id}")
    Optional<Publicador> updatePublicador(@RequestBody Publicador p, @PathVariable long id) {
        Optional<Publicador> opt = this.getPublicador(id);
        if(opt.isPresent() && opt.get().getId() == p.getId()) {
            return Optional.of(publicadorRepo.save(p));
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Erro ao alterar dados do publicador com id " + id);
    }
    
    @DeleteMapping(value = "/api/publicadores/{id}")
    void deletePublicador(@PathVariable long id) {
        publicadorRepo.deleteById(id);
    }
}
