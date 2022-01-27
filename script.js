entrada.focus();
 
         function ReemplazarVocales(entrada){
	                  var texto_encryptado = entrada;
	                  texto_encryptado = texto_encryptado.replaceAll("e","enter");
	                  texto_encryptado = texto_encryptado.replaceAll("i","imes");
	                  texto_encryptado = texto_encryptado.replaceAll("a","ai");
	                  texto_encryptado = texto_encryptado.replaceAll("o","ober");
	                  texto_encryptado = texto_encryptado.replaceAll("u","ufat");
	 
	                  return texto_encryptado;
	                  
}
         function Encriptar(){
	                          var entrada = document.querySelector("#entrada");
	                          MostrarTextoDesencriptado(ReemplazarVocales(entrada.value.toString()));
	                  
}
         function Desencriptar(){
	                          var salida = document.querySelector("#salida");
	                          MostrarTextoDesencriptado_2(ReemplazarPalabras(salida.value.toString()));
	                  
}
         function ReemplazarPalabras(texto){
	                          var texto_desencriptado = texto;
	 
	                          texto_desencriptado = texto_desencriptado.replaceAll("ai","a");
	                          texto_desencriptado = texto_desencriptado.replaceAll("imes","i");
	                          texto_desencriptado = texto_desencriptado.replaceAll("enter","e");
	                          texto_desencriptado = texto_desencriptado.replaceAll("ober","o");
	                          texto_desencriptado = texto_desencriptado.replaceAll("ufat","u");
	 
	                          return texto_desencriptado;
	                  
}
function MostrarTextoDesencriptado(texto){
	                          var salida = document.querySelector("#salida");
	                          salida.value = texto;
	                          var entrada = document.querySelector("#entrada");
	                          entrada.value = "";
	                  
}
         function MostrarTextoDesencriptado_2(texto){
	                          var entrada = document.querySelector("#entrada");
	                          entrada.value = texto ;
	                          var salida = document.querySelector("#salida");
	                          salida.value = "";
	                  
}
 
          var button = document.querySelector("#boton_encriptar");
          var button_2 = document.querySelector("#boton_desencriptar");
 
          button.onclick = Encriptar;
          button_2.onclick = Desencriptar;
