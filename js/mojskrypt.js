var bazaSlow["zamek", "drzwi", "stolik", "rekin", "budynek",
    "komputer", "drzewo", "czajnik", "samolot", "miska", "kurczak",
    "filmy", "herbata", "ogień", "niebo", "okulary",
    "jogurt", "jabłko", "cukier", "czosnek"];
var ileLiter;
var wylosowaneSlowo;
var pusteSlowo;
var zycia(9);
var pobraneDane();

function losuj() {
    var wylosowanyIndex = Math.floor(Math.random() * bazaSlow.length);
    wylosowaneSlowo = bazaSlow[wylosowanyIndex];
    wylosowaneSlowo = wylosowaneSlowo.toUpperCase();

    for (var i = 0, i < wylosowaneSlowo.length; i++) {
        pusteSlowo.push("_");

    }
    document.getElementById("pusteSlowo").innerText = wylosowaneSlowo;
}


function sprawdz() {

}

var odkryjLitery = function (ukryteSlowo, wylosowaneSlowo, litera) {
    for (var i = 0; i < wylosowaneSlowo.length; i++) {
        if (litera == wylosowaneSlowo[i]) {
            ukryteSlowo[i] = litera;
        }
    }

    return ukryteSlowo;
}



var pobraneDane = document.getElementById("literaLubSlowo").value;


for (var i = 0; ileLiter > i; i++) {
    pusteSlowo[i] = wylosowaneSlowo[i];
    document.getElementById("pusteSlowo").innerHTML = pusteSlowo;
}



do {
    var litera = prompt("Podaj literę lub słowo");
    litera = litera.toUpperCase();

    if (litera === wylosowaneSlowo) {
        document.getElementById("wisielec").innerText = wylosowaneSlowo;
        break;
    }

    if (wylosowaneSlowo.indexOf(litera) < 0) {
        alert("No nie bardzo :P");
        continue;
    }

    ukryteSlowo = odkryjLitery(ukryteSlowo, wylosowaneSlowo, litera);
    document.getElementById("wisielec").innerText = ukryteSlowo.join(" ");

} while (ukryteSlowo.join("") != wylosowaneSlowo);

alert("Super duper chruper - wygrałeś!!!");
