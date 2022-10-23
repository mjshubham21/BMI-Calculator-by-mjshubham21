let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const ht = parseFloat(document.getElementById("height").value);
    const wt = parseFloat(document.getElementById("weight").value);
    const result= document.getElementById("output");
    let h_status= false;
    let w_status= false;
    
    if(ht ==="" || isNaN(ht) || (ht<=0)){
        document.getElementById("h_err").innerHTML= "Invalid Input.";        
    } else {
        document.getElementById("h_err").innerHTML= "";
       h_status=true;
    }
    if(wt ==="" || isNaN(wt) || (wt<=0)){
        document.getElementById("w_err").innerHTML= "Invalid Input.";        
    } else {
        document.getElementById("w_err").innerHTML= "";
       w_status=true;
    }

    if (h_status && w_status) {
        const bmi = (wt/ (ht*ht)/ 10000).toFixed(2);

        if(bmi <18.6){
          result.innerHTML= "You are Under Weight!!";
        } else if(bmi >=18.6 && bmi <=24.9){
            result.innerHTML= "You have normal Weight!!";
        } else if(bmi >24.9){
            result.innerHTML= "You are Over Weight!!";
        }
    } else{
        alert("Form ha errors!!");
        result.innerHTML= "";
    }
});