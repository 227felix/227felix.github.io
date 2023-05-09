let schaltflaeche1 = document.getElementById("btn1");
schaltflaeche1.addEventListener("click", function () {

  let a = Number(prompt("Erste Zahl"));
  if (a === null || isNaN(a))
  {
    alert("Bitte eine natürliche Zahl eingeben")
  } else if (a){
    let b = Number(prompt("Zweite Zahl"));
    if(a === "")
    {
      alert("Bitte eine natürliche Zahl eingeben")
    } else if(b)
    {
      alert(gcd(a, b));
    }
    else {
      alert("Abgebrochen")
    }
    
  } else {
    alert("Abgebrochen")
  }
});

const gcd = function (a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
};
