import { topBar } from "./components/topbar.js"
import { hero } from "./components/hero.js"
import { productGrid } from "./components/productGrid.js"
import { homeInfo } from "./components/homeInfo.js"
import { articoli } from "./components/articoli.js"
import { contatti } from "./components/contatti.js"

const renderPage = {

    renderHome: function () {
        renderComponents.renderTopbar();
        let containerPagina = document.getElementById("createDivPageContentContainer");
        if (containerPagina) containerPagina.innerHTML = '';
        hero.render();
        homeInfo.renderInfo();
        contatti.render();
    },

    renderShop: function () {
        renderComponents.renderTopbar();
        let containerPagina = document.getElementById("createDivPageContentContainer");
        if (containerPagina) containerPagina.innerHTML = '';
        productGrid.renderShop();
    },

    renderArticoli: function () {
        renderComponents.renderTopbar();
        let containerPagina = document.getElementById("createDivPageContentContainer");
        if (containerPagina) containerPagina.innerHTML = '';
        articoli.renderArticoli();
    }

}

export const utils = {
    removeByClass: function (classDaRimuovere) {

        while (document.getElementsByClassName(classDaRimuovere).length > 0) {
            document.getElementsByClassName(classDaRimuovere)[0].remove();
        }

    },

    removeById: function (idDaRimuovere) {
        let el = document.getElementById(idDaRimuovere);
        if (el) el.remove();
    },

    createDivPageContentContainer: function () {
        if (document.getElementById("createDivPageContentContainer") == null) {
            let pageContent = document.createElement("div");
            pageContent.setAttribute("class", "createDivPageContentContainer");
            pageContent.id = "createDivPageContentContainer";
            document.getElementById("pageContentMain").appendChild(pageContent);
        }
    }
}

export const navigator = {
    routeToHome: function () {
        window.location.hash = "#/";
    },

    routeToShop: function () {
        window.location.hash = "#/shop";
    },

    routeToArticoli: function () {
        window.location.hash = "#/articoli";
    },

    gestisciRotta: function () {
        let rottaCorrente = window.location.hash.replace("#", "") || "/";

        utils.removeById("createDivPageContentContainer");
        utils.createDivPageContentContainer();

        if (rottaCorrente === "/" || rottaCorrente === "#") {
            renderPage.renderHome();
        } else if (rottaCorrente === "/shop") {
            renderPage.renderShop();
        } else if (rottaCorrente === "/articoli") {
            renderPage.renderArticoli();
        } else {
            renderPage.renderHome();
        }
    }
}

const renderComponents = {
    renderTopbar: function () {
        topBar.renderTutto();
    }
}


window.addEventListener("hashchange", () => {
    navigator.gestisciRotta();
});


window.addEventListener("DOMContentLoaded", () => {
    navigator.gestisciRotta();
});

window.renderPage = renderPage;
window.navigatorApp = navigator;
