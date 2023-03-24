function updateText() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

updateText()
  .then((text) => {
    document.getElementById("output").textContent = text;
  })
  .catch((error) => {
    console.error(error);
  });