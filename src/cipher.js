window.cipher = {
  encode: (choseNumber, text1) => {
    /* Acá va tu código */
    let text2, ascii, end="";

    for(let i=0 ; i < text1.length; i++){
      ascii  = text1[i].charCodeAt(0)
      text2 = (parseInt(ascii) - 65 + choseNumber) % 26 + 65;
      text2 = String.fromCharCode(text2);
      end = end + text2
      
      

    }return end;},

  decode: (choseNumber,text1) => {
    /* Acá va tu código */
    let text2, ascii, end="";
    for(let i=0 ; i < text1.length; i++){
      ascii  = text1[i].charCodeAt(0)
      text2 = (parseInt(ascii) - 65 - choseNumber) % 26 + 65;
      text2 = String.fromCharCode(text2);
      end = end + text2
      
      
  }return end;}
  };
