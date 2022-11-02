function total(){
    let fest = document.getElementById("a").innerHTML;
    let sek = document.getElementById("b").innerHTML;
    let tak = parseInt(fest) + parseInt(sek);
    document.getElementById("ttl").innerHTML=tak;
    
  }
  function pay(){
    location.replace("payment.html");
  }