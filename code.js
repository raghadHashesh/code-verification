/*
//first
let code1=document.querySelector('[name="one"]');
let code2=document.querySelector('[name="two"]');
let code3=document.querySelector('[name="three"]');
let code4=document.querySelector('[name="four"]');
let code5=document.querySelector('[name="five"]');
let code6=document.querySelector('[name="six"]');
let mySpinner=document.getElementsByClassName('ds-spinner')[0];
window.onload=()=>{
    code1.focus();
    code1.onkeyup=()=>{ 
        console.log(code1.value);
       if( code1.value.length===1){
        code1.blur();  
        code2.focus();
       }
    }
    code2.onkeyup=()=>{ 
        console.log(code2.value);
       if( code2.value.length===1){
        code2.blur();  
        code3.focus();
       }
    }
    code3.onkeyup=()=>{ 
        console.log(code3.value);
       if( code3.value.length===1){
        code3.blur();  
        code4.focus();
       }
    }
    code4.onkeyup=()=>{ 
        console.log(code4.value);
       if( code4.value.length===1){
        code4.blur();  
        code5.focus();
       }
    }
    code5.onkeyup=()=>{ 
        console.log(code5.value);
       if( code5.value.length===1){
        code5.blur();  
        code6.focus();
       }
    }
    code6.onkeyup=()=>{  
        console.log(code6.value);
       if( code6.value.length===1){
        code6.blur(); 
       mySpinner.style.display='block';
       
        
       }
    }
}*/

//second
let codee = document.querySelectorAll('[name]');
let code1=document.querySelector('[name="one"]');
let mySpinner = document.getElementsByClassName('ds-spinner')[0];
window.onload = () => {
    code1.focus();
    codee.forEach((ele, index) => {
        console.log(index)
        codee[index].onkeyup = () => {
            console.log(codee[index].value);
                if (codee[index].value.length === 1) {
                    codee[index].blur();
                    if (index !== codee.length-1) {
                        codee[index+1].focus();
                    }
                    else{
                        mySpinner.style.display = 'block';
                    }
                }
            
            
           

        }
    })
}
