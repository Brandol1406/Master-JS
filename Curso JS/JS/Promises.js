'use strict'

function getInfo() {
    var person = {
        name: "John Doe",
        age: 26,
        status: "single",
        sex: "M"
    };

    return new Promise((resolve, reject) => {
        var x = JSON.stringify(person);

        setTimeout(function(){
            if (typeof(x) == "string" && x != ""){
                return resolve(x);
            } else {
                return reject(Error("Fallo de conversion"));
            }
        }, 5000);
    });
}

function trabaja() {
    document.writeln("Hola");
    document.writeln("Viendo");
    document.writeln("Si");
    getInfo().then(x => {
        document.writeln(x);
    }).catch(x => {
        alert(x);
    });;
    document.writeln("No");
    document.writeln("Se");
    document.writeln("interrumpe");
}

window.addEventListener('load', () => {
    document.writeln('Esta listo');
    trabaja();
});