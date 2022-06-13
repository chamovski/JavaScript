function milToKm() {

    let mil = parseInt(document.getElementById("mil").value);

    document.getElementById("mils").innerHTML = "Milles = " + mil;
    document.getElementById("kms").innerHTML = "Kilometers = " + (mil * 1.60934);

}

