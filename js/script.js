let order = [];
let clickedOrder = [];
let score = 0;

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


let checkOrder = () =>{
    for (let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score} \n Você acertou ! Iniciando proximo nivel`)
        nextLevel();
    }

}

let createColorElement = (color) =>{
         if(color == 0 ) { return green}
    else if (color == 1 ){ return red}
    else if (color == 2 ){ return yellow}
    else if (color == 3 ){ return blue}
}

let nextLevel = () => {
    score++;
    suffleOrder();
}

let gameOver = () => {
    alert(`Seu score foi de ${score}! \n Voce perdeu o jogo! `)
    order = [];
    clickedOrder = [];
    
  
}

let ligthColor = (element, number) =>{
        number = number * 500;
        setTimeout(() => {
            element.classList.add('selected')
        },number - 250);
        setTimeout(() => {
            element.classList.remove('selected');
        },number-250)
    }


let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250)

   

}

//ordem aleatoria de cores
let suffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        ligthColor(elementColor, Number(i) + 1);
    }
}

let playGame = () => {
    alert('Iniando novo jogo')
    score = 0;
    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () =>  click(1)
yellow.onclick = () =>  click(2)
blue.onclick = () =>  click(3)

const play = () => playGame();