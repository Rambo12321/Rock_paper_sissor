
/* This was the logic function used to generate the result 
    
    let userAns = prompt("ROCK, PAPER or SISSOR!"); 

        userAns = userAns.toUpperCase();
        let compAns = Math.floor(Math.random()*100); //Generates a random number for computer answer


        if(userAns != "ROCK" && userAns!="PAPER" && userAns!="SISSOR") //Checks for valid input
        {
            alert("Wrong Input Provided");
        }
        else // Assigns computer it's choice of answer
        {
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
        }


        //Find outs the winner by calculating the probabilities
        if((compAns==="ROCK" && userAns =="SISSOR") || (compAns==="SISSOR" && userAns =="ROCK"))
        {
            if(compAns==="ROCK")
            {
                console.log("Computer wins!!! Sh*thead!!!");
                console.log(compAns + " Beats - " + userAns);
            }
            else{
                console.log("Huumannnnnnn winsss!!!!!!!!!!!!");
                console.log(userAns + " Beats - " + compAns);
            }
        }
        else if((compAns==="PAPER" && userAns =="ROCK") || (compAns==="ROCK" && userAns =="PAPER"))
        {
            if(compAns==="PAPER")
            {
                console.log("Computer wins!!! Sh*thead!!!");
                console.log(compAns + " Beats - " + userAns);
            }
            else{
                console.log("Huumannnnnnn winsss!!!!!!!!!!!!");
                console.log(userAns + " Beats - " + compAns);
            }
        }
        else if((compAns==="PAPER" && userAns =="SISSOR") || (compAns==="SISSOR" && userAns =="PAPER"))
        {
            if(compAns==="SISSOR")
            {
                console.log("Computer wins!!! Sh*thead!!!");
                console.log(compAns + " Beats - " + userAns);
            }
            else{
                console.log("Huumannnnnnn winsss!!!!!!!!!!!!");
                console.log(userAns + " Beats - " + compAns);
            }
        }
        else
        {
            console.log("It's a biiiiggggg fat drawwwww......");
        }
    */
   