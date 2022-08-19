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
  constructor() {}
  //This function will  data to db
  submitNote() {
    let noteElement = document.getElementById("note").value;
    let note = { note: noteElement };
    addNote(note);
  }


  seeFavorites(){
    const parent = document.querySelector(".movie-details");
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }


    if(this.favoriteArray== null){
      const movieTemplate = document.createElement("h1")

      movieTemplate.innerHTML="No movies"
      parent.appendChild(movieTemplate)
    }
    else{
    //Create var/String holding HTML
    //h2 is the thing holding the title  that is coming back go into data(template literal and give me  the title)
    //p tag  is holding the year
    //img  tag gives you the poster for the movie displayed
    const movieTemplate = document.createElement("div")
    
    movieTemplate.innerHTML=
    this.favoriteArray.map(data =>`
          
    <h2>${data.Title}</h2>
    <p>${data.Year}</p>
    <img src="${data.Poster}" alt= "poster image"/>
    <p>${data.Plot}</p>
    
    `);     
    document
    .querySelector(".movie-details")
    .appendChild( movieTemplate);
  }
}
  




  submitFavorite(data) {
    let title = data.Title
    let plot = data.Plot
    let year = data.Year
    let src = data.Poster
    let favorite = { title: title, plot: plot, year: year,src: src , api: apiKey };
    addFavorite(favorite)
    this.favoriteArray.push(favorite)
    console.log(this.favoriteArray)
    
  }
}

