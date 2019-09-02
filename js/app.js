var lawnMowerImg=document.querySelector('.lawnMower');
var scissorsImg=document.querySelector('.rusty_scissors');
var fancymowerImg=document.querySelector('.fancyMower');
var studentsImg=document.querySelector('.students');
var teethImg=document.querySelector(".teeth");
teethImg.src="./images/teeth.png";
var bankAccount=0;
var tools=["teeth"];







console.log('hi');



// let askIt=document.querySelector('.whatToDo').textContent=`Your bank account has ${bankAccount} dollars and your current tools are ${tools}. Click the tool would you like to work with?`;

function changeIt(){


    if(bankAccount>=1000){
        alert(`You won! You made ${bankAccount} dollars! You are a RoCk StAr!`);
        return;
    }



    bankAccount+=1;
    console.log('clicked');
    console.log(bankAccount);

    var score=document.querySelector('.score_holder').textContent=bankAccount;

    let askIt=document.querySelector('.whatToDo').textContent=`Your bank account has ${bankAccount} dollars and your current tools are ${tools}. Click the tool would you like to work with?`;





    ////////////

    if(bankAccount===5 && bankAccount<25 && tools.includes("scissors")!=true){
        let buyIt=prompt(`Would you like to purchase rusty scissors for $5? `);
    
            if (buyIt==="yes"){
                bankAccount-=5;
                tools.push("scissors");
                scissorsImg.src="./images/old-rusty-scissors-isolated-on-260nw-398253913.jpg";

            }
            else{
                alert("error")
            }
        
    }

    ///////////

    if(bankAccount>=25 && bankAccount<50&&tools.includes("lawnmower")!=true){
        let buylawnMower=prompt(`Would you like to purchase old-timey push lawnmower for $25`);

            if (buylawnMower==="yes"){
                bankAccount-=25;
                tools.push("lawnmower");
                lawnMowerImg.src="./images/71oOjUF636L._SY550_.jpg";

            }
            else{alert('error');
            }
        
    }

    //////////
    if(bankAccount>=250 && bankAccount<500 && tools.includes("Fancy Mower")===!true){
        let teethfancy=prompt(`Would you like to purchase fancy battery-powered lawnmower for $250.`);

            if (teethfancy==="yes"){
                bankAccount-=250;
                tools.push("Fancy Mower");
            }

            fancymowerImg.src="./images/co17_3749s_HD_22298_34r-1600x1369.jpg";

        
    }
    /////////////

    if(bankAccount>=500 && bankAccount<1000 && tools.includes("Starving Students")===!true){
        let team=prompt(`Would you like to  hire a team of starving students for $500`);

            if (team==="yes"){
                bankAccount-=500;
                tools.push("Starving Students");
                studentsImg.src="./images/starving_students.jpg";

            }
        
    }




    if(bankAccount>=1000){
        alert(`You won! You made ${bankAccount} dollars! You are a RoCk StAr!`);
        return;
    }

    ///////

}

teethImg.addEventListener('click',changeIt);



function scissorsIt(){

    if(bankAccount>=1000){
        alert(`You won! You made ${bankAccount} dollars! You are a RoCk StAr!`);
        return;
    }

    bankAccount+=5;
    console.log('clicked');
    console.log(bankAccount);

    var score=document.querySelector('.score_holder').textContent=bankAccount;

    let thisaskIt=document.querySelector('.whatToDo').textContent=`Your bank account has ${bankAccount} dollars and your current tools are ${tools}. Click the tool would you like to work with?`;




    ////////////////


    if(bankAccount>=25 && bankAccount<50&&tools.includes("lawnmower")!=true){
        let lawnmowerTool=prompt(`Would you like to purchase old-timey push lawnmower for $25`);

            if (lawnmowerTool==="yes"){
                bankAccount-=25;
                tools.push("lawnmower");
                lawnMowerImg.src="./images/71oOjUF636L._SY550_.jpg";

            }
        
    }


    ////////////////




    if(bankAccount>=250 && bankAccount<500 && tools.includes("Fancy Mower")===!true){
        let scissorsfancy=prompt(`Would you like to purchase fancy battery-powered lawnmower for $250.`);

            if (scissorsfancy==="yes"){
                bankAccount-=250;
                tools.push("Fancy Mower");
            }

            fancymowerImg.src="./images/co17_3749s_HD_22298_34r-1600x1369.jpg";

        
    }
    ///////////


    if(bankAccount>=500 && bankAccount<1000 && tools.includes("Starving Students")===!true){
        let scissorsTeam=prompt(`Would you like to  hire a team of starving students for $500`);

            if (scissorsTeam==="yes"){
                bankAccount-=500;
                tools.push("Starving Students");
                studentsImg.src="./images/starving_students.jpg";

            }
        
    }

   

    ////////////
}

scissorsImg.addEventListener('click',scissorsIt);




function mowIt(){

    if(bankAccount>=1000){
        alert(`You won! You made ${bankAccount} dollars! You are a RoCk StAr!`);
        return;
    }

    bankAccount+=50;
    console.log('clicked');
    console.log(bankAccount);

    var score=document.querySelector('.score_holder').textContent=bankAccount;

    let fancyaskIt=document.querySelector('.whatToDo').textContent=`Your bank account has ${bankAccount} dollars and your current tools are ${tools}. Click the tool would you like to work with?`;


console.log(tools);

    ////////////////

    if(bankAccount>=250 && bankAccount<500 && tools.includes("Fancy Mower")===!true){
        let fancymower=prompt(`Would you like to purchase fancy battery-powered lawnmower for $250.`);

            if (fancymower==="yes"){
                bankAccount-=250;
                tools.push("Fancy Mower");
            }

            fancymowerImg.src="./images/co17_3749s_HD_22298_34r-1600x1369.jpg";

        
    }


    ////////////////



    if(bankAccount>=500 && bankAccount<1000 && tools.includes("Starving Students")===!true){
        let struggleteam=prompt(`Would you like to  hire a team of starving students for $500`);

            if (struggleteam==="yes"){
                bankAccount-=500;
                tools.push("Starving Students");
                studentsImg.src="./images/starving_students.jpg";

            }
        
    }
   


    ////////
}

lawnMowerImg.addEventListener('click',mowIt);




//////////




function fancyMow(){

    if(bankAccount>=1000){
        alert(`You won! You made ${bankAccount} dollars! You are a RoCk StAr!`);
        return;
    }



    bankAccount+=100;
    console.log('clicked');
    console.log(bankAccount);

    var score=document.querySelector('.score_holder').textContent=bankAccount;

    let newaskIt=document.querySelector('.whatToDo').textContent=`Your bank account has ${bankAccount} dollars and your current tools are ${tools}. Click the tool would you like to work with?`;

    console.log(`New ${tools}`);



    ////////////////

    if(bankAccount>=500 && bankAccount<1000 && tools.includes("Starving Students")===!true){
        let myTeam=prompt(`Would you like to  hire a team of starving students for $500`);

            if (myTeam==="yes"){
                bankAccount-=500;
                tools.push("Starving Students");
                studentsImg.src="./images/starving_students.jpg";

            }
        
    }

    if(bankAccount>=1000){
        alert(`You won! You made ${bankAccount} dollars! You are a RoCk StAr!`);
        return;
    }
    ////////////////
}

fancymowerImg.addEventListener('click',fancyMow);


//////////////




function studentsMow(){

    if(bankAccount>=1000){
        alert(`You won! You made ${bankAccount} dollars! You are a RoCk StAr!`);
        return;
    }

    
    bankAccount+=250;
    console.log('clicked');
    console.log(bankAccount);

    var score=document.querySelector('.score_holder').textContent=bankAccount;

    let lastaskIt=document.querySelector('.whatToDo').textContent=`Your bank account has ${bankAccount} dollars and your current tools are ${tools}. Click the tool would you like to work with?`;

////////////
if(bankAccount>=250 && bankAccount<500 && tools.includes("Fancy Mower")===!true){
    let fancymower=prompt(`Would you like to purchase fancy battery-powered lawnmower for $250.`);

        if (fancyaskIt==="yes"){
            bankAccount-=250;
            tools.push("Fancy Mower");
        }

        fancymowerImg.src="./images/co17_3749s_HD_22298_34r-1600x1369.jpg";

    
}



    ////////////////

    if(bankAccount>=500 && bankAccount<1000 && tools.includes("Starving Students")===!true){
        let myTeam=prompt(`Would you like to  hire a team of starving students for $500`);

            if (myTeam==="yes"){
                bankAccount-=500;
                tools.push("Starving Students");
                studentsImg.src="./images/starving_students.jpg";

            }
        
    }
    if(bankAccount>=1000){
        alert(`You won! You made ${bankAccount} dollars! You are a RoCk StAr!`);
        return;
    }

    ////////////////
}

studentsImg.addEventListener('click',studentsMow);



///