/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Conversion de unidades, de metros, yardas, pies y pulgadas
 * @method conversor
 * @param {string} id - el Id de los inputs metros, pies, yardas o pulgadas.
 * @param {number} valor - el valor de los inputs metros, pies, yardas o pulgadas.
 * @return -
 */

function conversor(id, valor){
    var metro, pulgada, pie, yarda;

    if (valor.includes(",")){
        valor = valor.replace(",",".");
    }

    if(isNaN(valor)){
        alert("Se ingreso un valor invalido"+id);
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    }else if(id=="metro"){
        metro = valor;
        pulgada = 39.3701*valor;
        pie = 3.28084*valor;
        yarda = 1.09361*valor;
    }else if(id=="yarda"){
        yarda = valor;
        pulgada = 36*valor;
        pie = 3*valor;
        metro = 0.9144*valor;
    }else if(id=="pie"){
        pie = valor;
        pulgada = 12*valor;
        metro = 0.3048*valor;
        yarda = 0.333333*valor;
    }else if(id=="pulgada"){
        pulgada = valor;
        pie = 0.0833333*valor;
        metro = 0.0254*valor;
        yarda = 0.0277778*valor;
    }

    document.unidades.unid_metro.value = Math.round (metro*100)/100;
    document.unidades.unid_pulgada.value = Math.round (pulgada*100)/100;
    document.unidades.unid_pie.value = Math.round (pie*100)/100;
    document.unidades.unid_yarda.value = Math.round (yarda*100)/100;

}

/**
 * Conversion de unidades, de grados o radianes.
 * @method conversorGR
 * @param {string} id - el Id de los inputs metros, pies, yardas o pulgadas.
 * @return -
 */

function convertirGR(id) {
    var grad, rad;
        if (id == "grados") {
            grad = document.getElementById("grados").value;
            rad = (grad * Math.PI)/180;

        } else if(id=="radianes"){
            rad = document.getElementById("radianes").value;
            grad = (rad*180)/Math.PI;
        }
        document.getElementById("grados").value = grad;
        document.getElementById("radianes").value = rad;
}

/**
 * Mostrar ocultar un DIV.
 * @method mostrar_ocultar.
 * @param {string} id - el Id de del div con su estilo.
 * @return -
 */

function mostrar_ocultar(valorM){
    if (valorM=="val_mostrar"){
        document.getElementById("divM").style.display = 'block';
    }else if (valorM=="val_ocultar"){
        document.getElementById("divM").style.display = 'none';
    }
}

function calcularSuma(){
    var num1, num2;

        num1=document.getElementsByName("sum_num1")[0].value;
        num2=document.getElementsByName("sum_num2")[0].value;

        document.getElementsByName("sum_total")[0].innerHTML = Number(num1) + Number(num2);
}

function calcularResta(){
    var num1, num2;

    num1=document.getElementsByName("res_num1")[0].value;
    num2=document.getElementsByName("res_num2")[0].value;

    document.getElementsByName("res_total")[0].innerHTML = Number(num1) - Number(num2);
}

function calcularMul(){
    var num1, num2;

    num1=document.getElementsByName("mul_num1")[0].value;
    num2=document.getElementsByName("mul_num2")[0].value;

    document.getElementsByName("mul_total")[0].innerHTML = Number(num1) * Number(num2);
}

function calcularDiv(){
    var num1, num2;

    num1=document.getElementsByName("div_num1")[0].value;
    num2=document.getElementsByName("div_num2")[0].value;

    document.getElementsByName("div_total")[0].innerHTML = Number(num1) / Number(num2);
}

function cargarWeb(){
    var cant, unidad, urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp);
}

function cargarRes(){
    var urlComp, cant, unidad;

    urlComp = window.location.href.split("/")[5];

    cant = urlComp.split("#")[1];
    unidad = urlComp.split ("#")[2];

    document.getElementById("dist").value = cant + " " + unidad;
}

function dibujarCC() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var xMax = canvas.width;
    var yMax = canvas.height;
    var margen = 5;

    ctx.fillStyle = "#b60303";
    ctx.fillRect(margen, yMax - 40 - margen, 40, 40);

    ctx.arc(xMax/2, yMax/2, 20, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#6d055d";
    ctx.fill();
}