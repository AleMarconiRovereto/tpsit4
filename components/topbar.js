
import { navigator } from "../script.js";

export const topBar = {
    datiTopbar: {
        nomeLogo: "BOTANICA ALE"
    },

    vociMenu: [
        { nome: "Home", target: () => { navigator.routeToHome() } },
        { nome: "Shop", target: () => { navigator.routeToShop() } },
        { nome: "Articoli", target: () => { navigator.routeToArticoli() } },
    ],

    renderLogo: function () {
        let logo = document.createElement("div");
        logo.className = "logoTopbar";
        logo.innerText = this.datiTopbar.nomeLogo;
        document.getElementById("topbar").appendChild(logo);
    },

    renderMenuTenda: function () {
        if (document.getElementById("menuTendaContainer")) return;

        let menuTendaContainer = document.createElement("div");
        menuTendaContainer.id = "menuTendaContainer";
        menuTendaContainer.className = "menuTendaContainer";

        this.vociMenu.forEach(voce => {
            let menuOption = document.createElement("div");
            menuOption.className = "menuOptionTenda";
            menuOption.innerText = voce.nome;
            menuOption.onclick = () => voce.target();
            menuTendaContainer.appendChild(menuOption);
        });

        document.getElementById("menuOptionPiccolo").appendChild(menuTendaContainer);
    },

    renderMenuPiccolo: function () {
        if (document.getElementById("menuOptionPiccolo")) return;

        let menuOptionPiccolo = document.createElement("div");
        menuOptionPiccolo.id = "menuOptionPiccolo";
        menuOptionPiccolo.className = "menuOptionPiccolo";
        menuOptionPiccolo.innerText = "MENU";

        menuOptionPiccolo.onmouseenter = () => this.renderMenuTenda();
        menuOptionPiccolo.onmouseleave = () => {
            let container = document.getElementById("menuTendaContainer");
            if (container) container.remove();
        };

        document.getElementById("topbar").appendChild(menuOptionPiccolo);
    },

    renderMenuGrande: function () {
        if (document.getElementById("menuOptionGrande")) return;

        let menuOptionGrande = document.createElement("div");
        menuOptionGrande.id = "menuOptionGrande";
        menuOptionGrande.className = "menuOptionGrande";

        this.vociMenu.forEach(voce => {
            let menuOption = document.createElement("div");
            menuOption.className = "menuOption";
            menuOption.innerText = voce.nome;
            menuOption.onclick = () => voce.target();
            menuOptionGrande.appendChild(menuOption);
        });

        document.getElementById("topbar").appendChild(menuOptionGrande);
    },

    renderTutto: function () {
        let topbar = document.getElementById("topbar");
        topbar.innerHTML = "";
        this.renderLogo();
        this.renderMenuGrande();
        this.renderMenuPiccolo();
    }
}
