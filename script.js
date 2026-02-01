
// Scroll to a section smoothly (same page)
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// Go to another HTML page
function goToPage(pageUrl) {
    window.location.href = pageUrl;
}

//FOR GALLERY JS 
function openModal(card) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImg");
    var caption = document.getElementById("modalCaption");

    var img = card.querySelector("img");
    var text = card.querySelector("h4").innerText + " - " + card.querySelector("p").innerText;

    modal.style.display = "block";
    modalImg.src = img.src;
    caption.innerText = text;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
