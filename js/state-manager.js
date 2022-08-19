import { addNote, addFavorite } from "./connection";
import { apiKey } from "./key";

/*

The job of the state manager is to: 
    1. + organize the data.
    2. update the data when a component notifies the state manager.
    3. let other components know when the data has changed.


Each comment has:
    1. Name of the person
    2. Email
    3. Comment
    4. Timestamp
*/

export default class StateManager {
  favoriteArray=[]
  noteArray= []
  constructor() {

  }
  //This function will  data to db
  submitNote() {
    let noteElement = document.getElementById("note").value;
    let note = { note: noteElement };
    this.noteArray.push(note)
    addNote(note);
    document.getElementById("note").value=""  
  }

  
  submitFavorite(data) {
    let Title = data.Title
    let Plot = data.Plot
    let Year = data.Year
    let src = data.Poster
    let note = data.note
    let favorite = { Title: Title, plot: Plot, year: Year, src: src,note: note , api: apiKey };
    this.favoriteArray.push(favorite);
    addFavorite(favorite)
   let movie=  document.getElementsByClassName("movie-details")

  }
}

