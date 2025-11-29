let choises = document.querySelectorAll(".option");
let usercount = 0;
let compcount = 0;
let userscore = document.getElementById("userscore");
let compscore = document.getElementById("computerscore");

msgcont = document.querySelector(".msg-container");
const computerchoise = () => {
    const list = ["Rock","Paper","Scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return list[randIdx];
}

const showwinner = (userwin,userchoise,compchoise) =>{
    if(userwin){
        usercount++;
         msg.innerText=`User ${userchoise} Won over ${compchoise}`;
         userscore.innerText = `User : ${usercount}`
         msgcont.style.backgroundColor = "#3d975bff";
         document.getElementById("userscore").style.color = "#3d975bff";
         
         
        }
        else{
            compcount++;
            msg.innerText=`User ${userchoise} Lost from ${compchoise}`;
            compscore.innerText = `Computer : ${compcount}`
            
            msgcont.style.backgroundColor = "#d64848ff";
        }
    }
    
    let msg = document.getElementById("msg");
    
    const playgame = (userchoise) =>{
        console.log(userchoise);
        let compchoise = computerchoise();
        console.log(compchoise);
        
    if(userchoise===compchoise){
        msg.innerText="Draw";
        msgcont.style.backgroundColor = "#393E46";
        
        
    }
    else{
        let userwin = true;
        if(userchoise=="Rock"){
            userwin = compchoise == "Scissors" ? true : false;
        }
        else if(userchoise=="Paper"){
            userwin = compchoise == "Rock" ? true : false;
        }
        else{
            userwin = compchoise == "Paper" ? true : false;
        }
        showwinner(userwin,userchoise,compchoise);
    }
}


choises.forEach((choice) => {
  choice.addEventListener("click", () => {
      const userchoise = choice.getAttribute("id");
      playgame(userchoise);
    });
});

