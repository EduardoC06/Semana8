        function mostrarFuncion(){
            alert("Esta es una funcion");
        }

        let varGlobal = 7;
        function funcion1(){
            let varLocal = "El valor es: ";
            alert(varLocal + varGlobal);
        }

        function funcion2(){
            let varlocal = 7;
            alert("nuevo valor: " + (varlocal + varGlobal));
        }

        function ejemplo1(){
            alert("Bienvenid@");  
        }

        function ejemplo2() {
            let nombre;
            nombre=prompt("Ingrese su nombre: ", "");
            alert("Bienvenid@ "+ nombre);            
        }

        function sumar() {
            let n1, n2, suma;
            n1=prompt("Ingresar el primer numero");
            n2=prompt("Ingresar el segundo numero");
            suma=parseInt(n1)+parseInt(n2);
            document.write("La suma es: " + suma);
        }

        function imagen(){
            document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png">');
        }

        function dirigir() {
            let comf = confirm("Deseas ir a la pagina de la utp");
            if(comf){
                alert("Entendido");
                window.location = "https://www.utp.edu.pe/web/";
            }else{
                alert("ok, sera en otro momento");
            }
        }

        function ingresar(){
            let n;
            n = document.getElementById('nombre').value;
            document.write("Bienvenido " + n);
        }

        function aceptar(){
            let respuesta, medio;
            respuesta = document.getElementsByName('resp');
            for(var i = 0; i<respuesta.length; i++){
                if(respuesta[i].checked){
                    medio = respuesta[i].value;
                }
            }

            document.write("Usted se desplaza en " + medio);
        }

        function sobre() {
            let n1, n2, p;
            n1 = document.productos.nro1.value;
            n2 = document.productos.nro2.value;
            p = n1 * n2;
            document.productos.resultado.value = p;
        }

        function conocer() {
            let edad, cam, costo=10, desc, total;
            edad = prompt("Cual es tu edad");
            cam= parseInt(edad);
            if(cam >= 12){
                desc= costo * 0.10;
                total= costo - desc;
                document.write("Es mayor tiene un descuento de 10% seria " + total);
            }else{
                desc= costo * 0.15;
                total= costo - desc;
                document.write("Es menor tiene un descuento de 15% seria " + total);
            }
        }

        function evaluar() {  
            var nt1, nt2, nt3, prom;   
            nt1 = parseInt(document.notas.nota1.value)    
            nt2 = parseInt(document.notas.nota2.value)                 
            nt3 = parseInt(document.notas.nota3.value) 
            
            prom = (nt1 + nt2 + nt3)/3;

            document.notas.resultado2.value = prom;

            if(prom < 12){
                var a="Desaprobado"
                document.notas.rest.value = a;
            }else {
                var a="Aprobado"
                document.notas.rest.value = a;
            }
        }

        function Agregar(){
            while(){

            }
        }