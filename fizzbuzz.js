function MultipleDeTrois(nombre) {
    return nombre % 3 === 0;
}
function MultipleDeCinq(nombre) {
    return nombre % 5 === 0;
}

for (var nombre = 1; nombre < 198; nombre++ ){
    if (MultipleDeTrois(nombre)){
        console.log('Fizz');
    }else if (MultipleDeCinq(nombre)){
        console.log('Buzz');
    }else {
        console.log(nombre);
    }
}
alert(nombre);


