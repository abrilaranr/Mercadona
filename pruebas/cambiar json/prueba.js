function descargarJSON() {
  // Obtener los datos almacenados en el Web Storage
  const datos = localStorage.getItem('datos');

  // Crear un objeto Blob con los datos en formato JSON
  const blob = new Blob([datos], { type: 'application/json' });

  // Crear un enlace de descarga
  const url = URL.createObjectURL(blob);
  const enlaceDescarga = document.createElement('a');
  enlaceDescarga.href = url;

  // Obtiene la hora actual sin los segundos
  const fecha = new Date();
  const opciones = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
  const fechaLocal = fecha.toLocaleString('es-ES', opciones); // Obtiene la fecha y hora en formato de cadena sin segundos

  // Nombre del archivo
  enlaceDescarga.download = 'Recetas_' + fechaLocal + '.json';

  // Simular un click en el enlace de descarga para iniciar la descarga
  enlaceDescarga.click();

  // Liberar el objeto URL
  URL.revokeObjectURL(url);
}

function insertar() {
  // Crear un objeto JavaScript
  const datos = { nombre: 'Juan', edad: 30 };

  // Convertir el objeto en una cadena JSON
  const datosJSON = JSON.stringify(datos);

  // Almacenar la cadena JSON en localStorage con la clave 'datos'
  localStorage.setItem('datos', datosJSON);

}


function importarJSON(file) {
  const lector = new FileReader();

  // Configurar una función que se ejecute cuando se cargue el archivo
  lector.onload = (evento) => {
    const contenido = evento.target.result;
    const datos = JSON.parse(contenido);

    // Eliminar los datos anteriores del Local Storage
    localStorage.clear();

    // Almacenar los nuevos datos en el Local Storage
    for (const [clave, valor] of Object.entries(datos)) {
      localStorage.setItem(clave, valor);
    }
  };

  // Leer el contenido del archivo como texto
  lector.readAsText(file);
}


