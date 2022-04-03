function price(){
    let name, surname, age, gender, package;


    name = document.getElementById('name').value;
    surname = document.getElementById('surname').value;
    age = document.getElementById('age').value;
    gender = document.getElementById('gender').value.toLowerCase();
    package = document.getElementById('package').value;

    if(name == ""){
        document.getElementById('price-info').value = "Enter name";

    }else if(surname == "") 
    {
        document.getElementById('price-info').value = "Enter surname";

    }else if(age == "") 
    {
        document.getElementById('price-info').value = "Enter age";

    }else if(gender == "" || (gender !== 'male' && gender !== 'female')) 
    {
        document.getElementById('price-info').value = "Male / Female";

    }else if(package == "")
    {
        document.getElementById('price-info').value = "Choose package";

    }
    else{

        if(package == "monthly"){
            if(gender == "female"){
                let discount = 0.80 * 50;
                document.getElementById('price-info').value = "20% discount Price for your package is: " + discount.toString() + " KM";
            }else{
                document.getElementById('price-info').value = "50 KM";
            }
        }else if(package == "3x"){

            document.getElementById('price-info').value = "40 KM";

        }else if(package == "half"){

            if(gender == "female"){
                let discount = 0.833 * 30;
                document.getElementById('price-info').value = "17% discount Price for your package is: " + discount.toString() + " KM";
            }else{
                document.getElementById('price-info').value = "30 KM";
            }

        }else if(package == "daily"){

            document.getElementById('price-info').value = "7 KM";

        }else if(package == "student"){

            document.getElementById('price-info').value = "40 KM";

        }else if(package == "group"){

            document.getElementById('price-info').value = "60 KM";

        }else if(package == "senior"){
            if(age < 60){
                document.getElementById('price-info').value = "You aren't senior";
            }else if(gender == "female"){
                let discount = 0.85 * 30;
                document.getElementById('price-info').value = "15% discount Price for your package is: " + discount.toString() + " KM";
            }
            else{
                document.getElementById('price-info').value = "30 KM";
            }
        }
    }
}