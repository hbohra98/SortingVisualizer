let arr = [];
const n = 25;
let isArray = false;
let isSortingGoingOn = false;
document.getElementById("array").addEventListener("click", NewArray);
document.getElementById("bubblesort").addEventListener("click", bubblesort);
document.getElementById("selectionsort").addEventListener("click",selectionsort);
//document.getElementById("insertionsort").addEventListener("click",insertionsort);
document.getElementById("Clear").addEventListener("click", clearcontent);



//creating a new array
function NewArray() {
  //Prevent multiple array trigger.
  if(isArray){
    alert("Array Already Exists! Please use clear to delete current array");
    return;
  }
  //empty the current array for fresh array load
  arr=[];
  isArray=true;
  isSortingGoingOn=false;
  for (let i = 0; i < 25; i++) {
    arr.push(Math.floor(Math.random() * 40));
    var bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.display = "inline";
    bar.style.borderLeft = "10px solid";
    bar.style.height = arr[i] + 1 + "%";
    bar.style.left = (i % 80) + 10 + "%";
    bar.style.color = "blue";
    bar.style.position = "absolute";
    bar.id = "Bar" + i;
    //   bar.style.color = "green";
    bar.style.width = "20px";
    var element = document.getElementById("sortingVisual");
    element.appendChild(bar);
  }

  console.log(arr);
}

//sleep element
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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
  //sleep to visualize the elements
  el1.style.color="green";
  el2.style.color="green";
  el1.style.opacity="0.5";
  el2.style.opacity="0.5";
  sleep(300);
  el1.style.opacity="1";
  el2.style.opacity="1";
  
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
//Add meta Data for Current Sorting Algorithm
function AddSortingMetaData(sortingAlgo){
  let description = "";
  if(sortingAlgo=="Selection Sort"){
    description = "Complexity:<br>Time Complexity: O(n2) as there are two nested loops.<br>Auxiliary Space: O(1)<br>The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array. <br> 1) The subarray which is already sorted. <br> 2) Remaining subarray which is unsorted. In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray"
  }
  else if(sortingAlgo=="BubbleSort"){
    description= "Complexity:<br>Worst and Average Case Time Complexity: O(n*n). Worst case occurs when array is reverse sorted.<br>Best Case Time Complexity: O(n). Best case occurs when array is already sorted.<br>Auxiliary Space: O(1)<br>Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order."
  }
  var bar = document.createElement("p");
 // bar.innerText="ss";
  bar.id="AlgoName"
  var element = document.getElementById("desc");
  element.appendChild(bar);
  console.log("In the meta data fns")
  document.getElementById("AlgoName").innerHTML = "<h3>Sorting Algorithm: "+sortingAlgo+"<br></h3>"+description; 
}
//Bubble sort implementation O(N^2)
async function bubblesort() {
  if(arr.length==0){
    alert("Please initialize the array before sorting!(Click on New Array)");
    return;
  }
  if(isSortingGoingOn){
    alert("Sorting already in Progress!(Click on Clear to stop sorting)");
    return;
  }
  isSortingGoingOn=true;
  AddSortingMetaData("BubbleSort");
  console.log("Sorting is started");
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      document.getElementById("Bar" + j).style.color = "red";
      document.getElementById("Bar" + (j + 1)).style.color = "red";

      if (arr[j] >= arr[j + 1]) {
        swap(arr, j, j + 1);
      }
      await sleep(300);
      document.getElementById("Bar" + j).style.color = "blue";
      document.getElementById("Bar" + (j + 1)).style.color = "blue";
    }
  }
  console.log(arr);
  isSortingGoingOn=false;
}

//Selection sort implementation o(N^2)
//Iterate over the entire array to get the smallest element and then once you get 
//smallest element to the current element after complete iteration swap both 
async function selectionsort(){

  if(arr.length==0){
    alert("Please initialize the array before sorting!(Click on New Array)");
    return;
  }
  if(isSortingGoingOn){
    alert("Sorting already in Progress!(Click on Clear to stop sorting)");
    return;
  }
  isSortingGoingOn=true;
  AddSortingMetaData("Selection Sort");
  console.log("Sorting is started");
  for(let i=0;i<n-1;i++){
    let mini_ind = i;
    document.getElementById("Bar" + i).style.color = "red";

    for(let j=i+1;j<n;j++){
      document.getElementById("Bar" + (j)).style.color = "red";
      //await sleep(100);
      if(arr[j] < arr[mini_ind])
        mini_ind = j;
        document.getElementById("Bar" + (j)).style.color = "blue";
    }
    document.getElementById("Bar" + mini_ind).style.color = "red";
    swap(arr,mini_ind,i);
    await sleep(300);
    document.getElementById("Bar" + i).style.color = "blue";
    document.getElementById("Bar" + mini_ind).style.color = "blue";
  }
  console.log(arr);
  isSortingGoingOn=false;
}

//Merge sort implementation


//insertion sort implementation
async function insertionsort(){
  if(arr.length==0){
    alert("Please initialize the array before sorting!(Click on New Array)");
    return;
  }
  if(isSortingGoingOn){
    alert("Sorting already in Progress!(Click on Clear to stop sorting)");
    return;
  }
  isSortingGoingOn=true;
  console.log("Sorting is started");
  
  let i, key, j; 
  for (i = 1; i < n; i++)
  { 
    document.getElementById("Bar" + i).style.color = "red";
      key = arr[i]; 
      j = i - 1; 
      while (j >= 0 && arr[j] > key)
      { 
        //document.getElementById("Bar" + (j)).style.color = "red";
          //swap(arr,i,j+1);
          arr[j + 1] = arr[j]; 
          j = j - 1; 
       //   document.getElementById("Bar" + (j)).style.color = "blue";
      } 
      arr[j + 1] = key; 
      document.getElementById("Bar" + i).style.color = "blue";
      document.getElementById("Bar" + (j+1)).style.color = "blue";
  }
  
  console.log(arr);
  isSortingGoingOn=false; 
}

//Selection sort implementation

function clearcontent() {
  document.getElementById("AlgoName").innerHTML = ""; 
  if(!isArray)
   {
     //alert for the empty clear trigger
     alert("Opps!! No array found to clear");
     return;
   } 
  isArray=false;
  arr=[];
  console.log("Div Cleared");
  document.getElementById("sortingVisual").innerHTML = "";
//  $('#sortingVisual').empty();
 //   document.getElementById(sortingVisual).innerHTML = "<div></div>";
}
