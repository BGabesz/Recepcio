class OltozoFoglalasok {
  constructor() {
    this.oltozoFoglalasTomb = [];
  }
  megjelenitKereso(tomb) {
    let txt = "";
    $(".keresettSzekreny").html(txt);
    txt +=
      "<table><tr><th>Szekrény szám</th><th>Ember</th><th>Dátum</th><th>Felodás</th></tr>";
    //for (let i = 0; i < tomb.length; i++) {
    let segedGomb = "";
    if (tomb.length > 0) {
      txt +=
        /* "<tr><td>" +
        tomb[tomb.length-1].oltozofog_id +
        "</td>" + */
        "<td>" +
        tomb[tomb.length - 1].szekreny_id +
        "</td>" +
        "<td>" +
        tomb[tomb.length - 1].ugyfel +
        "</td>" +
        "<td>" +
        tomb[tomb.length - 1].datum +
        "</td>";
      segedGomb =
        '<button data-id="' +
        tomb[tomb.length - 1].id +
        '" class="feloldasGomb">Feloldás</button>';
      txt += "<td>" + segedGomb + "</td>" + "</tr>";
      //}
      txt += "</table>";
    } else {
        txt = "Nincs találat";
      
      var e = new Error("Nincs találat");
      // e.message is 'Could not parse input'
      throw e;
    }
    $(".feloldasGomb").on("click", (event) => {
      console.log("keres");
    });
    /* $(".feloldasGomb").on("click", (event) => {
      let id = $(event.target).attr("data-id");
      tomb[id].urese=true;
    }); */
    
    $(".keresettSzekreny").html(txt);
  }
}
