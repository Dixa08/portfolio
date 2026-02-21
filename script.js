
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

// ---------------------------------for education--------------------------------------

<script>
const cards = document.querySelectorAll('.education-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.6s ease";
    observer.observe(card);
});
</script>


