const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const resultDiv = document.getElementById("result");

startBtn.addEventListener("click", () => {
  resultDiv.classList.remove("visible", "passed", "failed");
  resultDiv.innerHTML = "";
  resetBtn.style.display = "none";
  startBtn.disabled = true; // disable while prompting

  let numbers = [];
  for (let i = 0; i < 5; i++) {
    let input;
    do {
      input = prompt(`Enter number ${i + 1} (0 to 100):`);
      if (input === null) {
        // User canceled input, reset UI and stop
        startBtn.disabled = false;
        return;
      }
      input = input.trim();

      if (input === "" || isNaN(input)) {
        alert("Invalid input! Please enter a valid number.");
      } else if (Number(input) < 0 || Number(input) > 100) {
        alert("Please enter a number between 0 and 100.");
      } else {
        break; // valid input
      }
    } while (true);

    const num = Number(input);
    numbers.push(num);

    // Log each input to the console as it's entered
    console.log(`Input ${i + 1}:`, num);
  }

  const total = numbers.reduce((acc, val) => acc + val, 0);
  const average = total / numbers.length;

  // Log the collected inputs and computed values
  console.log("Inputs:", numbers);
  console.log(`Sum: ${total.toFixed(2)}, Average: ${average.toFixed(2)}`);

  if (average > 75) {
    console.log("Result: Passed");
    resultDiv.innerHTML = `
      <svg class="icon passed" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M20 6L9 17l-5-5"/>
      </svg>
      <div>Passed</div>
      <div>Sum: ${total.toFixed(2)}</div>
      <div>Average: ${average.toFixed(2)}</div>
    `;
    resultDiv.className = "result visible passed";
  } else {
    console.log("Result: Failed");
    resultDiv.innerHTML = `
      <svg class="icon failed" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
      <div>Failed</div>
      <div>Sum: ${total.toFixed(2)}</div>
      <div>Average: ${average.toFixed(2)}</div>
      <div class="tip">
        Try harder next time!
      </div>
    `;
    resultDiv.className = "result visible failed";
  }

  resetBtn.style.display = "inline-block";
  startBtn.style.display = "none"; // Hide Start button here
  startBtn.disabled = false;
});

resetBtn.addEventListener("click", () => {
  resultDiv.classList.remove("visible", "passed", "failed");
  resultDiv.innerHTML = "";
  resetBtn.style.display = "none";
  startBtn.style.display = "inline-block"; // Show Start button again
  startBtn.disabled = false;

  // Clear the browser console outputs (may be restricted by some browser consoles)
  console.clear();
});
