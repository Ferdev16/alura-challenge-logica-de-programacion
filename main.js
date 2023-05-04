
let table = {
  let: {low: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"],up: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]},
  num: ["0","1","2","3","4","5","6","7","8","9"],
  sym: ["!","$","%","&","/","(",")","=","'","¡","?","¿","ç","-",".",",",";",":","_","*","^"," "]
};


const cesarCrypt = (term,n) =>{
  let word = "";

  for (let i = 0; i < term.length; i++) {
    //Si es low case
    if (table.let.low.indexOf(term[i]) != -1) {
      
      let tmp = table.let.low.indexOf(term[i]);
      
      if (table.let.low[tmp+n] == undefined) {
        
        tmp = n - (27-tmp);

        word = word + table.let.low[tmp];
      
      }else{
        word = word + table.let.low[tmp+n];
      };

    };
    //Si es upperCase
    if (table.let.up.indexOf(term[i]) != -1) {
      
      let tmp = table.let.up.indexOf(term[i]);
      
      if (table.let.up[tmp+n] == undefined) {
        
        tmp = n-(27-tmp);

        word = word + table.let.up[tmp];
      
      }else{
        word = word + table.let.up[tmp+n];
      };

    };
    //Si es number
    if (table.num.indexOf(term[i]) != -1) {
      let tmp = table.num.indexOf(term[i]);
      
      if (table.num[tmp+n] == undefined) {
        
        tmp = n-(10-tmp);
        word = word + table.num[tmp];
      
      }else{
        word = word + table.num[tmp+n];
      };
    }
    //Si es un simbolo
    if (table.sym.indexOf(term[i]) != -1) {
      let tmp = table.sym.indexOf(term[i]);
      
      if (table.sym[tmp+n] == undefined) {
        
        tmp = n-(22-tmp);
        word = word + table.sym[tmp];
      
      }else{
        word = word + table.sym[tmp+n];
      };
    }
  };
  return word;
};


const cesarDecrypt = (term,n) => {
  let word = "";

  for (let i = 0; i < term.length; i++) {
    //Si es low case
    if (table.let.low.indexOf(term[i]) != -1) {
      
      let tmp = table.let.low.indexOf(term[i]);
      
      if (table.let.low[tmp-n] == undefined) {
        
        tmp = (tmp-n)+27;
        word = word + table.let.low[tmp];
      
      }else{
        word = word + table.let.low[tmp-n];
      };

    };
    //Si es upperCase
    if (table.let.up.indexOf(term[i]) != -1) {
      
      let tmp = table.let.up.indexOf(term[i]);
      
      if (table.let.up[tmp-n] == undefined) {
        
        tmp = (tmp-n)+27;

        word = word + table.let.up[tmp];
      
      }else{
        word = word + table.let.up[tmp-n];
      };

    };
    //Si es number
    if (table.num.indexOf(term[i]) != -1) {
      let tmp = table.num.indexOf(term[i]);
      
      if (table.num[tmp-n] == undefined) {
        
        tmp = (tmp-n)+10;
        word = word + table.num[tmp];
      
      }else{
        word = word + table.num[tmp-n];
      };
    }
    //Si es un simbolo
    if (table.sym.indexOf(term[i]) != -1) {
      let tmp = table.sym.indexOf(term[i]);
      
      if (table.sym[tmp-n] == undefined) {
        
        tmp = (tmp-n)+22;
        word = word + table.sym[tmp];
      
      }else{
        word = word + table.sym[tmp-n];
      };
    }
  };
  return word;
};

let html = {
  button: document.getElementById("button"),
  show: document.getElementById("show"),
  check: document.getElementById("checkbox")
};



const show = () =>{
  if(html.check.checked){
    html.show.value = cesarDecrypt(document.getElementById("input").value,parseInt(document.getElementById("n").value));
  }else{
    html.show.value = cesarCrypt(document.getElementById("input").value,parseInt(document.getElementById("n").value));
  }
};

html.button.onclick = show;

window.onbeforeunload = () =>{
  document.getElementById("input").value = "";
  document.getElementById("n").value = "";
  html.show.value = "";
};
