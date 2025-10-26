const Button = document.querySelector('#calculate-btn');
const bmi_output = document.querySelector('#bmi-output');
const category_output = document.querySelector('#bmi-category');


Button.addEventListener( "click" , () => {
    const Height=document.querySelector('#height').value;
    const Weight=document.querySelector('#weight').value;
    if(Height > 0 && Weight > 0){
        const bmi=parseFloat(Weight) / ((parseFloat(Height)/100) * (parseFloat(Height)/100));
        bmi_output.innerText = bmi.toFixed(2);
        let category = '';
        if(bmi<18.5){
            category = 'Underweight';
        }
        else if(bmi>=18.5 && bmi<24.9){
            category = 'Normal weight';
        }
        else if(bmi>=25 && bmi<29.9){
            category = 'Overweight';
        }
        else{
            category = 'Obesity';
        }
        category_output.innerText = category;
    }
    else{
        alert('Please enter valid height and weight');
    }


})