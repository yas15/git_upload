// Document ready
$(() => {
  // Clear table
  $("#clear").on("click", (event) => {
    event.preventDefault();
    $("tbody").empty();
  });

  // Log events
  function log(...args) {
    $("tbody").append(
      $("<tr>").append(args.map((arg) => `<td>${arg}</td>`).join())
    );
  }

  // Callback function
  const eventHandler = function (event) {
    log(event.target.id, event.type);
  };

  // Button event registrations
  $("#clickMe")
    .contextmenu(eventHandler)
    .mousedown(eventHandler)
    .mouseup(eventHandler)
    .click(eventHandler)
    .dblclick(eventHandler);
});
