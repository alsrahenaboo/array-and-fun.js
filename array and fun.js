
fruits=[{name:"Apple ",imgesrc:"img/apple.jpg"},{name:"Banana",imgesrc:"img/banana.webp"},
    {name:"Orange",imgesrc:"img/orange.jpg"},{name:"Strawberry",imgesrc:"img/strawberry.jpg"},
    {name:"Grapes",imgesrc:"img/grapes.jpg"}
];
let container = document.getElementById('fruit-container');
let ul=document.createElement('ul');
ul.classList.add('fruit-list');
fruits.forEach(fruits => {
    let li=document.createElement('li');
    let img = document.createElement('img');
    img.style.width="150px";
    img.style.border="3px solid orange";
    img.style.padding-"5px";
    
    
    img.src =fruits.imgesrc;
    let caption = document.createElement('p');
    caption.style.fontSize="30px";
    caption.style.color="orange";
    caption.textContent = fruits.name;

    
    li.appendChild(caption);
    li.appendChild(img);
    ul.appendChild(li); 
});
container.appendChild(ul);
// // q2)---------------------------------------------------
let abd=prompt("enter a number");
let index=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
 function jalal( abd_ ,_index = []) {
    
    
    if(abd_<2 || abd_>_index.length-1){
       return -1;
    }
    else{
        return abd_;
    }
    
}
console.log(jalal(abd,index));

