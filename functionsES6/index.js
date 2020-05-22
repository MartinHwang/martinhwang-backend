import { https } from 'firebase-functions';

// helloWorld ES6 function
export let helloWorld = https.onRequest((request, response) => {
 response.send("Hello Ecmascript 6");
});

