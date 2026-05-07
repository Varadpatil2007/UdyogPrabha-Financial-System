import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import {
  getStorage, ref, uploadBytesResumable, getDownloadURL
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-storage.js";
import {
  getFirestore, collection, addDoc, serverTimestamp
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDojm8pKxG7VkNIexMgwXcOLgR9NvglXb4",
    authDomain: "udyog-prabha.firebaseapp.com",
    projectId: "udyog-prabha",
    storageBucket: "udyog-prabha.appspot.com",  // Corrected storageBucket
    messagingSenderId: "782065175132",
    appId: "1:782065175132:web:b07979398c85d4bad0f499"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

document.getElementById('loanForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const fullName = form.fullName.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const loanAmount = form.loanAmount.value;

  const filesToUpload = {
    panCard: form.panCard.files[0],
    aadhaarCard: form.aadhaarCard.files[0],
    itr: form.itr.files,
    bankStatement: form.bankStatement.files[0],
    projectReport: form.projectReport.files[0],
    shopAct: form.shopAct.files[0],
    udyamAadhar: form.udyamAadhar.files[0],
    gstCertificate: form.gstCertificate.files[0],
    propertyCard: form.propertyCard.files[0],
    sevenTwelve: form.sevenTwelve.files[0],
    electricityBill: form.electricityBill.files[0],
    rentalAgreement: form.rentalAgreement.files[0]
  };

  const uploadedFiles = {};

  for (let key in filesToUpload) {
    const file = filesToUpload[key];
    if (file instanceof FileList) {
      uploadedFiles[key] = [];
      for (let i = 0; i < file.length; i++) {
        const url = await uploadFile(file[i], `${key}_${i}`, fullName);
        uploadedFiles[key].push(url);
      }
    } else {
      uploadedFiles[key] = await uploadFile(file, key, fullName);
    }
  }

  await addDoc(collection(db, "loanApplications"), {
    fullName,
    email,
    phone,
    loanAmount,
    documents: uploadedFiles,
    submittedAt: serverTimestamp()
  });

  alert("Application Submitted Successfully!");
  form.reset();
});

async function uploadFile(file, name, fullName) {
  return new Promise((resolve, reject) => {
    const filePath = `loanApplications/${fullName}/${name}_${Date.now()}`;
    const storageRef = ref(storage, filePath);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed", null, reject, async () => {
      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      resolve(downloadURL);
    });
  });
}
