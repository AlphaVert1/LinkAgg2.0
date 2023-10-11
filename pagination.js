// JavaScript function to paginate the table
function paginateTable() {
    const table = document.getElementById("tab");
    const rows = table.getElementsByTagName("tr");
    const rowsPerPage = 20; // Adjust this to the number of rows per page
  
    // Calculate the number of pages
    const totalPages = Math.ceil((rows.length - 1) / rowsPerPage);
  
    // Initialize current page
    let currentPage = 1;
  
    // Function to show the rows for the current page
    function showPage(page) {
      for (let i = 1; i < rows.length; i++) {
        rows[i].style.display = "none";
      }
  
      const startIndex = (page - 1) * rowsPerPage + 1;
      const endIndex = startIndex + rowsPerPage - 1;
  
      for (let i = startIndex; i <= endIndex && i < rows.length; i++) {
        rows[i].style.display = "table-row";
      }
    }
  
    // Initial display
    showPage(currentPage);
  
    // Function to update pagination controls
    function updatePaginationControls() {
      document.getElementById("page-info").textContent =
        "Page " + currentPage + " of " + totalPages;
      document.getElementById("prev-page").disabled = currentPage === 1;
      document.getElementById("next-page").disabled = currentPage === totalPages;
    }
  
    // Add event listeners for navigation buttons
    document.getElementById("prev-page").addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
        updatePaginationControls();
      }
    });
  
    document.getElementById("next-page").addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
        updatePaginationControls();
      }
    });
  
    // Initialize pagination controls
    updatePaginationControls();
  }
  
  // Call the pagination function when the page is loaded
  window.addEventListener("load", paginateTable);
  