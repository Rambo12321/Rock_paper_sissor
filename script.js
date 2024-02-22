
const screen = document.querySelector('.screen');

const buttons = document.querySelectorAll('.butts');

buttons.forEach((button) => {
    button.addEventListener('click',(e)=>
    {
        const targetBut = e.target;

        if(targetBut.tagName === 'BUTTON')
        {
            console.log(targetBut.id);
            calResult(targetBut.id);

        }
    })
})



function calResult(userAns)
{
    let compAns = Math.floor(Math.random()*100); //Generates a random number for computer answer


    // Assigns computer it's choice of answer   
    if(compAns%2==0 && compAns%3!=0)
    {
        compAns="ROCK";
    }
    else if(compAns%3==0)
    {
        compAns="PAPER";
    }
    else
    {
        compAns="SISSOR";
    }
        

        //Find outs the winner by calculating the probabilities
        if((compAns==="ROCK" && userAns =="SISSOR") || (compAns==="SISSOR" && userAns =="ROCK"))
        {
            if(compAns==="ROCK")
            {
                console.log("Computer wins!!! Sh*thead!!!");
                
            }
            else{
                console.log("Human wins!!!!");
                
            }
        }
        else if((compAns==="PAPER" && userAns =="ROCK") || (compAns==="ROCK" && userAns =="PAPER"))
        {
            if(compAns==="PAPER")
            {
                console.log("Computer wins!!! Sh*thead!!!");
                
            }
            else{
                console.log("Human wins!!!!");
                
            }
        }
        else if((compAns==="PAPER" && userAns =="SISSOR") || (compAns==="SISSOR" && userAns =="PAPER"))
        {
            if(compAns==="SISSOR")
            {
                console.log("Computer wins!!! Sh*thead!!!");
                
            }
            else{
                console.log("Human wins!!!!");
                
            }
        }
        else
        {
            console.log("Biggg fat drawww...");
        }

    console.log("Computer choice - " + compAns + ", User Choice - " + userAns);
    screen.textContent = `${compAns} Beats - ${userAns}`;
}

/* This was the logic function used to generate the result 
    
    let userAns = prompt("ROCK, PAPER or SISSOR!"); 

        userAns = userAns.toUpperCase();
        
    */
   