
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCuxzbdg90g5Ih-kkwqTkJBYyiseaZ1yx0",
  authDomain: "cocker-59baa.firebaseapp.com",
  projectId: "cocker-59baa",
  messagingSenderId: "336923549983",
  appId: "1:336923549983:web:f6b18fbda5ab290fc3d02a"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icons/placerocked.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
