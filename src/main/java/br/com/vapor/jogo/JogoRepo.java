package br.com.vapor.jogo;

import org.springframework.data.repository.CrudRepository;

public interface JogoRepo extends CrudRepository<Jogo, Long> {
    Iterable<Jogo> findByPublicadorId(long publicadorId);
}