const game_grid = document.getElementById('game-grid');
for(let i=1;i<10;i++){
    let button = document.createElement('button');
    button.innerText = i;
    button.style.cssText = "border:1px solid black;font-size:30px;font-family:arial;"
    button.setAttribute('id','each-button')
    game_grid.appendChild(button)
    }

let number = 0;
button = document.querySelectorAll('#each-button');

let number_array = ['1','2','3','4','5','6','7','8','9'];
let tied_number = 0;

function winner(){
    if ((number_array[0] == 'O' && number_array[1] =='O' && number_array[2] == 'O') 
    || (number_array[3] == 'O' && number_array[4] =='O' && number_array[5] == 'O')
    || (number_array[6] == 'O' && number_array[7] =='O' && number_array[8] == 'O')
    || (number_array[0] == 'O' && number_array[3] =='O' && number_array[6] == 'O')
    || (number_array[1] == 'O' && number_array[4] =='O' && number_array[7] == 'O')
    || (number_array[2] == 'O' && number_array[5] =='O' && number_array[8] == 'O')
    || (number_array[0] == 'O' && number_array[4] =='O' && number_array[8] == 'O')
    || (number_array[2] == 'O' && number_array[4] =='O' && number_array[6] == 'O')
            ) {
            // alert('Player "O" has won!');
            // location.reload();
            tied_number += 1;
            let winner_element = document.createElement('h1');
            winner_element.innerText = 'Player "O" has won!';
            winner_element.style.cssText = "font-family:arial,color:black;background-color:white;margin-top:20px;font-size:40px;"
            document.body.appendChild(winner_element);
            setTimeout(function(){
                window.location.reload();
             }, 2000);
         }
    else if ((number_array[0] == 'X' && number_array[1] =='X' && number_array[2] == 'X') 
            || (number_array[3] == 'X' && number_array[4] =='X' && number_array[5] == 'X')
            || (number_array[6] == 'X' && number_array[7] =='X' && number_array[8] == 'X')
            || (number_array[0] == 'X' && number_array[3] =='X' && number_array[6] == 'X')
            || (number_array[1] == 'X' && number_array[4] =='X' && number_array[7] == 'X')
            || (number_array[2] == 'X' && number_array[5] =='X' && number_array[8] == 'X')
            || (number_array[0] == 'X' && number_array[4] =='X' && number_array[8] == 'X')
            || (number_array[2] == 'X' && number_array[4] =='X' && number_array[6] == 'X'))
            {
                tied_number += 1;
                let winner_element = document.createElement('h1');
                winner_element.innerText = 'Player "X" has won!';
                winner_element.style.cssText = "font-family:arial,color:black;background-color:white;margin-top:20px;font-size:40px;"
                document.body.appendChild(winner_element);
                setTimeout(function(){
                    window.location.reload();
                 }, 2000);
            }

}


for (let i=0;i<9;i++){    
        button[i].addEventListener('click',()=>{
            if (button[i].innerText == 'O' || button[i].innerText == 'X'){
                alert('That place is occupied')
            }

            else if (number % 2 == 0 ) {
                number_array[+button[i].innerText - 1] = 'O';
                button[i].innerText = 'O';
                button[i].style.cssText = 'background-color:#0252c2;font-size:30px;font-family:arial;border:none;color:white;'
                number += 1;
                winner();
            } else {
                number_array[+button[i].innerText - 1 ] = 'X';
                button[i].innerText = 'X';
                button[i].style.cssText = 'background-color:#0252c2;font-size:30px;font-family:arial;border:none;color:white;'
                number += 1;
                winner();
            }
            if(number ===9) {
                if (tied_number == 0) {
                    let tied_element = document.createElement('h1');
                    tied_element.innerText = 'Match Tied!';
                    tied_element.style.cssText = "font-family:arial,color:black;background-color:white;margin-top:20px;font-size:40px;"
                    document.body.appendChild(tied_element);
                    setTimeout(function(){
                        window.location.reload();
                    }, 2000);
            }
            }
        })
}



