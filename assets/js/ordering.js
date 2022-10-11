
 function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  const inputBox = document.querySelector('#menuBox');
  const prizBox = document.querySelector('#price');
  
     function show(item){
      var hh = item.split('*');
      var itm = hh[0];
      var priz = hh[1];
      var lok = hh[0]
      inputBox.value = itm;
      prizBox.value =priz;
      lockbox.value=lok
     }

     function getTotal(){
      var prz = document.getElementById("price").value;
      var quant = document.getElementById("qty").value;
      var total = parseInt(prz) * parseInt(quant);
      document.getElementById("newBox").value=total;
     }

     
    var food=[""];

    function lock(){
      var opt = document.createElement("option");
      var getmor = document.getElementById("menuBox").value;
      var ff = document.getElementById("newBox").value;
      var quant = document.getElementById("qty").value;
      var conc = ""+quant +" " + getmor + " = N"+ ff;
      opt.text =""+conc;
      opt.value=""+getmor;
      document.getElementById("list").options.add(opt); 

      let tt = document.getElementById("newBox").value;
      let ft = document.getElementById("ft");
      let ftv = ft.value;
      ft.value = parseInt(ftv) + parseInt(tt);
      // to clear data
      document.getElementById("menuBox").value="";
      document.getElementById("price").value=""; 
      document.getElementById("qty").value="";
      document.getElementById("newBox").value="";
      document.getElementById("list").value="";
return false;
      
    } 
   
  
  function deleteValue(){  
      var s = 1;  
      var Index;  
      if (document.getElementById("list").selectedIndex == -1) {  
         alert("Please select any item from the ListBox");  
         return true;  
      }  
      while (s > 0) {  
          Index = document.getElementById("list").selectedIndex;  
          if (Index >= 0) {  
               document.getElementById("list").options[Index] = null;  
                --i;  
          }  
          else  
             s = 0;  
      }  
      return true;  
  } 


  function pay(){
    location.replace("payment.html");
  }
  function logout(){
    location.replace("landing.html");
  }    