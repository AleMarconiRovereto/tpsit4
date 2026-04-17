export const hero = {
    datiHero: {
        titolo: "Benvenuti da\nBotanica Ale",
        sottoTitolo: "La tua serra di fiducia. Vendita piante da interno, da esterno e tutto per il giardinaggio."
    },

    render: function() {
        let heroContenitore = document.createElement("div");
        heroContenitore.className = "heroContainer";
        
        let titoloHero = document.createElement("h1");
        titoloHero.innerText = this.datiHero.titolo;

        let sottotitoloHero = document.createElement("p");
        sottotitoloHero.innerText = this.datiHero.sottoTitolo;

        heroContenitore.appendChild(titoloHero);
        heroContenitore.appendChild(sottotitoloHero);

        let containerPagina = document.getElementById("createDivPageContentContainer");
        if (containerPagina) {
            containerPagina.appendChild(heroContenitore);
        }
    }
}
