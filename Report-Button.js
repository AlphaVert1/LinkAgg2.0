// Function to open the popup window
function openPopup(header) {
    // URL of the form.html page with the header as a query parameter
    var url = "form.html?header=" + encodeURIComponent(header);

    // Set the width and height of the popup window
    var width = 600;
    var height = 400;

    // Calculate the left and top positions to center the window on the screen
    var left = (screen.width - width) / 2;
    var top = (screen.height - height) / 2;

    // Open the popup window
    var popup = window.open(url, "PopupWindow", "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top);

    // Focus on the popup window (optional)
    if (popup) {
        popup.focus();
    }
}

// Attach the openPopup function to the button click event using a class selector
var reportButtons = document.querySelectorAll('.report-button');
reportButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Get the header from the first column of the row
        var headerCell = this.closest('tr').querySelector('.Title');
        var header = headerCell.textContent.trim();

        // Exclude the "i" text from the button
        var infoText = this.closest('tr').querySelector('.info-button-text');
        if (infoText) {
            header = header.replace(infoText.textContent, '').trim();
        }

        openPopup(header);
    });
});
