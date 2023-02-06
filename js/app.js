let string = "";

let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button)=>{

      button.addEventListener("click", (e)=>{
        console.log(e.target)

        
    if(e.target.innerHTML === "="){
        string = eval(string);
   
        console.log(string)

        document.querySelector(".value").value = string
    }

   else if(e.target.innerHTML === "C"){
        string = "";
   
        console.log(string)

        document.querySelector(".value").value = string
    }


    else{
        string = string + e.target.innerHTML;
    //    console.log(string)

        document.querySelector(".value").value = string
    }
      })
})