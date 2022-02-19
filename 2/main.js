
document.getElementById('ebaa').innerText = "No Classes To Show";
  
    function myFunction() {

      document.getElementById('ebaa').textContent = '';

      var x = document.getElementById("addInput").classList;
      var y= document.getElementById('addInput').value.toString().split(" ");
      var z= document.getElementById('removeInput').value.toString().split(" ");

      if (y!="" && z==""){
      
      for (let i =0 ; i<y.length; i++ )
      x.add(`${y[i]}`);
      var xArray = Array.from(x.value.split(" ").sort());
      
      for(var i=0; i<x.length; i++ ){
      
      const div = document.createElement("div");
      div.innerHTML = xArray[i];
      div.style.backgroundColor = "#FFA500";
      div.style.fontSize= "15px";
      div.style.borderRadius = "10px";
      div.style.float = "left";
      div.style.width = "140px";
      div.style.height = "30px";
      div.style.margin = "15px";
      div.style.textAlign = "center";
      div.style.justifyContent = "center";
      div.style.boxSizing= "border-box";
      div.style.border= "1px solid #000";
      document.getElementById('ebaa').appendChild(div);
          
      }
      document.getElementById("addInput").value = "";

      }else if (y=="" && z!=""){

        var k = document.getElementById("addInput").classList;
        for (let i =0 ; i<z.length; i++ )
        k.remove(`${z[i]}`);
        var kArray = Array.from(k.value.split(" ").sort());

        for(var i=0; i<k.length; i++ ){

        const div = document.createElement("div");
        div.innerHTML = kArray[i];
        div.style.backgroundColor = "#FFA500";
        div.style.fontSize= "15px";
        div.style.borderRadius = "10px";
        div.style.float = "left";
        div.style.width = "140px";
        div.style.height = "30px";
        div.style.margin = "15px";
        div.style.textAlign = "center";
        div.style.justifyContent = "center";
        div.style.boxSizing= "border-box";
        div.style.border= "1px solid #000";
        document.getElementById('ebaa').appendChild(div);
        
        }
    
        document.getElementById("removeInput").value = "";

        if(k.length === 0)
        document.getElementById('ebaa').innerText = "No Classes To Show";

      }else if (y=="" && z==""){
        
        const div = document.createElement("div");
        div.innerHTML = "Please do any thing";
        div.style.backgroundColor = "#FFA500";
        div.style.fontSize= "15px";
        div.style.borderRadius = "10px";
        div.style.float = "left";
        div.style.width = "140px";
        div.style.height = "30px";
        div.style.margin = "15px";
        div.style.textAlign = "center";
        div.style.justifyContent = "center";
        div.style.boxSizing= "border-box";
        div.style.border= "1px solid #000";
        document.getElementById('ebaa').appendChild(div);
      }
    };
          