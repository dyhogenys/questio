var hora = "00"; 
var min = "30";
var seg = 00;
function getSecs(){
	seg--;
	if(seg<0){ seg=59; min--;
        if(min<=9){ min="0"+min;}
    }
    if(min=="0-1"){ min=5;hora--;
        if(hora<=9){ hora="0"+hora;}
    }
    if(seg<=9){seg="0"+seg;}
    if(min<6){ clock1.style.color = 'red'; }
    if(hora=="0-1"){ hora="00"; min="00"; seg="00";
        clock1.innerHTML=min+" : "+seg;
        setTimeout(function(){
            document.getElementById('corpo').style.display = 'none';
            document.getElementById('mensagemTempo').className = 'animated fadeIn';
            document.getElementById('mensagemTempo').style.display = 'block';
                }, 2000);
    }
    else{ clock1.innerHTML=min+" : "+seg; setTimeout('getSecs()',1000); }
}