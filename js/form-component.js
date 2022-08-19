
import StateManager from "./state-manager";

const stateManager = new StateManager();

export default class Form {
  // what is a constructor?
  // brings the instance to life
  constructor() {
    
    const formTemplate = `
 
    <form>
      <!-- Name -->
      <div>
        <label for="name">Note (required)</label>
      </div>
      <div>
        <input
          required
          id="note"
          name="note"
          type="text"
          placeholder="note"
          maxlength="50"
          tabindex="1"
        />
      </div>
      </div>
      <input type="Submit" value="Submit" />
          </form>
          <input id="favorite" type="Submit" value="Add To Favorite" />


        `;

    document.querySelector(".note-container").innerHTML = formTemplate;
//appends to the DOM says go find the "form container"
    document
      .querySelector("form")
      .addEventListener("submit", this.addNote.bind(this));
  }


  addFavorites() {
    // goal of add comment is to let the state manager know
    // that a new comment has been added:
    // tell the state manager that we have
    // a new comment to add:
    stateManager.submitFavorite();
    

    // Your Job: how do you clear out your form!!
    
    //grab what user typed and set it to empty
  }


  addNote(ev) {
    // goal of add comment is to let the state manager know
    // that a new comment has been added:
    ev.preventDefault();
    // tell the state manager that we have
    // a new comment to add:
    stateManager.submitNote();

    // Your Job: how do you clear out your form!!
    
    //grab what user typed and set it to empty
  }
  
}
