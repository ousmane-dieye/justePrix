let input = document.getElementById('prix');
let boxx = document.querySelector('.col');
let error = document.querySelector('.text-danger');
let formulaire = document.getElementById('formulaire');
let exact = document.querySelector('.fini');
let plus = document.querySelector('.plus');
let moins = document.querySelector('.moins')
let btn = document.querySelector("button")
let max = 1000;
let nombreCoup = 0;
let nombreEntrer;
let rejouer = document.querySelector('.rejouer')
// generer nombre aleatoire

let nombreAleatoire = Math.floor( Math.random() * max);
console.log(nombreAleatoire)




// function verify
function verify(nombre){
    let instruction = document.createElement('div');
    if (Number(nombre) < nombreAleatoire){
        instruction.textContent = `#${nombreCoup} (${nombre} C'est plus)`;
        instruction.className="instruction plus";
    }
    else if (Number(nombre) > nombreAleatoire){
        instruction.textContent = `#${nombreCoup} (${nombre} C'est moins)`;
        instruction.className="instruction moins";
    }
    else{
        instruction.textContent = `#${nombreCoup} (${nombre} Felicitation)`;
        instruction.className="instruction fini";
        input.disabled = true;
        btn.disabled = true;
        rejouer.style.display = "flex";
    }
    
    document.querySelector('#instructions').prepend(instruction);
    }
// verifier si l'utilisateur saisit bien un nombre

input.addEventListener('keyup', () => {
    let valeur = Number(input.value);

    if (isNaN(valeur)) {
        error.style.display = "flex"; 
        btn.disabled = true;
    } else {
        error.style.display = "none"; 
        btn.disabled = false;
    }

})

formulaire.addEventListener('submit', e => {
    let valeur = input.value;
    e.preventDefault();
    if (isNaN(Number(valeur)) || valeur.trim() ==="" ){
        
        {console.log('vide');
        error.style.display = "flex"; 
        input.style.border = "2px solid red";}
    }
    else{
        input.style.border = "0px solid";
        error.style.display = "none"; 
        nombreCoup++;
        nombreEntrer = valeur;
        input.value = "";
        verify(nombreEntrer);
        
    }
})

rejouer.addEventListener('click', () => {
    location.reload();
})