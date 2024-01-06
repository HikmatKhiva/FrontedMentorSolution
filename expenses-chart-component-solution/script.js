const chartBody = document.querySelector(".chart-body");
const loading = document.querySelector(".loading");
async function fetchData() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3500));
    const response = await fetch("./data.json");
    const data = await response.json();
    if (response.ok) {
      addChart(data);
    }
  } catch (err) {
    console.log(err);
  }
}

function addChart(value) {
  const maxValue = Math.max(...value.map((item) => item.amount));
  value.forEach((item) => {
    const chart = createChart(item, maxValue);
    chartBody.appendChild(chart);
  });
}
function createChart(item, max = 0) {
  const chartItem = document.createElement("div");
  const chart = document.createElement("div");
  const date = document.createElement("p");
  chartItem.classList.add("chart-item");
  chart.classList.add("chart");
  date.classList.add("chart-day");
  if (max === item.amount) {
    chart.classList.add("max");
  }
  chart.style.height = `calc(${Math.floor(item.amount)}%)`;
  chart.setAttribute("data-price", item.amount);
  date.textContent = item.day;
  chartItem.appendChild(chart);
  chartItem.appendChild(date);
  return chartItem;
}

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => loading.classList.add("hide"), 3000);
  fetchData();
});
