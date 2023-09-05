"use strict";

const slide1 = {
  name: "slide1",
  htmlMessage: "<h1>This is the <span>Logo</span> headline.</h1><p>We are Southwest Florida's proven design resource for digital and print marketing materials.<br/>Our specialties include corporate identity, advertising campaigns, and website development.</p>"
}

const slide2 = {
  name: "slide2",
  htmlMessage: "<h1>This is the <span>Website</span> headline.</h1><p>We are Southwest Florida's proven design resource for digital and print marketing materials.<br/>Our specialties include corporate identity, advertising campaigns, and website development.</p>"
}

const slide3 = {
  name: "slide3",
  htmlMessage: "<h1>This is the <span>Ad</span> headline.</h1><p>We are Southwest Florida's proven design resource for digital and print marketing materials.<br/>Our specialties include corporate identity, advertising campaigns, and website development.</p>"
}

const body = document.getElementById("body");
const heroMessage = document.getElementById("hero-message");
const heroButtons = document.getElementsByClassName("hero-button");

for (const button of heroButtons) {
    button.addEventListener("click", function(){
        if(button.classList.contains("active")) return;
        let activeButton = document.getElementsByClassName("active")[0];

        switch(button.id) {
            case "button-bg1":
                loadSlide(slide1, activeButton, button);
              break;
            case "button-bg2":
                loadSlide(slide2, activeButton, button);
              break;
            case "button-bg3":
                loadSlide(slide3, activeButton, button);
              break;
            default:
              return;
          }
    }, false)
}

function loadSlide(slide, activeBtn, currentBtn) {
    body.classList.remove(...body.classList);
    body.classList.add(slide.name);

    heroMessage.innerHTML = slide.htmlMessage;

    activeBtn.classList.remove("active");
    currentBtn.classList.add("active");
}