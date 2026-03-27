import { topBar } from "./components/topbar.js"

const renderPage = {

    renderHome: function () {
        renderComponents.renderTopbar();
       
    },

    renderShop: function () {

        //da fare
    },

    renderArticoli: function () {

        //da fare
    }



}

export const utils = {
    removeByClass: function (classDaRimuovere) {

       while (document.getElementsByClassName(classDaRimuovere).length > 0) {
            document.getElementsByClassName(classDaRimuovere)[0].remove();
       }

    },

    removeById: function (idDaRimuovere) {
        document.getElementById(idDaRimuovere).remove();
    },

    createDivPageContentContainer: function(){
        if(document.getElementById("createDivPageContentContainer") == null){
            let pageContent = document.createElement("div");
            pageContent.setAttribute("class", "createDivPageContentContainer");
            pageContent.id="createDivPageContentContainer";
            document.getElementById("pageContentMain").appendChild(pageContent);
        }
    }
}

export const navigator = {
    routeToHome: function(){
        history.pushState(null, "", "/");
        utils.removeById("createDivPageContentContainer");
        utils.createDivPageContentContainer();
        renderPage.renderHome();
    },

    routeToShop:function(){
        history.pushState(null, "", "/shop");
        utils.removeById("createDivPageContentContainer");
        utils.createDivPageContentContainer();
        renderPage.renderShop();
    },
    routeToArticoli:function(){
        history.pushState(null, "", "/articoli");
        utils.removeById("createDivPageContentContainer");
        utils.createDivPageContentContainer();
        renderPage.renderArticoli();
    },
}


const renderComponents = {

    renderTopbar: function () {
        if(document.getElementById("menuOptionGrande") == null && document.getElementById("menuOptionGrande") == null){
            topBar.renderMenuPiccolo();
            topBar.renderMenuGrande();
        }
        
    }
    
}



window.renderPage = renderPage;

// questo è un sito sul giardinaggio con articoli e prodotti in vendita

