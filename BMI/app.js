document.querySelector(".submit").addEventListener("click",calc);

function calc(){
    var weight = parseFloat(document.querySelector(".weight").value);
    var height = parseFloat(document.querySelector(".height").value);
    // console.log(weight,height);
    var bmi = weight/(height*height);
    bmi = bmi.toFixed(2);
    document.querySelector(".output").innerHTML=bmi;
}