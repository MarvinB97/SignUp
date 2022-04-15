// 'use strict';


class usuario{
    constructor(Usu,E_mail,Pass){
        this.Usu=Usu;
        this.E_mail=E_mail;
        this.Pass=Pass;
    }

    infoRequest(){
        return `${this.Usu} <br> 
                ${this.E_mail} <br> 
                ${this.Pass} <br>`;
    }
}

let usu, e_mail, pass;
let usuarioArray=[];
let i=1;

let guardar=()=>{
    usu= document.getElementById('usu').value;
    e_mail= document.getElementById('e-mail').value;
    pass= document.getElementById('pass').value;

    if(usu=='' && e_mail=='' && pass==''){
        alert('complete the information correctly, please')
    }else{
        usuarioArray[i]= new usuario(usu,e_mail,pass);
        console.log(usuarioArray[i])
        i++;
    }

}
    
