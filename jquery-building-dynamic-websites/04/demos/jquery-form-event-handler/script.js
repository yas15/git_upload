// Document ready
$(() => {
  // Log data to table
  function log(...args) {
    $("tbody").append(
      $("<tr>").append(args.map((arg) => `<td>${arg}</td>`).join())
    );
  }

  // Clear table values
  $("#clear").click(() => {
    $("tbody").empty();
  });

  // Record the type of event fired
  const eventHandler = function (event) {
    log(event.type, "fired");
  };

  // Log textbox input events
  $("#keyboardInput")
    .focusin(eventHandler)
    .focus(eventHandler)
    .focusout(eventHandler)
    .blur(eventHandler)
    .select(eventHandler)
    .change(eventHandler);

  // Set focus to the textbox
  $("#setFocus").click(() => $("#keyboardInput").focus());

  // Submit the form
  $("#submitForm").click(() => $("#form").submit());
});
