 function changeColor() {
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;
    resetColors();
    const block = document.getElementById(blockId);
    if (block) {
      block.style.backgroundColor = color;
    }
  }

  function resetColors() {
    const gridItems = document.getElementsByClassName('grid-item');
	  // const id =  document.getElementById('block_id');
	  // id.value = "";
	  
    for (const item of gridItems) {
      item.style.backgroundColor = 'transparent';
    }
  }