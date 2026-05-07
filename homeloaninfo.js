// Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  
  const uploadFile = (file, path, progressElement) => {
    const storageRef = storage.ref(path);
    const uploadTask = storageRef.put(file);
  
    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      progressElement.value = progress;
    }, (error) => {
      console.log('Error uploading file:', error);
    });
  };
  
  // Form submission handling
  document.getElementById("loanForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const files = [
      { id: "pan", path: "home_loan/pan" },
      { id: "aadhaar", path: "home_loan/aadhaar" },
      { id: "itr", path: "home_loan/itr" },
      { id: "salary", path: "home_loan/salary" },
      { id: "registration", path: "home_loan/registration" },
      { id: "bank", path: "home_loan/bank" },
      { id: "permission", path: "home_loan/permission" },
      { id: "propertycard", path: "home_loan/propertycard" },
      { id: "estimate", path: "home_loan/estimate" },
      { id: "propertydoc", path: "home_loan/propertydoc" },
      { id: "rera", path: "home_loan/rera" },
    ];
  
    files.forEach(fileData => {
      const fileInput = document.getElementById(fileData.id);
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const progressElement = document.getElementById(fileData.id + "Progress");
        uploadFile(file, fileData.path, progressElement);
      }
    });
  });
  