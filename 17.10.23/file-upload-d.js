const inputElement = document.querySelector('.drop-zone__input');

const dropZoneElement = inputElement.closest('.drop-zone');

dropZoneElement.addEventListener('click', () => {
    inputElement.click();
});

inputElement.addEventListener('change', (event) => {
    console.log(inputElement.files[0]);

    if (inputElement.files.length > 0) {
        if (inputElement.files[0].type.includes('image/')) {
            mapImage(inputElement.files[0]);
        }
    }
});

dropZoneElement.addEventListener('dragover', function(e) {
    e.preventDefault();
    dropZoneElement.classList.add('drop-zone--over');
});

dropZoneElement.addEventListener('dragleave', function() {
    dropZoneElement.classList.remove('drop-zone--over');
});

dropZoneElement.addEventListener('dragend', function() {
    dropZoneElement.classList.remove('drop-zone--over');
});

dropZoneElement.addEventListener('drop', function(e) {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0 && e.dataTransfer.files[0].type.includes('image/')) {
        mapImage(e.dataTransfer.files[0]);
    }
 });

function mapImage(file) {
    const dropZonePrompt = document.querySelector('.drop-zone__prompt');
    if (dropZonePrompt) {
        dropZonePrompt.remove();
    }

    let dropZoneThumbnail = document.querySelector('.drop-zone__thumb');

    if (!dropZoneThumbnail) {
        dropZoneThumbnail = document.createElement('div');
        dropZoneThumbnail.classList.add('drop-zone__thumb');
        dropZoneElement.appendChild(dropZoneThumbnail);
    }

    dropZoneThumbnail.dataset.label = file.name;

    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
        dropZoneThumbnail.style.backgroundImage = 'url(' + fileReader.result + ')';
    }
}