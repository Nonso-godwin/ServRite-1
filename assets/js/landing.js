function checkPass(){
    let p = document.getElementById("paswd").value;
    let u = document.getElementById("user").value;
    
    let us = "";
       let resp = "";
       switch(p){
        case "nonso":
        alert("Welcome " + u);
        location.replace("ordering.html");
        sessionStorage.setItem("u", nam)
        break;
        default:
        alert("Invalid password")
    }
   
    }
   
