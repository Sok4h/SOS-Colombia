// To logout firebase.auth().signOut();
const login = () => {
  const auth = firebase.auth();
  const id = document.getElementById("id").value;
  const password = document.getElementById("password").value;

  return auth.signInWithEmailAndPassword(`${id}@correo.com`, password);
};
