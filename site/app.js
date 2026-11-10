import { calculateProgress } from "./logic.js";

const completed = 8;
const total = 10;
const progress = calculateProgress(completed, total);

document.getElementById("completed").textContent = completed;
document.getElementById("total").textContent = total;
document.getElementById("progress").textContent = `${progress}%`;
document.getElementById("bar").style.width = `${progress}%`;
