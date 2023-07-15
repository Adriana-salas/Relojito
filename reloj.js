(function () {

    var actualizarHora = function(){
        var fecha = new Date(),
            Horas = fecha.getHours(),
            ampm,
            Minutos = fecha.getMinutes(),
            Segundos = fecha.getSeconds(),
            Diasemana = fecha.getDay(),
            Dia = fecha.getDate(),
            Mes = fecha.getMonth(),
            Año = fecha.getFullYear();

        var pHoras = document.getElementById('Horas'),
            pAMPM = document.getElementById('ampm'),
            pMinutos = document.getElementById('Minutos'),
            pSegundos = document.getElementById('Segundos'),
            pDiasemana = document.getElementById('Diasemana'),  
            pDia = document.getElementById('Dia'),
            pMes = document.getElementById('Mes'),
            pAño = document.getElementById('Año'); 

       var Semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
       pDiasemana.textContent = Semana[Diasemana];

       pDia.textContent = Dia;

       var Meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
       pMes.textContent = Meses[Mes];
       pAño.textContent = Año;

       if (Horas >= 12) {
          Horas = Horas - 12;
          ampm = 'PM' ;
        } else {
            ampm = 'AM';
        }
         
        if(Horas == 0){
            Horas = 12;
        };
        
       pHoras.textContent = Horas;
       pAMPM.textContent = ampm;

       if (Minutos < 10 ) {Minutos = "0" + Minutos};
       if (Segundos < 10 ) {Segundos = "0" + Segundos};

       pMinutos.textContent = Minutos;
       pSegundos.textContent = Segundos;

    };


    actualizarHora();
    var intervalo = setInterval(actualizarHora,1000)





}())