var zycia;
var wylosowaneSlowo;
var pusteSlowo = [""];
var pomocnicze = "";

function losuj() {

            alert('NOWA GRA!');
            pusteSlowo = [""];
            zycia = 9;

            var bazaSlow = ["ziomek", "oko", "mama"
                 ,"zamek", "drzwi", "stolik", "rekin", "budynek",
                 "komputer", "drzewo", "czajnik", "samolot", "miska", "kurczak",
                 "filmy", "herbata", "ogień", "niebo", "okulary",
                  "jogurt", "jabłko", "cukier", "czosnek"
            ];



            var wylosowanyIndex = Math.floor(Math.random() * bazaSlow.length);
            wylosowaneSlowo = bazaSlow[wylosowanyIndex];
            wylosowaneSlowo = wylosowaneSlowo.toUpperCase();

            for (var i = 0; wylosowaneSlowo.length > i; i++) {
                pusteSlowo[i] = "-";

            }
            document.getElementById("paragraf2").innerText = "słowo składa się z " + pusteSlowo.length + " liter";
            document.getElementById("pusteSlowoText").innerText = pusteSlowo.join("");


        }


        function sprawdz() {

            var pobraneDane;
            var traf = false;
            pobraneDane = document.getElementById("LitLubSlo").value;
            pobraneDane = pobraneDane.toUpperCase();

            if (pobraneDane.length > 1) {
                if (pobraneDane == wylosowaneSlowo) {
                        document.getElementById("paragraf").innerText = "BRAWO ZGADŁEŚ";
                    document.getElementById("pusteSlowoText").innerText = wylosowaneSlowo;

                    traf = true;
                }
            }
            if (pobraneDane.length = 1) {
                for (i = 0; wylosowaneSlowo.length > i; i++) {
                    if (wylosowaneSlowo[i] == pobraneDane) {
                        pusteSlowo[i] = pobraneDane;
                        document.getElementById("paragraf").innerText = "Trafiłeś " + pobraneDane + " pasuje";
                        document.getElementById("pusteSlowoText").innerText = pusteSlowo.join("");

                        traf = true;
                    } else
                        pusteSlowo[i] = pusteSlowo[i];

                }
                if (pusteSlowo.join("") == wylosowaneSlowo)
                        document.getElementById("paragraf").innerText = "BRAWO ZGADŁEŚ";
            }
            if (traf == false) {
                zycia--;
                document.getElementById("paragraf").innerText = "NIE trafiłeś " +
                    pobraneDane + "  nie znajduje się w szukanym słowie pozostało ci " + zycia + " podejść";


            }



        }

