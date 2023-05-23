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

  // Update the cursor position
  function updatePosition(selector, event) {
    const { pageX, pageY } = event ?? {};
    $(selector).text(`${pageX ?? 0}, ${pageY ?? 0}`);
  }

  // Handle the mouseenter and mouseleave events
  $("#mouseenterTarget")
    .mouseenter(() => increment(".mouseenter--count"))
    .mouseleave(() => increment(".mouseleave--count"));

  // Handle the mouseover and mouseout events
  $("#mouseoverTarget")
    .mouseover(() => increment(".mouseover--count"))
    .mouseout(() => increment(".mouseout--count"));

  // Handle the mousemove events
  $("#mousemoveTarget").mousemove((event) => {
    increment(".mousemove--count");
    updatePosition(".mousemove--position", event);
  });

  // Handle hover events
  $(".child").hover(
    // Mouseenter
    function () {
      // Remove class style on the element
      $(this).toggleClass("border-dark").toggleClass("shadow border-primary");
    },
    // Mouseleave
    function () {
      // Add class style on the element
      $(this).toggleClass("border-dark").toggleClass("shadow border-primary");
    }
  );
});
