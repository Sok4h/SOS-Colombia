const deleteDialog = document.querySelector(".dialogDeleteRequest");
var card;

const ActivateDialog =(event) =>{

    deleteDialog.classList.remove("hidden");
    window.scrollTo(0,0);
    card = event.target.closest('.card');

}

const GetCard =()=>{

    return card;
}

const CloseDialog =()=>{

    deleteDialog.classList.add("hidden");

}