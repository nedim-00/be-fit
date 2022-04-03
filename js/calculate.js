function calculate(){
    let height = document.getElementById('height').value;
    let weigh = document.getElementById('weight').value;

    let result = document.getElementById('result');
    let bmi = (weigh / ((height/100) * (height/100))).toFixed(2)
    
    if(bmi<18.5)
        result.value = (bmi + ' - underweight');
    else if(bmi>18.5 && bmi<24.9)
        result.value = (bmi + ' - healthy weight');
    else if(bmi>25 && bmi<29.9)
        result.value = (bmi + ' - overweight');
    else if(bmi>30)
        result.value = (bmi + ' - obesity');
    else
        result.value = "Wrong value";
}