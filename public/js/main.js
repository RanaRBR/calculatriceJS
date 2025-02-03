let monChamp = document.getElementById('champ')

function ajout(input) {
    if (monChamp.value === '0') {
        monChamp.value = input
    } else {
        monChamp.value += input
    }
}

function clearDisplay() {
    monChamp.value = '0'
}



















// let boutons = document.querySelectorAll("button");

// boutons.addventLitsener("click", function(){
//     boutons.style.transform 

// })