//your JS code here. If required.
function updateText() {
  // Create a promise that resolves with the string "Hello, world!" after 1 second
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });

  // Update the text of the HTML element with ID "output" after the promise resolves
  promise.then((text) => {
    $("#output").text(text);
  });
}

// Call the function to update the text
updateText();