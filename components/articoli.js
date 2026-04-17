import { utils } from "../script.js";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.";

export const articoli = {
    listaArticoli: [
        { id: 1, titolo: "Sistemi Idroponici Avanzati", anteprima: "Evoluzione delle colture fuori suolo", contenuto: lorem + "\n\n" + lorem },
        { id: 2, titolo: "Fotoperiodismo e Cicli Botanici", anteprima: "L'importanza della luce controllata", contenuto: lorem + "\n\n" + lorem },
        { id: 3, titolo: "Gestione del Microbioma del Suolo", anteprima: "Bilanciamento nutrienti e batteri", contenuto: lorem + "\n\n" + lorem }
    ],

    renderArticoli: function () {
        let listaContenitore = document.createElement("div");
        listaContenitore.className = "listaArticoliSemplice";

        this.listaArticoli.forEach(art => {
            let rigaArticolo = document.createElement("div");
            rigaArticolo.className = "rigaArticolo";
            rigaArticolo.onclick = () => this.apriOverlay(art);

            let titoloArt = document.createElement("h3");
            titoloArt.innerText = art.titolo;

            let previewText = document.createElement("span");
            previewText.innerText = " - " + art.anteprima;
            previewText.className = "articoloAnteprimaMeta";


            titoloArt.appendChild(previewText);
            rigaArticolo.appendChild(titoloArt);
            listaContenitore.appendChild(rigaArticolo);
        });

        document.getElementById("createDivPageContentContainer").appendChild(listaContenitore);
    },

    apriOverlay: function (art) {
        let overlay = document.createElement("div");
        overlay.className = "overlayArticolo";
        overlay.id = "overlayArticolo";

        let modal = document.createElement("div");
        modal.className = "modalArticolo";

        let close = document.createElement("span");
        close.className = "closeButton";
        close.innerHTML = "&times;";
        close.onclick = () => utils.removeById("overlayArticolo");

        let h2 = document.createElement("h2");
        h2.innerText = art.titolo;

        let sottotitolo = document.createElement("p");
        sottotitolo.className = "sottotitoloOverlay";
        sottotitolo.innerText = art.anteprima;

        let contentDiv = document.createElement("div");
        contentDiv.className = "articoloCorpoScroll";


        let p = document.createElement("p");
        p.innerText = art.contenuto;

        contentDiv.appendChild(p);
        modal.appendChild(close);
        modal.appendChild(h2);
        modal.appendChild(sottotitolo);
        modal.appendChild(contentDiv);
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
    }
}
