let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test.jpg'){
        myImage.setAttribute('src','images/test2.jpg'); 
    }else{
        myImage.setAttribute('src','images/test2.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('请输入名字：');

    if(!myName || myName === null){
        setUserName();
    }else{
        localStorage.setItem('name',myName);
        myHeading.textContent = 'Jianba cool,' + myName;    
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Jianba cool,'+ storedName;
}

myButton.onclick = function(){
    setUserName();
}