export const contatti = {
    datiContatti: {
        titolo: "Dove Siamo e Orari",
        indirizzo: "Via del Verde 12, Rovereto (TN)",
        telefono: "+39 0464 123456",
        orari: [
            "Lun - Ven: 08:30 - 12:30 / 14:30 - 18:30",
            "Sabato: 08:30 - 18:30 (Orario Continuato)",
            "Domenica: Chiuso"
        ]
    },

    render: function () {
        let contattiContenitore = document.createElement("div");
        contattiContenitore.className = "sezioneContattiHome";

        let titolo = document.createElement("h2");
        titolo.innerText = this.datiContatti.titolo;

        let infoBox = document.createElement("div");
        infoBox.className = "infoBoxContatti";

        let pIndirizzo = document.createElement("p");
        pIndirizzo.innerHTML = "<strong>Indirizzo:</strong> " + this.datiContatti.indirizzo;

        let pTel = document.createElement("p");
        pTel.innerHTML = "<strong>Telefono:</strong> " + this.datiContatti.telefono;

        let h3Orari = document.createElement("h3");
        h3Orari.innerText = "Orari di Apertura:";

        let ulOrari = document.createElement("ul");
        ulOrari.className = "listaOrariContatti";

        this.datiContatti.orari.forEach(ora => {
            let li = document.createElement("li");
            li.innerText = ora;
            ulOrari.appendChild(li);
        });

        infoBox.appendChild(pIndirizzo);
        infoBox.appendChild(pTel);
        infoBox.appendChild(h3Orari);
        infoBox.appendChild(ulOrari);

        contattiContenitore.appendChild(titolo);
        contattiContenitore.appendChild(infoBox);
        document.getElementById("createDivPageContentContainer").appendChild(contattiContenitore);
    }
}
