const notifications = document.querySelectorAll(".notification-item");
const badge = document.querySelector(".badge");
const markButton = document.querySelector(".mark-all");
let countNotifications = 0;
function markNotification() {
  notifications.forEach((item) => {
    item.classList.remove("new");
  });
  checkNotification();
}
function checkNotification() {
  countNotifications = [...notifications].filter((item) =>
    item.classList.contains("new")
  ).length;
  badge.textContent = countNotifications;
  if (countNotifications) {
    markButton.classList.add("active");
  } else {
    markButton.classList.remove("active");
  }
}
checkNotification();
markButton.addEventListener("click", markNotification);
notifications.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (event.currentTarget.classList.contains("new")) {
      event.currentTarget.classList.remove("new");
      checkNotification()
    }
  });
});