export const homeInfo = {
    datiSezione: {
        titolo: "Passione per il Verde",
        testoDescritivo: "Da oltre vent'anni ci prendiamo cura delle vostre piante. Nel nostro vivaio troverete un'ampia scelta di fiori, piante ornamentali e ortaggi."
    },

    renderInfo: function() {
        let sezione = document.createElement("section");
        sezione.className = "sezioneInfoHome";
        
        let titolo = document.createElement("h2");
        titolo.innerText = this.datiSezione.titolo;
        
        let desc = document.createElement("p");
        desc.innerText = this.datiSezione.testoDescritivo;
        
        sezione.appendChild(titolo);
        sezione.appendChild(desc);
        
        document.getElementById("createDivPageContentContainer").appendChild(sezione);
    }
}
