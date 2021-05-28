window.addEventListener("load", () =>{

    const copyNumberBtn = document.getElementById("copy-number");

    copyNumberBtn.addEventListener("click", () =>{
        /* Get the text field */
        var copyText = document.getElementById("number-copy");
      
        /* Select the text field */
        copyText.innerHTML;
         /* For mobile devices */
      
        /* Copy the text inside the text field */
        document.execCommand("copy");
      
        /* Alert the copied text */
        alert("Texto copiado");
    });

   

      
})

