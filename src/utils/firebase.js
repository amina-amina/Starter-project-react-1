  import firebase from 'firebase/app'
  import 'firebase/auth'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAXdH7V4kFXeqRxwGzPYq-WMAz-dnetM5g",
  authDomain: "ecommerce-website-a46e5.firebaseapp.com",
  projectId: "ecommerce-website-a46e5",
  storageBucket: "ecommerce-website-a46e5.appspot.com",
  messagingSenderId: "1013292514679",
  appId: "1:1013292514679:web:43887f58151b54e4e3f572"
  };

  const app=firebase.initializeApp(firebaseConfig);
  // exporter notre base de donnees 
  export default app;
  // export the auth app
 export const auth = app.auth();
 