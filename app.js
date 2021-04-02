// https://pipl.ir/v1/getPerson

// function getNewPerson() {}

let ajax = new XMLHttpRequest();
ajax.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
};

ajax.open("GET", "https://randomuser.me/api/", true);
ajax.send();
