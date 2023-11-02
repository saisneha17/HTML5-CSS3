const inputElement = document.querySelector('.drop-zone__input');

const dropZoneElement = inputElement.closest('.drop-zone');

dropZoneElement.addEventListener('click', () => {
    inputElement.click();
});

inputElement.addEventListener('change', (event) => {
    console.log(inputElement.files[0]);

    if (inputElement.files.length > 0) {

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

        dropZoneThumbnail.dataset.label = inputElement.files[0].name;

        const fileReader = new FileReader();

        fileReader.readAsDataURL(inputElement.files[0]);

        fileReader.onload = () => {
            console.log(fileReader.result);
            dropZoneThumbnail.style.backgroundImage = 'url(' + fileReader.result + ')';
        }

    }
});