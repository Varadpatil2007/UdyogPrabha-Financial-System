// Handle form submission
document.getElementById('auditForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Optional: Replace with Firebase, SheetDB, or AJAX integration
    document.getElementById('formMsg').textContent = "Your request has been submitted successfully!";
    this.reset();
  });
  