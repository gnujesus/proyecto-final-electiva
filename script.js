// Update the current time
function updateTime() {
  const timeElement = document.getElementById("current-time")
  const now = new Date()
  timeElement.textContent = `Current time: ${now.toLocaleTimeString()}`
}

// Update time immediately and then every second
updateTime()
setInterval(updateTime, 1000)
