
function DeleteMyRequest(userID, requestID) {

    db.collection("request")
        .where("author", "==", userID)
        .doc(requestID)
        .delete()
        .then(() =>{
            console.log("Document succesfully deleted");
        })
        .catch(err =>{
            console.log("Error deleting"+ err.message);
        })
}