   
function wowow(){
     alert("WOWOWOWWWW!");
}
        var zycia;
        var pobraneDane;
        var ileLiter;
        var pusteSlowo;
        var wylosowaneSlowo;
        var bazaSlow;
        //wylosowaneSlowo; pusteSlowo, bazaSlow

        function losuj(wylosowaneSlowo, pusteSlowo, bazaSlow, wylosowanyIndex) {
            bazaSlow["zamek", "drzwi", "stolik", "rekin", "budynek"];

            alert('NOWA GRA!');


            var wylosowanyIndex = Math.floor(Math.random() * bazaSlow.length);
            wylosowaneSlowo = bazaSlow[wylosowanyIndex];
            wylosowaneSlowo = wylosowaneSlowo.toUpperCase();

            for (var i = 0;  wylosowaneSlowo.length>i; i++) {
                pusteSlowo.push("_");

            }
            document.getElementById("pusteSlowo").innerText = wylosowaneSlowo;
        }


        function sprawdz() {

            var a = document.forms['formularz'].elements['a'].value;

            var pobraneDane = document.getElementsByName("input").value;
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
            if (wylosowaneSlowo == pusteSlowo){
                do.getElementById("#komentarz").innerText = "WYGRAŁEŚ";
            }
        }
