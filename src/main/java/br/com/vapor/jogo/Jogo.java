package br.com.vapor.jogo;

import br.com.vapor.publicador.Publicador;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="jogos")
public class Jogo {
    @Id @GeneratedValue
    private long id;
    private String titulo;
    private String descricao;
    private double preco;
    private String url;
    
    @ManyToOne(fetch=FetchType.EAGER, optional=false)
    private Publicador publicador;

    public Jogo() {
        super();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
    
    public Publicador getPublicador() {
        return publicador;
    }
    
    public void setPublicador(Publicador publicador) {
        this.publicador = publicador;
    }
}
