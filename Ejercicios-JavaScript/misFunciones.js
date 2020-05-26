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


