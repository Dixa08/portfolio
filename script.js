
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


/*--------------------- CONTACT CARDS --------------------*/
.contact-container {
    display: flex;
    justify-content: center;
    gap: 20px;            /* space between boxes */
    flex-wrap: wrap;
    margin-top: 30px;
}

.contact-card {
    background-color: #f5f7fa; /* light theme background */
    width: 180px;              /* fixed width for uniform cards */
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(0,0,0,0.1);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
    cursor: pointer;
}

.contact-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 28px rgba(0,0,0,0.15);
    background-color: #e0e0e0;
}

.contact-card a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
    font-weight: bold;
    border-radius: 8px;
    padding: 10px 16px;
    transition: background 0.3s ease;
    font-size: 16px;
}

.contact-card .gmail-box { background-color: #D14836; }
.contact-card .gmail-box:hover { background-color: #a23326; }

.contact-card .linkedin-box { background-color: #0A66C2; }
.contact-card .linkedin-box:hover { background-color: #004182; }

.contact-card .github-box { background-color: #24292F; }
.contact-card .github-box:hover { background-color: #1b1f23; }
