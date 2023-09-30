var num=0;
        var a=document.querySelector("#check");
        a.addEventListener("click", function(){
            if(num==0){
                document.querySelector("#light").style.backgroundColor = "#F5D76E";
                document.querySelector('.bulb').style.backgroundColor='#F5D76E';
                num=1;
            }
            else{
                document.querySelector("#light").style.backgroundColor = "#222";
                document.querySelector('.bulb').style.backgroundColor='#222';
                num=0;
            }
            
        });