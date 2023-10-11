// Function to open the popup when the button is clicked
document.getElementById("request-add-site").addEventListener("click", function () {
    document.getElementById("popup").style.display = "block";
});

// Function to close the popup when the form is submitted
document.getElementById("site-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form input values
    const siteName = document.getElementById("site-name").value;
    const siteUrl = document.getElementById("site-url").value;
    const blockchains = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value).join(', ');
    const category = document.getElementById("category").value || document.getElementById("custom-category").value;

    // Create a new row for the table
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${siteName}</td><td>${siteUrl}</td><td>${blockchains}</td><td>${category}</td>`;

    // Append the new row to the table in "Requests.html"
    const requestTable = window.opener.document.getElementById("request-table");
    requestTable.querySelector("tbody").appendChild(newRow);

    // Close the popup
    document.getElementById("popup").style.display = "none";

    // Clear the form inputs for the next submission
    document.getElementById("site-form").reset();
});
