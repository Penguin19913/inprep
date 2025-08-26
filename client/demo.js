// 🎲 demo.js — Random Demo Script
// Run: node demo.js

// Generate an array of 10 random numbers (1–100)
const numbers = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 100) + 1
);

console.log("🔢 Random Numbers:", numbers);

// Filter out only even numbers
const evens = numbers.filter((n) => n % 2 === 0);
console.log("✨ Even Numbers:", evens);

// Find the max number
const max = Math.max(...numbers);
console.log("🏆 Maximum Number:", max);

// Simple function to calculate average
const average = (arr) =>
  arr.reduce((sum, n) => sum + n, 0) / arr.length;

console.log("📊 Average:", average(numbers).toFixed(2));

// Bonus: Pick a random quote
const quotes = [
  "Stay hungry, stay foolish. 🚀",
  "Code. Sleep. Repeat. 💻",
  "Hustle beats talent when talent doesn’t hustle. 🔥",
  "Small steps, big dreams. ✨",
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log("\n💡 Random Quote:", randomQuote);
