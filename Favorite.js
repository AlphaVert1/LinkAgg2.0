        // Get all the favorite checkboxes
        const favoriteCheckboxes = document.querySelectorAll('.favorite-checkbox');

        // Load the saved checkbox states from localStorage and set star colors
        favoriteCheckboxes.forEach((checkbox, index) => {
            // Use a unique key for each user and checkbox
            const userId = getUserId(); // Replace this with your user identifier logic
            const savedState = localStorage.getItem(`checkbox_${userId}_${index}`);
            if (savedState === 'checked') {
                checkbox.checked = true;
            }
            updateStarColor(checkbox, index);
        });

        // Add event listeners to save the checkbox states and update star colors
        favoriteCheckboxes.forEach((checkbox, index) => {
            checkbox.addEventListener('change', () => {
                // Use a unique key for each user and checkbox
                const userId = getUserId(); // Replace this with your user identifier logic
                if (checkbox.checked) {
                    localStorage.setItem(`checkbox_${userId}_${index}`, 'checked');
                } else {
                    localStorage.removeItem(`checkbox_${userId}_${index}`);
                }
                updateStarColor(checkbox, index);
            });
        });

        // Function to update star color based on checkbox state
        function updateStarColor(checkbox, index) {
            const starLabel = checkbox.nextElementSibling;
            if (checkbox.checked) {
                starLabel.style.color = '#FFAC33'; // Checked color
            } else {
                starLabel.style.color = '#ffffff'; // Unchecked color
            }
        }

        // Replace this with your user identifier logic (e.g., username, user ID)
        function getUserId() {
            // You can implement your own logic here to get the user's identifier
            // For simplicity, return a fixed user ID 'user123' in this example
            return 'user123';
        }