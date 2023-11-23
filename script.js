document.addEventListener('DOMContentLoaded', function () {
      const gridContainer = document.getElementById('grid-container');
      const blockIdInput = document.getElementById('block_id');
      const colorInput = document.getElementById('colour_id');
      const changeButton = document.getElementById('change_button');
      const resetButton = document.getElementById('reset_button');

      changeButton.addEventListener('click', function () {
        const blockId = blockIdInput.value;
        const color = colorInput.value;

        if (blockId && color) {
          const gridItem = document.getElementById(blockId);
          if (gridItem) {
            // Set background color of the specified grid item
            gridItem.style.backgroundColor = color;

            // Reset background color of all grid items after changing one
            resetGridColors();
          }
        }
      });

      resetButton.addEventListener('click', function () {
        // Reset background color of all grid items
        resetGridColors();
      });

      function resetGridColors() {
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(item => {
          item.style.backgroundColor = 'transparent';
        });
      }
    });