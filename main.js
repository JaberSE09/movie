import "./style.css"



import Form from "./js/form-component"
import StateManager from "./js/state-manager"
const stateManager = new StateManager();
// const form = new Form(stateManager)
import Favorite from "./js/favorite-component"
const favorite = new Favorite();
document.getElementById("favorites").addEventListener("click" , () => {
    stateManager.seeFavorites()
})