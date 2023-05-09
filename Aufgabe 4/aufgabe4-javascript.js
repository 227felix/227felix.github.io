let counter = 0;

let speichern = document.getElementById("btn1");
speichern.addEventListener("click", function () {

  counter += 1;
  let vorname = document.getElementById("inpt1").value;
  let nachname = document.getElementById("inpt2").value;

  let person = { Vorname: vorname, Nachname: nachname }

  let personJSON = JSON.stringify(person);

  sessionStorage.setItem(counter, personJSON);


})

let teilnehmer = document.getElementById("btn2");
teilnehmer.addEventListener("click", function () {

    // lösche alle Zeilen in der Tabelle außer der ersten Zeile
    let tabelle = document.getElementById('tabelle1');
    let anzahlZeilen = tabelle.rows.length;
    for (let i = anzahlZeilen - 1; i > 0; i--) {
      tabelle.deleteRow(i);
    }

  for (let i = 0; i < counter; i++) {

    let personJSON = sessionStorage.getItem(i + 1);
    let person = JSON.parse(personJSON);

    let vorname = person.Vorname;
    let nachname = person.Nachname;

    let zeile = document.getElementById('tabelle1').insertRow(-1);
    let s1 = zeile.insertCell(0);
    let s2 = zeile.insertCell(1);
    let s3 = zeile.insertCell(2);

    s1.innerHTML = i + 1;
    s2.innerHTML = vorname;
    s3.innerHTML = nachname;


  }
})

let loeschen = document.getElementById("btn3");
loeschen.addEventListener("click", function() {
  for (let i = 1; i <= counter; i++) {
    sessionStorage.removeItem(i);
    
  }

      // lösche alle Zeilen in der Tabelle außer der ersten Zeile
      let tabelle = document.getElementById('tabelle1');
      let anzahlZeilen = tabelle.rows.length;
      for (let i = anzahlZeilen - 1; i > 0; i--) {
        tabelle.deleteRow(i);
      }

      counter = 0;
})





