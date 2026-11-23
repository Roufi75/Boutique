
// Liste des produits
const produits = [
    {
        nom: "Sac artisanal",
        prix: "5 000 F CFA",
        image: "images/sac.jpg",
        description: "Un joli sac réalisé à la main."
    },
    {
        nom: "Bouquet de fleurs",
        prix: "3 500 F CFA",
        image: "images/fleurs.jpg",
        description: "Des fleurs au crochet faites avec amour."
    },
    {
        nom: "Panier artisanal",
        prix: "4 000 F CFA",
        image: "images/panier.jpg",
        description: "Un panier décoratif fait à la main."
    }
];

// Récupérer la zone des produits
const liste = document.getElementById("liste-produits");

// Afficher les produits
produits.forEach(function(produit) {

    liste.innerHTML += `
        <div class="carte-produit">

            <img src="${produit.image}" alt="${produit.nom}">

            <h3>${produit.nom}</h3>

            <p>${produit.description}</p>

            <h4>${produit.prix}</h4>

            <a href="#contact" class="bouton-commande">
                Commander
            </a>

        </div>
    `;
});
