const button = document.getElementById("button-header")
const modal = document.querySelector("dialog")
const closeModal = document.getElementById("close-button")

button.onclick = function () {
    modal.showModal()
}

closeModal.onclick = function () {
    modal.close();
}
