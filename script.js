// html elements
const contact = document.querySelector(".call-us");
const contactDropdown = document.querySelector(".dropdown-container");
// const a = document.getElementById("currency")
const currency = document.querySelector(".currency-top-info");
const currencyDropdown = document.querySelector(".currency-dropdown-container");
const profile = document.querySelector(".profile-info");
const profileDropdown = document.querySelector(".profile-dropdown");
// console.log(currency, a);
// contact dropdown
contact.addEventListener("click", () => {
  if (contactDropdown.style.display == "none") {
    contactDropdown.style.display = "block";
  } else {
    contactDropdown.style.display = "none";
  }s
});

// currency dropdown
currency.addEventListener("click", () => {
    // console.log(target);
  if (currencyDropdown.style.display == "none") {
    currencyDropdown.style.display = "block";
  } else {
    currencyDropdown.style.display = "none";
  }
});

// profile dropdown
profile.addEventListener("click", () => {
  if (profileDropdown.style.display == "none") {
    profileDropdown.style.display = "block";
  } else {
    profileDropdown.style.display = "none";
  }
});

// // contact */ dropdown
// document.addEventListener("click", (e) => {
//     if (!contact.contains(e.target)) {
//       contactDropdown.style.display = "none";
//     }
//     contactDropdown.style.display = "block";
//   });