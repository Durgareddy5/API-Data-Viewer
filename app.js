const url="https://dog.ceo/api/breeds/image/random";
const refreshbtn=document.querySelector(".ref-btn button");
const searchbtn=document.querySelector("#srh-btn")
const selectbox=document.getElementById("Breed");
const inputbtn=document.querySelector(".search-btn input");
let newurl="";

searchbtn.addEventListener("click",(e)=>{
e.preventDefault();

let inputvalue=inputbtn.value;
if(inputvalue==="")
{
   console.log("the search button is empty please enter the breed name to search for it ");
   return ;
}
function newimagefetcher(i){
let forimage=`https://dog.ceo/api/breed/${inputvalue.toLowerCase()}/images/random`;
console.log("getting image...");
fetch(forimage)
.then((response)=>{
    console.log(response);
    return response.json();
}).then((data)=>{
    console.log(data.message);
    getdata(i, data.message);
})
.catch((error)=>console.error('Fetch Error :', error));
}
newimagefetcher(1);
for(let i=2; i<=5; i++)
{
     newimagefetcher(i);
}
});

selectbox.addEventListener("change",(e)=>{
console.log(selectbox.value);
function newimagefetcher(i){
let forimage=`https://dog.ceo/api/breed/${selectbox.value.toLowerCase()}/images/random`;
console.log("getting image...");
fetch(forimage)
.then((response)=>{
    console.log(response);
    return response.json();
}).then((data)=>{
    console.log(data.message);
    getdata(i, data.message);
})
.catch((error)=>console.error('Fetch Error :', error));
}
newimagefetcher(1);
for(let i=2; i<=5; ++i)
{
     newimagefetcher(i);
}
});




import { breednames } from './breednames.js';

breednames.forEach(name => {
    let option=document.createElement('option');
    option.value=name;
    option.text=name;
    selectbox.appendChild(option);
});

function getdata(no, newurl){
if(newurl===""){
fetch(url)
.then((response)=>{
    return response.json(); 
})
.then((data)=>{
   const image=document.getElementById(`dogimage-${no}`);
   image.src=data.message;
})
.catch((error)=>console.error('Fetch error :' ,error));
}else
{
    const image=document.getElementById(`dogimage-${no}`);
    image.src=newurl;
}
}

refreshbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log('refresh button clicked ');
    location.reload();
});

for(let i=1; i<=5; ++i)
{
   getdata(i, newurl); 
}



