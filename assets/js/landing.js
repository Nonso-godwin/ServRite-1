function checkPass(){
    let p = document.getElementById("paswd").value;
    let u = document.getElementById("user").value;
    let h = "";
    let admpass = "adm";
    let waitpass = "nonso";
      if(p == admpass){
        alert("Welcome Admin " +u);
       location.replace("Admin.html");
      }else if(p == waitpass){
    alert("Welcome waiter/waitress " +u);
    location.replace("ordering.html");
   }else if(p =! admpass || waitpass){
    alert("Invalid password"); 
   }
    
   }
   
  
    