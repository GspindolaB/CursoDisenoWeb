function sumar() {
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);

    var res = n1 + n2;
    document.getElementById('res').value = res;
}

function restar() {
    var nu1 = parseFloat(document.getElementById('nu1').value);
    var nu2 = parseFloat(document.getElementById('nu2').value);

    var res2 = nu1 - nu2;
    document.getElementById('res2').value = res2;
}

function multiplicar() {
    var nu3 = parseFloat(document.getElementById('nu3').value);
    var nu4 = parseFloat(document.getElementById('nu4').value);

    var res3 = nu3 * nu4;
    document.getElementById('res3').value = res3;
}

function dividir() {
    var nu5 = parseFloat(document.getElementById('nu5').value);
    var nu6 = parseFloat(document.getElementById('nu6').value);

    var res4 = nu5 / nu6;
    document.getElementById('res4').value = res4;
}