// Scripting

// Data source
const url = "https://assets.codepen.io/16425/Spring-2025-Roster.json";

// Get data
fetch(url)
  .then( response  => response.json())
  .then( data  => {
    
    // check-check: is the data good?
    console.log(data);
    console.log(data.Name);
    console.log(data.Image);

    // get container for data
    const roster = document.querySelector(".main");

    // loop through data
    data.forEach( student => {
      
      // template
      const template = `
     <figure class="card" style="
          border: 10px solid rgba(255, 255, 255);
          background-color: white;
          border-radius: 30px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);">
          
          
        <img
          src="${student.imageUrl}" 
          style="
          border-radius: 30px;"
        />
        <figcaption >
          <h2 style= "color: ${student.favoriteColor}">
          ${student.status}
          ${student.name}
          </h2>
          <p style="line-height: 50px;
          font-family: 'Clash Display', sans-serif;"> 🎵 ${student.favoriteSong} 
          </br> - ${student.funFact}
          </br> <em>${student.motto}</em> 
          </br> - <b>${student.favoriteSimpsonsCharacter} </b>
          </br> - My favorite band/artist: ${student.favoriteBand}
          </br> - My comfort food(s): ${student.favoriteFood}
          </br> - My superpower: ${student.talent}
          </p>
          <p style= "color: ${student.favoriteColor}>
          ${student.favoriteColor}</p>

        </figcaption>
      </figure>
       `;

      // insert EACH `student` record into container
      roster.insertAdjacentHTML("afterbegin", template);
    });
  });
