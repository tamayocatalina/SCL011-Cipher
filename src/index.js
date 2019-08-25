/*Acá va tu código*/
let choseNumber;
let text1;




document.getElementById("big").style.display = "none";
// BOTON SALUDO E INICIO

document.getElementById("sendName").addEventListener ("click",()=>{
    if(userName.value){
    let userName = document.getElementById("userName");
    document.getElementById("welcome").innerHTML = "Hola " + userName.value  + " 007";
    document.getElementById("big").style.display = "block" ;
    document.getElementById("login").style.display = "none" ;
    }


})




// SELECCION DESPLAZAMIENTO Y BOTON OFSSET

document.getElementById("btnOffset").addEventListener("click", ()=>{
    //console.log("escucho el click");
     choseNumber = parseInt(document.getElementById("choseNumber").value );
     //console.log (choseNumber);
 })

 //CIFRAR

 document.getElementById("btnCifrado").addEventListener("click", ()=> {
   //console.log("esto funciona");
    text1 = document.getElementById("text1").value ;
    text1 = text1.toUpperCase();
    //console.log(text1);

    //traerlo final cifrado
    document.getElementById("text2").innerHTML = window.cipher.encode(choseNumber, text1);
    
})


//DESCIFRAR

document.getElementById("btnDescifrado").addEventListener("click", ()=> {
    //console.log("esto tambien funciona");
     text1 = document.getElementById("text1").value;
     text1 = text1.toUpperCase();
     //console.log(text1);
     
         document.getElementById("text2").innerHTML = window.cipher.decode(choseNumber,text1);
  }) 
