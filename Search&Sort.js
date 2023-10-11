document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("tab");
    const tbody = table.querySelector("tbody");
    const rows = Array.from(tbody.getElementsByTagName("tr"));
  
    const searchInput = document.getElementById("search");
    const sortButtons = Array.from(document.querySelectorAll("th"));
    const prevPageButton = document.getElementById("prev-page");
    const nextPageButton = document.getElementById("next-page");
  
    let currentPage = 1;
    let itemsPerPage = 20;
    let currentSortColumn = 0;
    let currentSortDirection = "asc";
  
    function showPage(page) {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
  
      rows.forEach((row, index) => {
        if (index >= startIndex && index < endIndex) {
          row.style.display = "table-row";
        } else {
          row.style.display = "none";
        }
      });
    }
  
    function updatePaginationControls() {
      const totalPages = Math.ceil(rows.length / itemsPerPage);
      document.getElementById("page-info").textContent =
        "Page " + currentPage + " of " + totalPages;
      prevPageButton.disabled = currentPage === 1;
      nextPageButton.disabled = currentPage === totalPages;
    }

    
  
    function sortTable(column, direction) {
      rows.sort((a, b) => {
        if (column === 0) {
          // Handle sorting by the "Favorite" column
          const favoriteA = a.querySelector(".favorite-checkbox").checked;
          const favoriteB = b.querySelector(".favorite-checkbox").checked;
          if (direction === "asc") {
            return favoriteA - favoriteB;
          } else {
            return favoriteB - favoriteA;
          }
        } else {
          // Handle sorting by other columns
          const x = a.getElementsByTagName("td")[column].textContent;
          const y = b.getElementsByTagName("td")[column].textContent;

          if (direction === "asc") {
            return x.localeCompare(y);
          } else {
            return y.localeCompare(x);
          }
        }
      });

      tbody.innerHTML = "";
      rows.forEach((row) => tbody.appendChild(row));
    }
  
    function handleSortClick(event) {
      const columnIndex = sortButtons.indexOf(event.target);
      if (columnIndex !== -1) {
        if (columnIndex === currentSortColumn) {
          currentSortDirection = currentSortDirection === "asc" ? "desc" : "asc";
        } else {
          currentSortColumn = columnIndex;
          currentSortDirection = "asc";
        }
  
        sortTable(currentSortColumn, currentSortDirection);
        showPage(currentPage);
        updatePaginationControls();
      }
    }
  
    function handleSearch() {
      const searchTerm = searchInput.value.toLowerCase();
  
      rows.forEach((row) => {
        const cells = Array.from(row.getElementsByTagName("td"));
        const rowText = cells.map((cell) => cell.textContent.toLowerCase()).join(" ");
  
        if (rowText.includes(searchTerm)) {
          row.style.display = "table-row";
        } else {
          row.style.display = "none";
        }
      });
  
      currentPage = 1;
      showPage(currentPage);
      updatePaginationControls();
    }
  
    prevPageButton.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
        updatePaginationControls();
      }
    });
  
    nextPageButton.addEventListener("click", () => {
      const totalPages = Math.ceil(rows.length / itemsPerPage);
      if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
        updatePaginationControls();
      }
    });
  
    searchInput.addEventListener("input", handleSearch);
  
    sortButtons.forEach((button) =>
      button.addEventListener("click", handleSortClick)
    );
  
    // Initialize the table
    showPage(currentPage);
    updatePaginationControls();
  });
  