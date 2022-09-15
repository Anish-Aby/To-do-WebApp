const quotes = ["\"When you have a dream, you've got to grab it and never let go.\" - <b><em>Carol Burnett</em></b>", 
"\"Nothing is impossible. The word itself says 'I'm possible!\" — <b><em>Audrey Hepburn</em></b>",
"\"There is nothing impossible to they who will try.\" — <b><em>Alexander the Great</em></b>",
"\"The bad news is time flies. The good news is you're the pilot.\" — <b><em>Michael Altshuler</em></b>"
]

let i = 0;

let quoteDisplay = document.querySelector(".quotes");

let cycleText = () => {
    quoteDisplay.innerHTML = quotes[i];
    i = ++i % quotes.length;
};

cycleText();
setInterval(cycleText, 5000)


let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 1}})

tl.to(".welcome-block", {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2})
tl.to(".image", {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2}, "-=2")
tl.to(".quotes", {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 3}, "-=2")
tl.to(".circle-container", {'clip-path': 'circle(50% at 50% 50%)', opacity: 1, x: 0, duration: 2}, "-=3")
tl.to(".socials-container", {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2}, "-=2")
tl.to(".black-panel", {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2}, "-=3")

let button = document.querySelector(".learn-more");
