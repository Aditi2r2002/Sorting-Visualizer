const n=40;
const array=[];
init()  // so that we do not have to click on new Array everytime we refresh

//to get random values(height) for array elements
function init(){
for(let i=0;i<n;i++)
{
    array[i]=Math.random();
}
console.log(array);
showBars();
} 

//this function will be called on clicking the sort button
function playB()
{
   const copy=[...array];
   const moves= bubbleSort(copy);
    //showBars();
   animate(moves);
}

function animate(moves)
{
    if(moves.length==0){
        showBars();
    return;
    }
    const move=moves.shift();
    const[i,j]=move.indices;
    if(move.type=="swap"){
    [array[i],array[j]]=[array[j],array[i]];}
    showBars(move);
    setTimeout(function(){
        animate(moves);
    },200);
}

//bubble sort algo
function bubbleSort(array){
    const moves=[];
    do{
        var swapped=false;
        for(let i=1;i<array.length;i++)
        {
            moves.push({indices:[i-1,i],type:"comp"});
            if(array[i-1]>array[i])
            {
                swapped=true;
                moves.push({indices:[i-1,i],type:"swap"});
                [array[i-1],array[i]]=[array[i],array[i-1]];
            }
        }
    }while(swapped);  //to add animation forst go to html page and add 2 buttons
     return moves;
}

//To create div to repersent array elements with help of bars
function showBars(move){
    container.innerHTML=""; //if not done the arrays will keep on appending
        for(let i=0;i<array.length;i++)
        {
            const bar=document.createElement("div");
            bar.style.height=array[i]*100+"%";
            bar.classList.add("bar");
            if(move && move.indices.includes(i))
            {
                bar.style.backgroundColor=move.type=="swap"?"red":"blue";
            }
            container.appendChild(bar);
        }
}
// const bubSortbtn = document.querySelector(".bubbleSort");
// bubSortbtn.addEventListener('click', async function(){
//     disableSortingBtn();
//     disableSizeSlider();
//     disableNewArrayBtn();
//     await bubble();
//     enableSortingBtn();
//     enableSizeSlider();
//     enableNewArrayBtn();
//});