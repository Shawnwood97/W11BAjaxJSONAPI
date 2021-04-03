// if statements in function changed to provide error if returned readyState and status are not correct.

function generatePerson() {
  personWrapper.innerHTML = `<div id="loading">Loading User!</div>`;
  let ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        object = JSON.parse(this.responseText);
        person = object.results[0];
        console.log(person);

        let personPhoto = person.picture.large;
        let personFirstName = person.name.first;
        let personLastName = person.name.last;
        let personTitle = person.name.title;

        // add simple innerHTML to the page whn button is clicked (below function)
        personWrapper.innerHTML = `<img id ="photo" src =${personPhoto} /> `;
        personWrapper.innerHTML += `<h3 id ="full_name">${personTitle}. ${personFirstName} ${personLastName}</h3> `;
      } else {
        personWrapper.innerHTML = `<div id="loading">Error, try again later</div>`;
      }
    }
  };
  ajax.open("GET", "https://randomuser.me/api/", true);
  // this is how I tested for an error - WORKED
  // ajax.open("GET", "https://thiswebsiteisfaketotest.error/api/", true);
  ajax.send();
}

let personWrapper = document.getElementById("person");

let genButton = document.getElementById("generate_person");
genButton.addEventListener("click", generatePerson);
