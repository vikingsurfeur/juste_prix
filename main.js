// Etape 1 - Sélectionner nos éléments

let input       = document.querySelector('#prix'),
    error       = document.querySelector('small'),
    formulaire  = document.querySelector('#formulaire'),
    coups       = 0,
    nombreUtilisateur;    

// Etape 2 - Cacher l'erreur

error.style.display = 'none';

// Etape 3 - Générer un nombre aléatoire

let nombreAleatoire = Math.floor(Math.random() * 1001);

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre

input.addEventListener('keyup', () => {
    if (isNaN(input.value)) {
        error.style.display = 'inline';
    } else {
        error.style.display = 'none';
    }
});

// Etape 5 - Agir à l'envoi du formulaire

formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isNaN(input.value) || input.value == "") {
        input.style.borderColor = "red";
    } else {
        coups++;
        nombreUtilisateur       = input.value;
        input.value             = "";
        verifier(nombreUtilisateur);
        input.style.borderColor = "silver";
    }
});

// Etape 6 - Créer la fonction vérifier

function verifier(nombre) {
    let instruction = document.createElement('div');
    if(nombre < nombreAleatoire) {
        instruction.textContent = "#" + coups + " (" + nombre + ") C'est plus !";
        instruction.className = 'instruction plus';
    }
    else if(nombre > nombreAleatoire){
        instruction.textContent = "#" + coups + " (" + nombre + ") C'est moins !";
        instruction.className = 'instruction moins';
    } else {
        instruction.textContent = "#" + coups + " (" + nombre + ") Félicitations, vous avez trouvé le juste prix !";
        instruction.className = 'instruction fini';
        input.disabled = true;
    }
    document.querySelector('#instructions').prepend(instruction);
    
}