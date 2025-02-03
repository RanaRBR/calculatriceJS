
let monChamp = document.getElementById('champ');

function ajout(input) {
    if (monChamp.value === '0') {
        monChamp.value = input;
    } else {
        monChamp.value += input;
    }
}

function suppression() {
    monChamp.value = '0'
}


function suppressionDernier() {
    if (monChamp.value.length > 1) {
        monChamp.value = monChamp.value.slice(0, -1);
    } else {
        monChamp.value = '0';
    }
}



