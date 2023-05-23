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

  // Clear the search results
  function clearResults() {
    $("#results").empty();
  }

  // Add the no results result to the search results
  function showNoResults() {
    const result = $("<div>").addClass(
      "my-1 p-3 bg-secondary text-white rounded shadow-sm"
    );
    const title = $("<h5>").append("No results found");
    const description = $("<p>").append(
      "This just looks like it's not your lucky day."
    );
    result.append(title).append(description).appendTo("#results");
  }

  // Add the event json record to the search results
  function addToResults(event) {
    const result = $("<div>").addClass("my-1 p-3 bg-light rounded shadow-sm");
    const title = $("<a>")
      .attr("href", event.url)
      .attr("target", "_blank")
      .append($("<h5>").append(event.name));
    const description = $("<p>").append(event.description);
    // Create and append the result to the results list
    result.append(title).append(description).appendTo("#results");
  }

  // Return result filter function
  function searchFilter(value) {
    return (event) => {
      return !value
        ? // If there was no filter return anything
          true
        : // Filters results by name, category, or description
          event.name?.toLowerCase()?.includes(value) ||
            event.category?.toLowerCase()?.includes(value) ||
            event.description?.toLowerCase()?.includes(value);
    };
  }

  // Search the jQuery events
  function search(value) {
    clearResults();
    // Get the events json file contents
    $.getJSON("events.json", (data) => {
      const filter = searchFilter(value?.toLowerCase());
      const results = data.events.filter(filter);
      // If there are no results then show the no results
      if (results.length === 0) return showNoResults();
      // Iterate the results added to the results list
      results.forEach(addToResults);
    });
  }

  // Fail to search anything
  function cursedSearch(_) {
    // Clear search results
    clearResults();
    // Get the native json file that doesn't exist
    $.getJSON("native.json", (_) => {
      /* Never gonna reach here. */
    }).fail(showNoResults);
  }

  $("#search").click(() => search($("#searchInput").val()));
  $("#unluckySearch").click(() => cursedSearch($("#searchInput").val()));

  $(document)
    .ajaxComplete(() => increment(".complete--count"))
    .ajaxError(() => increment(".error--count"))
    .ajaxSend(() => increment(".send--count"))
    .ajaxStart(() => increment(".start--count"))
    .ajaxStop(() => increment(".stop--count"))
    .ajaxSuccess(() => increment(".success--count"));
});
