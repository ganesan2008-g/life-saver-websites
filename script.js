
const donors = [
  { name: "Demo Donor 1", blood: "O+", city: "Salem" },
  { name: "Demo Donor 2", blood: "A+", city: "Chennai" },
  { name: "Demo Donor 3", blood: "B+", city: "Salem" },
  { name: "Demo Donor 4", blood: "O-", city: "Madurai" },
  { name: "Demo Donor 5", blood: "AB+", city: "Chennai" },
  { name: "Demo Donor 6", blood: "O+", city: "Coimbatore" }
];

const bloodInput = document.getElementById("blood");
const cityInput = document.getElementById("city");
const searchBtn = document.getElementById("searchBtn");
const message = document.getElementById("message");
const results = document.getElementById("results");

searchBtn.addEventListener("click", function () {
  const blood = bloodInput.value;
  const city = cityInput.value.trim().toLowerCase();

  const matches = donors.filter(function (donor) {
    const bloodMatch = blood === "" || donor.blood === blood;
    const cityMatch =
      city === "" || donor.city.toLowerCase().includes(city);

    return bloodMatch && cityMatch;
  });

  results.replaceChildren();

  if (matches.length === 0) {
    message.textContent = "பொருத்தமான Demo Donor கிடைக்கவில்லை.";
    return;
  }

  message.textContent = matches.length + " Demo result(s) கிடைத்தன.";

  matches.forEach(function (donor) {
    const card = document.createElement("div");
    card.className = "donor";

    const name = document.createElement("h3");
    name.textContent = donor.name;

    const details = document.createElement("p");
    details.textContent =
      "Blood Group: " + donor.blood + " | City: " + donor.city;

    card.append(name, details);
    results.appendChild(card);
  });
});
