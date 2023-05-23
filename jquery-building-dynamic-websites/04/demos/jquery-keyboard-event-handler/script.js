// Document ready
$(() => {
  // Increment the event count
  function increment(selector) {
    const obj = $(selector);
    try {
      const count = parseInt(obj.text()) + 1;
      obj.text(count);
    } catch {
      obj?.text("0");
    }
  }

  // Display the key value of the event
  function updateKeyValue(selector, event) {
    $(selector).text(event.which);
  }

  // Record textbox keyboard input
  $("#keyboardInput")
    .keydown((event) => {
      increment(".keydown--count");
      updateKeyValue(".keydown--which", event);
    })
    .keypress((event) => {
      increment(".keypress--count");
      updateKeyValue(".keypress--which", event);
    })
    .keyup((event) => {
      increment(".keyup--count");
      updateKeyValue(".keyup--which", event);
    });
});
