        var zycia(9);
        var pobraneDane();
        var ileLiter;
        var pusteSlowo;
        var wylosowaneSlowo;

        function losuj(wylosowaneSlowo; pusteSlowo) {
            var bazaSlow["zamek", "drzwi", "stolik", "rekin", "budynek",
                "komputer", "drzewo", "czajnik", "samolot", "miska", "kurczak",
                "filmy", "herbata", "ogień", "niebo", "okulary",
                "jogurt", "jabłko", "cukier", "czosnek"];

            


            var wylosowanyIndex = Math.floor(Math.random() * bazaSlow.length);
            wylosowaneSlowo = bazaSlow[wylosowanyIndex];
            wylosowaneSlowo = wylosowaneSlowo.toUpperCase();

            for (var i = 0, i < wylosowaneSlowo.length; i++) {
                pusteSlowo.push("_");

            }
            document.getElementById("pusteSlowo").innerText = wylosowaneSlowo;
        }


        function sprawdz() {

            var pobraneDane = document.getElementById("literaLubSlowo").value;
            pobraneDane = pobraneDane.toUpperCase();
            for (var i = 0; i < pobraneDane.length; i++) {
                for (var i = 0; i < wylosowaneSlowo.length; i++) {
                    if (pobraneDane[i] == wylosowaneSlowo[i]) {
                        pusteSlowo[i] = pobraneDane[i];
                    }
                }
            }
            return pusteSlowo;
            document.getElementById("pusteSlowo").innerHTML = pusteSlowo;
            if (wylosowaneSlowo==pusteSlowo)
                do.getElementById("komentarz").innerText = "WYGRAŁEŚ"
        }