document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formularioNotas");
    const mensajeResultado = document.getElementById("mensajeResultado");
    const limpiarBtn = document.getElementById("limpiarBtn");
  
    formulario.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const parcial1 = parseFloat(document.getElementById("parcial1").value);
      const parcial2 = parseFloat(document.getElementById("parcial2").value);
      const parcial3 = parseFloat(document.getElementById("parcial3").value);
  
      if (isNaN(parcial1) || isNaN(parcial2) || isNaN(parcial3)) {
        mensajeResultado.innerHTML = '<div class="alert alert-danger" role="alert">Por favor, ingrese todas las notas.</div>';
        return;
      }
  
      const notaFinal = (parcial1 * 0.3 + parcial2 * 0.3 + parcial3 * 0.4) * 10; // Multiplico por 10 para convertir a porcentaje
      let mensaje = '';
      let colorMensaje = '';
  
      if (notaFinal >= 0 && notaFinal < 60) {
        mensaje = 'Reprobado';
        colorMensaje = 'alert-danger'; // Cambia el color a rojo
      } else if (notaFinal < 80) {
        mensaje = 'Bueno';
        colorMensaje = 'alert-success'; // Mantiene el color verde
      } else if (notaFinal < 90) {
        mensaje = 'Muy Bueno';
        colorMensaje = 'alert-success'; // Mantiene el color verde
      } else {
        mensaje = 'Sobresaliente';
        colorMensaje = 'alert-success'; // Mantiene el color verde
      }
  
      mensajeResultado.innerHTML = `<div class="alert ${colorMensaje}" role="alert">¡Nota final: ${notaFinal.toFixed(2)}%! ${mensaje}</div>`;
    });
  
    limpiarBtn.addEventListener("click", function() {
      formulario.reset();
      mensajeResultado.innerHTML = '';
    });
  });
  