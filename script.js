var cont = false;
function mudarEstado(el,img) {

    var display = document.getElementById(el);
        if(display.style.display == "block"){
            document.getElementById(img).classList.toggle('giro')
           display.style.display = 'none';
           cont = false;
           }
        else{
          if(cont == false)
          { display.style.display = 'block',
           document.getElementById(img).classList.toggle('giro'),
           cont = true;}}
}
