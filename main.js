var textarea = document.querySelector("textarea");
var wynik = document.querySelector(".wynik");

textarea.addEventListener("keydown", function () {
    var wpisanyText = document.querySelector("textarea").value;
    var licz = (200 - (wpisanyText.length))
    wynik.textContent = "Znaki które Ci zostały: " + licz;
    if (licz == 200 || licz < 0) {
        alert("Wykożystałeś limit znaków");

    }

})
