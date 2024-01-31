const readline = require('readline');

const iniciarGenerador = () => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    rl.question('Longitud de la contraseña (mínimo 1, máximo 21): ', (longitudInput) => {
        const longitud = Math.min(Math.max(parseInt(longitudInput, 10), 1), 21);
    
        rl.question('¿Usar números? (Sí/No): ', (usarNumerosInput) => {
            const usarNumeros = ['true', 'y', 'yes', 's', 'si', 'sí'].includes(usarNumerosInput.toLowerCase());
    
            rl.question('¿Usar letras? (Sí/No): ', (usarLetrasInput) => {
            const usarLetras = ['true', 'y', 'yes', 's', 'si', 'sí'].includes(usarLetrasInput.toLowerCase());
    
                rl.question('¿Usar caracteres especiales? (Sí/No): ', (usarCaracteresEspecialesInput) => {
                    const usarCaracteresEspeciales = ['true', 'y', 'yes', 's', 'si', 'sí'].includes(usarCaracteresEspecialesInput.toLowerCase());
        
                    rl.question('¿Usar mayúsculas? (Sí/No): ', (usarMayusculasInput) => {
                        const usarMayusculas = ['true', 'y', 'yes', 's', 'si', 'sí'].includes(usarMayusculasInput.toLowerCase());
        
                        rl.close();
        
                        const contraseña = generarContraseña(longitud, usarNumeros, usarLetras, usarCaracteresEspeciales, usarMayusculas);
                        console.log('Contraseña generada:', contraseña);
                    });
                });
            });
        });
    });
}
  

const generarContraseña = (longitud, usarNumeros, usarLetras, usarCaracteresEspeciales, usarMayusculas) => {
    const caracteresNumericos = '0123456789';
    const caracteresLetras = 'abcdefghijklmnopqrstuvwxyz';
    const caracteresMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const caracteresEspeciales = '!@#$%^&*()-=_+[]{}|;:,.<>?';
  
    let caracteresPermitidos = '';
  
    if (usarNumeros) {
      caracteresPermitidos += caracteresNumericos;
    }
  
    if (usarLetras) {
      caracteresPermitidos += caracteresLetras;
    }
  
    if (usarMayusculas) {
      caracteresPermitidos += caracteresMayusculas;
    }
  
    if (usarCaracteresEspeciales) {
      caracteresPermitidos += caracteresEspeciales;
    }
  
    if (caracteresPermitidos === '') {
    //   console.error('Debes seleccionar al menos un tipo de caracter.');
      return '';
    }
  
    let contraseñaGenerada = '';
    const longitudTotal = caracteresPermitidos.length;
  
    for (let i = 0; i < longitud; i++) {
      const indiceAleatorio = Math.floor(Math.random() * longitudTotal);
      contraseñaGenerada += caracteresPermitidos.charAt(indiceAleatorio);
    }
  
    return contraseñaGenerada;
}

if (require.main === module) {
    iniciarGenerador();
}
  
module.exports = {
  iniciarGenerador,
  generarContraseña
};