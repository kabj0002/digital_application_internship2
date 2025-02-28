//Scroll effects
// document.addEventListener("DOMContentLoaded", function () {
//   const sections = document.querySelectorAll(
//     "section, .skills-container:not(.div_footer)"
//   );
//   const images = document.querySelectorAll("img");
//   const texts = document.querySelectorAll("p, h1, h2, h3, h4");

//   function handleScroll() {
//     const scrollY = window.scrollY + window.innerHeight * 0.6; // Trigger effects earlier

//     sections.forEach((section) => {
//       if (scrollY > section.offsetTop) {
//         section.style.padding = "12vh 5vw"; // More white space effect
//         section.style.opacity = "1";
//         section.style.transform = "translateY(0)";
//       } else {
//         section.style.padding = "6vh 5vw";
//         section.style.opacity = "0.6";
//         section.style.transform = "translateY(40px)";
//       }
//     });

//     images.forEach((img) => {
//       if (scrollY > img.offsetTop) {
//         img.style.filter = "saturate(1)";
//         img.style.transform = "scale(1)";
//       } else {
//         img.style.filter = "saturate(0)";
//         img.style.transform = "scale(0.95)";
//       }
//     });

//     texts.forEach((text) => {
//       const textOffset = text.offsetTop - window.innerHeight * 0.2; // Appear higher up
//       if (scrollY > textOffset) {
//         text.style.opacity = "1";
//         text.style.transform = "translateY(0)";
//         text.style.transition =
//           "opacity 0.8s ease-out, transform 0.8s ease-out";
//       } else {
//         text.style.opacity = "0";
//         text.style.transform = "translateY(30px)";
//       }
//     });
//   }

//   window.addEventListener("scroll", handleScroll);
//   handleScroll(); // Run on page load
// });

//Mode switcher
// Dropdown selection
const theStoredTheme = localStorage.getItem("storedTheme");
console.log("storedTheme", theStoredTheme);
if (theStoredTheme !== null) {
  document.querySelector("body").dataset.theme = theStoredTheme;
}
document.querySelector("select").addEventListener("change", theChange);

function theChange(event) {
  const chosenTheme = event.target.value;
  //console.log("change", chosenTheme);

  document.querySelector("body").dataset.theme = chosenTheme;
  localStorage.setItem("storedTheme", chosenTheme);
}
