//your JS code here. If required.
const gridItems = document.querySelectorAll('.grid-item');
const changeButton = document.getElementById('change_button');
const resetButton = document.getElementById('Reset');
const blockIdInput = document.getElementById('block_id');
const colorInput = document.getElementById('colour_id');

// Function to reset all grid item colors to transparent
function resetGridColors() {
  gridItems.forEach(item => {
    item.style.backgroundColor = 'transparent';
  });
}

// Change color button functionality
changeButton.addEventListener('click', () => {
  const blockId = blockIdInput.value;
  const color = colorInput.value;

  // Reset all grid colors first
  resetGridColors();

  // Find the grid item with the matching ID and change its color
  const selectedBlock = document.getElementById(blockId);
  if (selectedBlock && color) {
    selectedBlock.style.backgroundColor = color;
  }
});

// Reset button functionality
resetButton.addEventListener('click', () => {
  resetGridColors();
  blockIdInput.value = '';
  colorInput.value = '';
});
