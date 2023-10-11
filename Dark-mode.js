  // Function to toggle dark mode
  function toggleDarkMode() {
    // Get the <html> element
    var htmlElement = document.documentElement;

    // Toggle the 'dark' class on the <html> element
    htmlElement.classList.toggle('dark');

    // Toggle the background image class
    var body = document.body;
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
  }

  // Add an event listener to the checkbox
  var checkbox = document.getElementById('checkbox');
  checkbox.addEventListener('change', function() {
    // Call the toggleDarkMode function when the checkbox is changed
    toggleDarkMode();
  });

  // Check the initial state of the checkbox based on user preference
  var prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
  if (prefersDarkMode.matches) {
    checkbox.checked = true;
    toggleDarkMode();
  }
