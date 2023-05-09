window.addEventListener("load", function () {
  let schaltflaeche1 = document.getElementById("btn1");
  let randomNumbers;
  schaltflaeche1.addEventListener("click", function () {
    randomNumbers = [];
    for (let i = 0; i < 10; i++) {
      randomNumbers.push(Math.floor(Math.random() * 10));
    }
    for (let o = 0; o < 10; o++) {
      console.log(randomNumbers[o]);
      let string = "box" + o;
      console.log(string);
      document.getElementById(string).innerHTML = randomNumbers[o];

    }
  });

  let schaltflaeche2 = this.document.getElementById("btn2");
  schaltflaeche2.addEventListener("click", function () {
    if(randomNumbers != null)
    {
      randomNumbers.sort();
    }
    for (let o = 0; o < 10; o++) {
      let string = "box" + o;
      console.log(randomNumbers[o]);
      document.getElementById(string).innerHTML = randomNumbers[o];

    }
  })
})