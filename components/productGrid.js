export const productGrid = {
    configuratore: {
        titoloPagina: "Catalogo Botanico"
    },

    listaProdotti: [
        { id: 1, nome: "Sansevieria Trifasciata", prezzo: "22.50€", imgUrl: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?auto=format&fit=crop&q=80&w=400" },
        { id: 2, nome: "Monstera Deliciosa", prezzo: "35.00€", imgUrl: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=400" },
        { id: 3, nome: "Ficus Lyrata", prezzo: "45.00€", imgUrl: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=400" },
        { id: 4, nome: "Pothos Golden", prezzo: "15.00€", imgUrl: "https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?auto=format&fit=crop&q=80&w=400" },
        { id: 5, nome: "Calathea Orbifolia", prezzo: "28.00€", imgUrl: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&q=80&w=400" },
        { id: 6, nome: "Aloe Vera", prezzo: "12.00€", imgUrl: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=400" },
        { id: 8, nome: "Zamioculcas", prezzo: "20.00€", imgUrl: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&q=80&w=400" }
    ],

    renderShop: function () {
        let gridContainer = document.createElement("div");
        gridContainer.className = "productGridContainer";
        gridContainer.id = "productGridContainer";

        let titoloSezione = document.createElement("h2");
        titoloSezione.innerText = this.configuratore.titoloPagina;
        gridContainer.appendChild(titoloSezione);

        let griglia = document.createElement("div");
        griglia.className = "productGrid";

        for (let i = 0; i < this.listaProdotti.length; i++) {
            let p = this.listaProdotti[i];

            let cardProdotto = document.createElement("div");
            cardProdotto.className = "productCard";

            let immagineP = document.createElement("img");
            immagineP.className = "productImage";
            immagineP.src = p.imgUrl;
            immagineP.alt = p.nome;


            let infoContainer = document.createElement("div");
            infoContainer.className = "productInfo";

            let nomeP = document.createElement("h3");
            nomeP.innerText = p.nome;

            let prezzoP = document.createElement("p");
            prezzoP.innerText = p.prezzo;
            prezzoP.className = "productPrice";

            infoContainer.appendChild(nomeP);
            infoContainer.appendChild(prezzoP);

            cardProdotto.appendChild(immagineP);
            cardProdotto.appendChild(infoContainer);

            griglia.appendChild(cardProdotto);
        }

        gridContainer.appendChild(griglia);
        document.getElementById("createDivPageContentContainer").appendChild(gridContainer);
    }
}
