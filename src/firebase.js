import firebase from 'firebase'

const  firebaseConfig = {
    apiKey: "AIzaSyBRg480t4M2dzKhlpLfzsI2CVEkk-UG9YU",
    authDomain: "ibobatakaigi-with-wat.firebaseapp.com",
    projectId: "ibobatakaigi-with-wat",
    storageBucket: "ibobatakaigi-with-wat.appspot.com",
    messagingSenderId: "456876725228",
    appId: "1:456876725228:web:5adc2a4f144a5a9ec4e6c9"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const messageRef = database.ref('messages')

  export const pushMessage = ({name,text}) => {
      messageRef.push({name,text})
  }
