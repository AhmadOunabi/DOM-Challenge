
// header
let header=document.createElement('header');
document.body.append(header);

let logo=document.createElement('h1');
logo.textContent='LOGO';
// cretae ul for NAVBAR
let navBar=document.createElement('ul');
// create li for NAVBAR
let home=document.createElement('a');
home.textContent='Home';
let shop=document.createElement('a');
shop.textContent='Shop';
let about=document.createElement('a');
about.textContent='About Us';
let contact=document.createElement('a');
contact.textContent='Contact Us';

let Array=[home,shop,about,contact];
// append the Elements in Header
header.appendChild(logo)
header.appendChild(navBar)
for(i in Array){
    navBar.appendChild(Array[i]);
}

// create container
let container1=document.createElement('div')
document.body.append(container1)

let container2=document.createElement('div')
document.body.append(container2)

let container3=document.createElement('div')
document.body.append(container3)
//add div to container
let array=[];
function createDiv(id,text,container){
    let div=document.createElement('div');
    container.appendChild(div);
    div.id= id;
    div.innerHTML= text;
    array.push(div);
    return div;
}

for (i=0;i<15;i++){
    let text= '<p>Product</p>'+ (i+1)
    if (i<=4){
    createDiv(i+1,text,container1);}

    if (i>4 && i<=9){
        createDiv(i+1,text,container2);
    }
    else if(i>9){
        createDiv(i+1,text,container3);
    }
}

// styling the Container
container1.style.display='flex';
container1.style.justifyContent='center';
container1.style.marginTop='20px';

container2.style.display='flex';
container2.style.justifyContent='center';
container2.style.marginTop='20px';

container3.style.display='flex';
container3.style.justifyContent='center';
container3.style.marginTop='20px';

for(i in array){
    array[i].style.margin='20px'
    array[i].style.padding='50px'
    array[i].style.borderRadius='15px'
    array[i].style.width='200px'
    array[i].style.height='200px'
    array[i].style.backgroundColor='#bdb0d0'

    console.log(array[i])
}
// styling the header
header.style.display='flex';
header.style.justifyContent='space-between';
header.style.alignItems='center';
header.style.fontFamily='Arial, Helvetica, sans-serif';
header.style.borderRadius='15px';
header.style.backgroundColor='#bdb0d0';

// styling the navBAr
navBar.style.display='inline-flex';
navBar.style.margin='30px';
navBar.style.listStyle='none';
navBar.style.fontWeight='bold';
navBar.style.padding='0';

for(i in Array){
    Array[i].style.margin='15px';
}

// styling the LOGO
logo.style.margin='60px'
logo.style.fontSize='40px'
logo.style.color='red'
