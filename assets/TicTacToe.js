var winner = document.querySelector('.winner');
var trnDisp = document.querySelector('.turn');
var box = document.querySelectorAll('.box');
var rows = [
    document.querySelectorAll('.r1'),
    document.querySelectorAll('.r2'),
    document.querySelectorAll('.r3')
];
var cols = [
    document.querySelectorAll('.c1'),
    document.querySelectorAll('.c2'),
    document.querySelectorAll('.c3')
];
var turn = 'X';
var win = false;
var count = 0;

trnDisp.innerHTML = 'turn: X';

function reset(){
    turn = 'X';
    win = false;
    count = 0;
    for(let i = 0; i < box.length; i++){
        box[i].classList.remove('X');
        box[i].classList.remove('O');
    }
    trnDisp.innerHTML = 'turn: X';
    winner.innerHTML = '';
}

function winCheck(){
    for(j = 0; j < 3; j++){
        if((rows[j][0].classList.contains('X') && rows[j][1].classList.contains('X') && rows[j][2].classList.contains('X'))
        || (cols[j][0].classList.contains('X') && cols[j][1].classList.contains('X') && cols[j][2].classList.contains('X'))){
            winner.innerHTML = 'X wins';
            win = true;
        }
        else
        if((rows[j][0].classList.contains('O') && rows[j][1].classList.contains('O') && rows[j][2].classList.contains('O'))
        || (cols[j][0].classList.contains('O') && cols[j][1].classList.contains('O') && cols[j][2].classList.contains('O'))){
            winner.innerHTML = 'O wins';
            win = true;
        }
    }
    if((box[0].classList.contains('X') && box[4].classList.contains('X') && box[8].classList.contains('X'))
    || (box[2].classList.contains('X') && box[4].classList.contains('X') && box[6].classList.contains('X'))){
        winner.innerHTML = 'X wins';
        win = true;
    }
    else
    if((box[0].classList.contains('O') && box[4].classList.contains('O') && box[8].classList.contains('O'))
    || (box[2].classList.contains('O') && box[4].classList.contains('O') && box[6].classList.contains('O'))){
        winner.innerHTML = 'O wins';
        win = true;
    }
    if(win){
        trnDisp.innerHTML = '';
        turn = '';
    }
    if(!win && count == 9){
        winner.innerHTML = 'Draw!!';
        trnDisp.innerHTML = '';
        turn = '';
    }
}

for(let i = 0; i < box.length; i++){
    box[i].addEventListener('click', (event) => {
        if(turn == 'X' && !(box[i].classList.contains('O') || box[i].classList.contains('X'))){
            box[i].classList.add('X');
            trnDisp.innerHTML = 'turn: O';
            turn = 'O';
            count++;
        }
        else if(turn == 'O' && !(box[i].classList.contains('O') || box[i].classList.contains('X'))){
            box[i].classList.add('O');
            trnDisp.innerHTML = 'turn: X';
            turn = 'X';
            count++;
        }
        if(!win)
            winCheck();
    });
}