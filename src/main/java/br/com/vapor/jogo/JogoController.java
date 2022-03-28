package br.com.vapor.jogo;

import java.util.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.*;

@RestController
public class JogoController {
    @Autowired
    private JogoRepo jogoRepo;
    
    public JogoController() {}
    
    @GetMapping("/api/jogos")
    Iterable<Jogo> getJogos(@RequestParam("publicadorId") Optional<Long> publicadorId) {
        if(publicadorId.isPresent()) {
            return jogoRepo.findByPublicadorId(publicadorId.get());
        }
        return jogoRepo.findAll();
    }
    
    @GetMapping("/api/jogos/{id}")
    Optional<Jogo> getJogo(@PathVariable long id) {
        return jogoRepo.findById(id);
    }
    
    @PostMapping("/api/jogos")
    Jogo createJogo(@RequestBody Jogo j) {
        return jogoRepo.save(j);
    }
    
    @PutMapping("/api/jogos/{jogoId}")
    Optional<Jogo> updateJogo(@RequestBody Jogo jogo, @PathVariable long jogoId) {
        Optional<Jogo> opt = this.getJogo(jogoId);
        if(opt.isPresent() && opt.get().getId() == jogo.getId()) {
            return Optional.of(jogoRepo.save(jogo));
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Erro ao alterar dados do jogo com id " + jogoId);
    }
    
    @DeleteMapping(value = "/api/jogos/{id}")
    void deleteJogo(@PathVariable long id) {
        jogoRepo.deleteById(id);
    }
}
