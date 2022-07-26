//  Calculator App
 let display = document.getElementById("display");

 //  Buttons
 let button = Array.from(document.getElementsByClassName("btn"));

// Used a switch statement
button.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                display.innerText = '';
                break;
            case 'del.':
            if(display.innerText){
                display.innerText = display.innerText.slice(0, -1);
            }
            break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                }catch {
                    display.innerText = "Error!"
                }
            break;
            case 'sqrt':
                display.innerText = Math.sqrt(display.innerText);
                break;
            case 'sin':
                display.innerText = Math.sin(display.innerText);
                break;
            case 'cos':
                display.innerText = Math.cos(display.innerText);
                break;
            case 'tan':
                display.innerText = Math.tan(display.innerText);
                break;
            default:
                display.innerText += e.target.innerText;
        }
    })
})