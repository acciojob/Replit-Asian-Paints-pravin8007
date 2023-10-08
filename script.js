//your JS code here. If required.
  const changeButton = document.getElementById('change_button');
        const resetButton = document.getElementById('reset_button');

        changeButton.addEventListener('click', () => {
            const blockId = document.getElementById('block_id').value;
            const colorId = document.getElementById('colour_id').value;
            const gridItem = document.getElementById(blockId);

            if (gridItem) {
                document.querySelectorAll('.grid-item').forEach(item => {
                    item.style.backgroundColor = 'transparent';
                });

                gridItem.style.backgroundColor = colorId;
            }
        });

        resetButton.addEventListener('click', () => {
            document.querySelectorAll('.grid-item').forEach(item => {
                item.style.backgroundColor = 'transparent';
            });
        });
