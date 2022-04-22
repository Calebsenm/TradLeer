$('#a').click(function(){
    var i=document.getElementById("a");
    var temp = i.innerHTML;

     if(temp=="Hola"){
        i.innerHTML = "Mundo";
     }else{
        i.innerHTML = "Hola";
    };
    
});