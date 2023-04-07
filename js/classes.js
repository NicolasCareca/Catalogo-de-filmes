class Ator {
    constructor(id, nome) {
        this.nome = nome;
        this.id = id;
    }
}

class Diretor {
    constructor(id, nome) {
        this.nome = nome;
        this.id = id;
    }
}

class Filme {
    constructor(id, titulo, ano, genero, duracao, cartaz, sinopse, direcao, elenco, classificacao, avaliacao,) {
        this.id = id;
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.sinopse = sinopse;
        this.cartaz = cartaz;
        this.direcao = direcao;
        this.elenco = elenco;
        this.classificacao = classificacao;
        this.avaliacao = avaliacao;
        this.btnDetalhes = null;
    }

    getCard = async () => {
        const card = document.createElement("div");
        card.setAttribute("class", "card , card");

        const imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class", "card-img-topz");
        imgCartaz.setAttribute("src", this.cartaz);

        const cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body , card-body");

        const hCardTitle = document.createElement("h5");
        hCardTitle.setAttribute("class", "card-title , card-title");

        const divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("style", "display:flex; justify-content:space-around;");

        const divAnoProducao = document.createElement("div");
        divAnoProducao.setAttribute("class", "ano");
        divAnoProducao.setAttribute("style", "flex-grow:1;");

        hCardTitle.appendChild(document.createTextNode(this.titulo));
        divAnoProducao.appendChild(document.createTextNode(this.ano));
        divDetalhes.appendChild(divAnoProducao);
        card.appendChild(imgCartaz);
        card.appendChild(cardBody);
        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divDetalhes);

        this.setBtnDetalhes();
        cardBody.appendChild(this.getBtnDetalhes());

        return card;

    }
    setBtnDetalhes = () => {
        this.btnDetalhes = document.createElement('button');
        this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
        this.btnDetalhes.setAttribute("id", this.id);
        this.btnDetalhes.setAttribute("class", "btn btn-primary");
    }

    getBtnDetalhes = () => {
        return this.btnDetalhes;
    }

    getDetalhesFilme = () => {

        const detalhesFilme = document.createElement("div");
        detalhesFilme.setAttribute("class", "row g-0");

        const divimgdetalhes = document.createElement("div");
        divimgdetalhes.setAttribute("class", "col-md-4");

        const imgDetalhes = document.createElement("img");
        imgDetalhes.setAttribute("class", "img-fluid rounded-start");
        imgDetalhes.setAttribute("src", this.cartaz);

        const divbodydetalhes = document.createElement("div");
        divbodydetalhes.setAttribute("class", "col-md-8");

        const bodydetalhes = document.createElement("div");
        bodydetalhes.setAttribute("class", "card-body");

        const btnfechar = document.createElement("button");
        btnfechar.setAttribute("class", "btn-close");
        btnfechar.setAttribute("id", "btn-fechar");

        const btnsalvar = document.createElement("button");
        btnsalvar.textContent = "favoritar";
        btnsalvar.setAttribute("id", "btn-salvar"); 

        const desfavoritar = document.createElement("button");
        desfavoritar.textContent = "desfavoritar";
        desfavoritar.setAttribute("id", "desfavoritar");

        const titledetalhes = document.createElement("h5");
        titledetalhes.setAttribute("class", "card-title");
        titledetalhes.appendChild(document.createTextNode(this.titulo));

        const sinopsedetalhes = document.createElement("p");
        sinopsedetalhes.setAttribute("class", "card-text");
        sinopsedetalhes.appendChild(document.createTextNode(this.sinopse));

        const generodetalhes = document.createElement("p");
        generodetalhes.setAttribute("class", "card-text");
        generodetalhes.appendChild(document.createTextNode(this.genero));

        const classificacaodetalhes = document.createElement("p");
        classificacaodetalhes.setAttribute("class", "card-text");
        classificacaodetalhes.appendChild(document.createTextNode(this.classificacao));

        const elencodetalhes = document.createElement("p");
        elencodetalhes.setAttribute("class", "card-text");
        elencodetalhes.appendChild(document.createTextNode(this.elenco));

        const direcaodetalhes = document.createElement("p");
        direcaodetalhes.setAttribute("class", "card-text");
        direcaodetalhes.appendChild(document.createTextNode(this.direcao));

        const anodetalhes = document.createElement("p");
        anodetalhes.setAttribute("class", "card-text");
        anodetalhes.appendChild(document.createTextNode(this.ano));

        const curacaodetalhes = document.createElement("p");
        curacaodetalhes.setAttribute("class", "card-text");
        curacaodetalhes.appendChild(document.createTextNode(this.duracao));

        const avaliacaodetalhes = document.createElement("p");
        avaliacaodetalhes.setAttribute("class", "card-text");
        avaliacaodetalhes.appendChild(document.createTextNode(this.avaliacao));

        divimgdetalhes.appendChild(imgDetalhes);
        detalhesFilme.appendChild(divimgdetalhes);
        divbodydetalhes.appendChild(bodydetalhes);
        detalhesFilme.appendChild(divbodydetalhes);
        bodydetalhes.appendChild(btnfechar);
        bodydetalhes.appendChild(titledetalhes);
        bodydetalhes.appendChild(sinopsedetalhes);
        bodydetalhes.appendChild(generodetalhes);
        bodydetalhes.appendChild(classificacaodetalhes);
        bodydetalhes.appendChild(elencodetalhes);
        bodydetalhes.appendChild(direcaodetalhes);
        bodydetalhes.appendChild(anodetalhes);
        bodydetalhes.appendChild(curacaodetalhes);
        bodydetalhes.appendChild(avaliacaodetalhes);
        bodydetalhes.appendChild(btnsalvar);
        bodydetalhes.appendChild(desfavoritar);


        return detalhesFilme;
    }

}