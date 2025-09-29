// Alive Calculator
function calculateAge() {
  const birthday = new Date(document.getElementById("birthday").value);
  if (!birthday) return;
  const now = new Date();
  const diffMs = now - birthday;

  const years = Math.floor(diffMs / (365.25 * 24 * 60 * 60 * 1000));
  const months = Math.floor(diffMs / (30.44 * 24 * 60 * 60 * 1000));
  const weeks = Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000));
  const days = Math.floor(diffMs / (24 * 60 * 60 * 1000));

  document.getElementById("aliveResult").innerHTML =
    `You have been alive for:<br>
     ${years} years<br>
     ${months} months<br>
     ${weeks} weeks<br>
     ${days} days`;
}

// Days Since
function calculateSince() {
  const input = document.getElementById("sinceDate").value;
  if (!input) return;

  const pastDate = new Date(input);
  const now = new Date();
  const diffMs = now - pastDate;

  const years = Math.floor(diffMs / (365.25 * 24 * 60 * 60 * 1000));
  const months = Math.floor(diffMs / (30.44 * 24 * 60 * 60 * 1000));
  const weeks = Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000));
  const days = Math.floor(diffMs / (24 * 60 * 60 * 1000));

  document.getElementById("sinceResult").innerHTML =
    `It has been:<br>
     ${years} years<br>
     ${months} months<br>
     ${weeks} weeks<br>
     ${days} days since ${pastDate.toDateString()}`;
}

// Days Till
function calculateTill() {
  const input = document.getElementById("tillDate").value;
  if (!input) return;

  const futureDate = new Date(input);
  const now = new Date();
  const diffMs = futureDate - now;

  if (diffMs < 0) {
    document.getElementById("tillResult").innerHTML = "That date has already passed!";
    return;
  }

  const years = Math.floor(diffMs / (365.25 * 24 * 60 * 60 * 1000));
  const months = Math.floor(diffMs / (30.44 * 24 * 60 * 60 * 1000));
  const weeks = Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000));
  const days = Math.floor(diffMs / (24 * 60 * 60 * 1000));

  document.getElementById("tillResult").innerHTML =
    `There are:<br>
     ${years} years<br>
     ${months} months<br>
     ${weeks} weeks<br>
     ${days} days until ${futureDate.toDateString()}`;
}

// Time Since
function timeSince() {
  const input = document.getElementById("sinceTime").value;
  if (!input) return;

  const now = new Date();
  const [hours, minutes] = input.split(":").map(Number);
  const givenTime = new Date();
  givenTime.setHours(hours, minutes, 0, 0);

  let diffMs = now - givenTime;
  if (diffMs < 0) {
    document.getElementById("timeSinceResult").innerHTML = "That time hasn’t happened yet today!";
    return;
  }

  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("timeSinceResult").innerHTML =
    `It has been ${diffHours} hours and ${diffMinutes} minutes since ${input}`;
}

// Time Till
function timeTill() {
  const input = document.getElementById("tillTime").value;
  if (!input) return;

  const now = new Date();
  const [hours, minutes] = input.split(":").map(Number);
  const futureTime = new Date();
  futureTime.setHours(hours, minutes, 0, 0);

  let diffMs = futureTime - now;
  if (diffMs < 0) {
    document.getElementById("timeTillResult").innerHTML = "That time already passed today!";
    return;
  }

  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("timeTillResult").innerHTML =
    `There are ${diffHours} hours and ${diffMinutes} minutes until ${input}`;
}
