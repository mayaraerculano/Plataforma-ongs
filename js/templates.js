export function createAlert(message, type = "success") {
  const div = document.createElement("div");
  div.className = `alert alert-${type}`;
  div.textContent = message;
  return div;
}