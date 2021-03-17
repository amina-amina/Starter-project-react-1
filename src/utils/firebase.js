  // Your web app's Firebase configuration
  var firebaseConfig = {
  };

  const app=firebase.initializeApp(firebaseConfig);
  // exporter notre base de donnees 
  export default fireDB;
  // export the auth app
 export const auth = app.auth();
 