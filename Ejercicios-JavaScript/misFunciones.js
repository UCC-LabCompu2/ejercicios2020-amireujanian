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
    if(isNaN(valor)){
        alert('Se ingreso un valor invalido');
        document.unidades.unid_metro.value="";
        document.unidades.unid_pulgada.value = "";
        document.unidades.unid_pie.value = "";
        document.unidades.unid_yarda.value = "";
    }else if(id=="metro"){
        document.unidades.unid_pulgada.value = 39.3701*valor;
        document.unidades.unid_pie.value = 3.28084*valor;
        document.unidades.unid_yarda.value = 1.09361*valor;
    }else if(id=="yarda"){
        document.unidades.unid_pulgada.value = 36*valor;
        document.unidades.unid_pie.value = 3*valor;
        document.unidades.unid_metro.value = 0.9144*valor;
    }else if(id=="pie"){
        document.unidades.unid_pulgada.value = 12*valor;
        document.unidades.unid_metro.value = 0.3048*valor;
        document.unidades.unid_yarda.value = 0.333333*valor;
    }else if(id=="pulgada"){
        document.unidades.unid_pie.value = 0.0833333*valor;
        document.unidades.unid_metro.value = 0.0254*valor;
        document.unidades.unid_yarda.value = 0.0277778*valor;
    }
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

        document.getElementsByName("sum_total")[0].value = Number(num1) + Number(num2);
}

function calcularResta(){
    var num1, num2;

    num1=document.getElementsByName("res_num1")[0].value;
    num2=document.getElementsByName("res_num2")[0].value;

    document.getElementsByName("res_total")[0].value = Number(num1) - Number(num2);
}

function calcularMul(){
    var num1, num2;

    num1=document.getElementsByName("mul_num1")[0].value;
    num2=document.getElementsByName("mul_num2")[0].value;

    document.getElementsByName("mul_total")[0].value = Number(num1) * Number(num2);
}

function calcularDiv(){
    var num1, num2;

    num1=document.getElementsByName("div_num1")[0].value;
    num2=document.getElementsByName("div_num2")[0].value;

    document.getElementsByName("div_total")[0].value = Number(num1) / Number(num2);
}