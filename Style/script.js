document.getElementById("search-input").addEventListener("input", function() {
    var query = this.value.toLowerCase();
    var resultsContainer = document.getElementById("autocomplete-results");

    // Clear previous results
    resultsContainer.innerHTML = "";

    // Example with static page suggestions
    var pageSuggestions = [
        { name: "Necklaces", link: "../necklaces.html" },
        { name: "Bracelets", link: "../bracelets.html" },
        { name: "Rings", link: "../rings.html" },
        { name: "Earrings", link: "../earrings.html" },
        { name: "About", link: "../about.html" },
        { name: "Contact", link: "../contact.html" },
        { name: "FAQ", link: "../faq.html" }
    ];

    pageSuggestions.forEach(function(suggestion) {
        if (suggestion.name.toLowerCase().includes(query)) {
            var resultItem = document.createElement("div");
            resultItem.textContent = suggestion.name;
            resultItem.onclick = function() {
                window.location.href = suggestion.link;
            };
            resultsContainer.appendChild(resultItem);
        }
    });

    // Show/hide results container based on whether there are matching suggestions
    resultsContainer.style.display = resultsContainer.children.length > 0 ? "block" : "none";
});

function search() {
    // Implement your search logic here
    var query = document.getElementById("search-input").value;
    console.log("Performing search for: " + query);
}



