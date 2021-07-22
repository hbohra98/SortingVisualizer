const arr = [];
const n = 30;
document.getElementById("array").addEventListener("click", sortBars);
document.getElementById("bubblesort").addEventListener("click", bubblesort);
function sortBars() {
  for (let i = 0; i < 30; i++) {
    arr.push(Math.floor(Math.random() * 40));
    var bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.display = "inline";
    bar.style.borderLeft = "6px solid";
    bar.style.height = arr[i] + 1 + "%";
    bar.style.left = (i % 80) + 10 + "%";
    bar.style.color = "black";
    bar.style.position = "absolute";
    bar.id = "Bar" + i;
    //   bar.style.color = "green";
    bar.style.width = "20px";
    var element = document.getElementById("sortingVisual");
    element.appendChild(bar);
  }

  console.log(arr);
}

function swap(arr, i, j) {
// const music = new Audio("beep.wav");
 // music.play();
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  //get the id for the current element
  var el1 = document.getElementById("Bar" + i);
  var el2 = document.getElementById("Bar" + j);
  //Getting the computed Item
  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);
  //getting the height property
  const transform1 = style1.getPropertyValue("height");
  const transform2 = style2.getPropertyValue("height");
  //changing the height property

  el1.style.height = arr[i] + "%";
  el2.style.height = arr[j] + "%";
  console.log(el1, arr[i]);
  console.log(el2, arr[j]);
  console.log("========================");
}

async function bubblesort() {
  console.log("Sorting is started");
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      document.getElementById("Bar" + j).style.color = "red";
      document.getElementById("Bar" + (j + 1)).style.color = "red";

      if (arr[j] >= arr[j + 1]) {
        swap(arr, j, j + 1);
      }
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(), delay(3);
        })
      );
      document.getElementById("Bar" + j).style.color = "black";
      document.getElementById("Bar" + (j + 1)).style.color = "black";
    }
  }
  console.log(arr);
}
