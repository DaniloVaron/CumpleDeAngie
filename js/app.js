const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");

prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function goNextPage() {
  if (currentLocation < maxLocation) {
    switch (currentLocation) {
      case 1:
        paper1.classList.add("flipped");
        paper1.style.zIndex = 3;
        break;
      case 2:
        paper2.classList.add("flipped");
        paper2.style.zIndex = 4;
        break;
      case 3:
        paper2.classList.remove("flipped");
        paper2.classList.add("flipped_2");
        break;
      default:
        throw new Error("unkown state");
    }
    currentLocation++;
  }
}

function goPrevPage() {
  if (currentLocation > 1) {
    switch (currentLocation) {
      case 4:
        paper2.classList.remove("flipped_2");
        paper2.classList.add("flipped");
        break;
      case 3:
        paper2.classList.remove("flipped");
        paper1.classList.add("flipped");
        paper2.style.zIndex = 2;
        break;
      case 2:
        paper1.classList.remove("flipped");
        break;
      default:
        throw new Error("unkown state");
    }
    currentLocation--;
  }
}
