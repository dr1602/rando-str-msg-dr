const messages = [ 
    "Es aquí donde todo comienza...", 
    "Commit enviado (¿o no?)", 
    "El control de versiones es ***", 
    "¡Envía todos los archivos en el COMMIT!", 
    "Lo mismo que hacemos todas las noches, Pinky - ¡Tratar de conquistar al mundo!", 
    "¡Noooo, la maravilla no!", 
    "Este commit es falso", 
    "¡Te explicaré cuando seas más grande!", 
    "¡Que haya Dragones!", 
    "Reinventando la rueda, otra vez.", 
    "Este no es el mensaje de commit que estás buscando.", 
    "¡Este commit es como Batman! (no tiene padres)", 
];

const funnyCommit = () => { 
    const message = messages[Math.floor(Math.random() * messages.length)]; 
    console.log(`\x1b[34m${message}\x1b[89m`); 
}

module.exports = { 
    funnyCommit 
};