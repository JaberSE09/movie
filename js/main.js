//These are my dependencies that enable my code to run
import '../style.css'
import StateManager from './state-manager.js'
import Form from "./form-component"

/*
Goal:
1. Create a new instance of the state manager
2. Create a new instance of the comment list
    * the comment list needs the data from the state manager
      so that it knows how to draw the comments.
*/

const stateManager = new StateManager();
const form = new Form(stateManager)

document.getElementById("favorites").addEventListener("click" , this.stateManager.seeFavorites())