
import { utils, navigator } from "../script.js";

  export const topBar = {


   
    vociMenu:[
        {nome: "Home", target: ()=>{navigator.routeToHome()}},
        {nome: "Shop", target: ()=>{navigator.routeToShop()}},
        {nome: "Articoli", target: ()=>{navigator.routeToArticoli()}},
    ],

    renderMenuTenda: function(){
    
        for(let i = 0; i < this.vociMenu.length; i++){
            let menuOption = document.createElement("div");
            menuOption.setAttribute("class", "menuOptionTenda");
            document.getElementById("menuOptionPiccolo").appendChild(menuOption);
            menuOption.innerText = this.vociMenu[i].nome;
            menuOption.onclick = () =>{
                this.vociMenu[i].target();
            }
        }
    },

    renderMenuPiccolo: function(){
        let menuOptionPiccolo = document.createElement("div");    
        menuOptionPiccolo.id = "menuOptionPiccolo";
        document.getElementById("topbar").appendChild(menuOptionPiccolo);
        menuOptionPiccolo.innerText = "Menu"
        menuOptionPiccolo.setAttribute("class", "menuOptionPiccolo");
        menuOptionPiccolo.onmouseenter = ()=>{this.renderMenuTenda()};
        menuOptionPiccolo.onmouseleave = ()=>{utils.removeByClass('menuOptionTenda')};
        
    },

    renderMenuGrande: function(){
        let menuOptionGrande = document.createElement("div");
        menuOptionGrande.id = "menuOptionGrande";
        document.getElementById("topbar").appendChild(menuOptionGrande);
        for(let i = 0; i < this.vociMenu.length; i++){
            let menuOption = document.createElement("div");
            menuOption.setAttribute("class", "menuOption");
            document.getElementById("menuOptionGrande").appendChild(menuOption);
            menuOption.innerText = this.vociMenu[i].nome;
            menuOption.onclick = () =>{
                this.vociMenu[i].target();
            }
        }
        menuOptionGrande.setAttribute("class", "menuOptionGrande");
    }
        
    
    


}


