// blog-1.js

// Scroll to top when the page loads
window.addEventListener("load", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  // Optional: Highlight active navigation link (for future use)
  document.querySelectorAll("nav a").forEach(link => {
    if (window.location.href.includes(link.getAttribute("href"))) {
      link.classList.add("text-blue-800", "font-semibold");
    }
  });
  
  // Placeholder for future blog-related features
  console.log("Blog page loaded: 5 Tax Tips for Small Businesses");
  
  // Example: Show alert on clicking a CTA (if added)
  // document.querySelector(".cta-button").addEventListener("click", () => {
  //   alert("Thank you for your interest! We'll get in touch soon.");
  // });
  