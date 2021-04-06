//adding auth to dev skills

//import the firebase core module 
import firebase from 'firebase/app'
import 'firebase/auth'

//import auth package from firebase (special package)

const firebaseConfig = {
    apiKey: "AIzaSyCOQYNsdd7_pjTS1JNOZxxY5ZBSasD6TqI",
    authDomain: "react-dev-skills-d8803.firebaseapp.com",
    projectId: "react-dev-skills-d8803",
    storageBucket: "react-dev-skills-d8803.appspot.com",
    messagingSenderId: "608824427906",
    appId: "1:608824427906:web:d0c57b125f823c75923b9b"
  };

  // initilize the firebase app
  //activates firebase app
  firebase.initializeApp(firebaseConfig);
  
  //set up firebase provider
  //if multiple make the variable unique 
  //have to call as a function because it will give object we can configure
  const provider = new firebase.auth.GoogleAuthProvider();
  //have to have firebase/auth to be able to use 
  //app wont work without the .auth()
  const auth = firebase.auth();

  //config the firebase provider 

  //set auth actions (login/logout)
  //creates a pop up that props to login 
//use our auth variable and provider variable 
  function login(){
    auth.signInWithPopup(provider)
  }

  function logout(){
    auth.signOut()
  }

  //export the actions (export default)

  export  {
      auth,
      login,
      logout
  }