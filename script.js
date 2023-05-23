document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.querySelector('.gallery').querySelectorAll('.artwork');

  searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const searchTerm = searchInput.value.toLowerCase();

    searchResults.forEach(function(result) {
      const artworkName = result.querySelector('.artwork-name').textContent.toLowerCase();

      if (artworkName.includes(searchTerm)) {
        result.style.display = 'block';
      } else {
        result.style.display = 'none';
      }
    });
  });
});
