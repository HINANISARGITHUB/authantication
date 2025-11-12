// import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
// import { getAuth,  createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
// import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
// const firebaseConfig = {
//   apiKey: "AIzaSyCnTzXn2LKZC6upzp26Lkhr1f4LLmHBPi4",
//   authDomain: "authentication-app-d3685.firebaseapp.com",
//   projectId: "authentication-app-d3685",
//   storageBucket: "authentication-app-d3685..appspot.com",
//   messagingSenderId: "901036403675",
//   appId: "1:901036403675:web:922f0e046e9dbf8dfa95fe",
//   measurementId: "G-ZEX9ZXFDBB",
// };

// const app = initializeApp(firebaseConfig);  // give a data of sign and up of login people that who enter in data and app
// const analytics = getAnalytics(app);

// const auth = getAuth(app);


// // signUp
// document.getElementById("signUp")?.addEventListener("click", () => {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   createUserWithEmailAndPassword(auth, email, password)
//     .then(() => {
//       alert("SignUp Successfully");
//       window.location.href = "welcome.html";
//     })

//     .catch (error => document.getElementById("error").innerText = error.message)
    
// })

// // login

// document.getElementById("login")?.addEventListener("click", () => {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     signInWithEmailAndPassword(auth, email, password)
//         .then(() => {
//             alert("Login Successful");
//             window.location.href = "welcome.html";
//         })
//         .catch(error => document.getElementById("message").innerText = error.message);
// });

// export function logout() {
//     signOut(auth)
//         .then(() => {
//             alert("Logged out");
//             window.location.href = "index.html";
//         })
//         .catch(error => console.error("Logout Error:", error));
// }
// document.getElementById("logoutBtn")?.addEventListener("click", logout);


// //////////////////////////////////////////////////////////////////////////////////////////


import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup,  signOut, onAuthStateChanged, sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
// import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCnTzXn2LKZC6upzp26Lkhr1f4LLmHBPi4",
  authDomain: "authentication-app-d3685.firebaseapp.com",
  projectId: "authentication-app-d3685",
  storageBucket: "authentication-app-d3685.appspot.com",
  messagingSenderId: "901036403675",
  appId: "1:901036403675:web:922f0e046e9dbf8dfa95fe",
  measurementId: "G-ZEX9ZXFDBB",
};

const app = initializeApp(firebaseConfig);  // give a data of sign and up of login people that who enter in data and app
const analytics = getAnalytics(app);

const auth = getAuth(app);
const googleAuth = new GoogleAuthProvider();  // variable name it depend on us by default it name provider


// const provider = new GithubAuthProvider();

// signUp
document.getElementById("signUp-btn")?.addEventListener("click", () => {
  const signupEmail = document.getElementById("signup-email").value;
  const signupPassword = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
   .then(() => {
    alert("SignUp Successfully");
      window.location.href = "welcome.html";
   })
     .catch (error => document.getElementById("error").innerText = error.message)
    
  })

//login

document.getElementById("login-btn")?.addEventListener("click", () => {
  const loginEmail = document.getElementById("login-email").value;
  const loginPassword = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then(() => {
      alert("Login Successfully");
      window.location.href = "welcome.html";
    })

    .catch(error => document.getElementById("error").innerText = error.message)
    
})

// continue with google

document.getElementById('google-btn')?.addEventListener('click', () => {
  signInWithPopup(auth, googleAuth )
  .then(() => {
    alert('Login Successfully');
    window.location.href = 'welcome.html';
  })
  .catch(error => document.getElementById("error").innerText = error.message)  // single line arrow function
})

// continue with githup

// document.getElementById('githup-btn')?.addEventListener('click', () => {
//   signInWithPopup(auth, provider )
//   .then(() => {
//     alert('Login Successfully');
//     window.location.href = 'window.html';
//   })
//   .catch(error => document.getElementById("error").innerText = error.message)  // single line arrow function
// })




// Logout
document.getElementById("logout")?.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("LogOut Successfully!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error.message);  // multi line arrow function
    });
});

// // Reset Password
document.getElementById("reset-password-link")?.addEventListener("click", (e) => {
  e.preventDefault(); 
  const email = prompt("Please enter your email address:");

  if (email) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent! Check your inbox.");
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  } else {
    alert("Please enter a valid email address.");
  }
});

// Show User Email on Welcome Page
onAuthStateChanged(auth, (user) => {
  if (user && window.location.pathname.includes("welcome.html")) {
    document.getElementById("user-email").textContent = user.email;
  } else if (!user && window.location.pathname.includes("welcome.html")) {
    window.location.href = "index.html";
  }
});


// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     document.getElementById("welcomeMsg").innerText = `Welcome, ${user.email}`;
//   }
// });


// GithubAuthProvider, 
