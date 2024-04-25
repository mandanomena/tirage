var numerosTires = [];

function tirageAuSort() {
    var nombreAleatoire;

    // Tirer un nombre jusqu'à obtenir un nombre non tiré
    do {
        nombreAleatoire = Math.floor(Math.random() * 400) + 1;
    } while (numerosTires.includes(nombreAleatoire));

    // Ajouter le nombre tiré à la liste des numéros déjà tirés
    numerosTires.push(nombreAleatoire);

    // Afficher le résultat
    document.getElementById("resultat").textContent = "Laharana voasarika: " + nombreAleatoire;

    // Construire la liste des numéros tirés
    var listeNumerosTires = document.getElementById("liste-numeros-tires");
    var listeHTML = "<ul>";
    for (var i = 0; i < numerosTires.length; i++) {
        listeHTML += "<li>" + numerosTires[i] + "</li>";
    }
    listeHTML += "</ul>";

    // Afficher la liste des numéros tirés
    listeNumerosTires.innerHTML = listeHTML;

}

