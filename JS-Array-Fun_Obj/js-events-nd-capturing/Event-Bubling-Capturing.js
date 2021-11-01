// event listeners - JS waits for an event to occur
// adding an event listener to DOM in 3 ways --- onevent, inline event, addEventListener()-- modern
// actions by which the user/browser interact with html elements


/* DOM is separated into 3 parts -- Core,Html, Xml --- core provides low-level set of objects represnts any structured doc 
When a web page is loaded, the browser creates a DOM of the page, which is an object oriented representation of an HTML 
doct that acts as an interface b/w JS and the document itself. */

let para = document.getElementById('para');
let addEvent = document.getElementById('addEvent');
let inputText = document.getElementById('inputText');
let inputPara = document.getElementById('inputPara');

function sayHello() {
    para.textContent = "Inline Event Listener";  // inline event 
}


let onEvent = document.getElementById('onEvent');

onEvent.onclick = function() {
    para.textContent = "Onclick Event Listener";
}

function displayResult() {
    para.textContent = "Add Event Listener";
}

addEvent.addEventListener('click', displayResult);

// events -- keyboard, mouse, touch 
// keyboard -- keyup/keydown --- event obj ( event) -- event.type, event.target, event.key
inputPara.textContent = '';

function keyDownEvent(event) {
    inputPara.textContent = inputPara.textContent + event.key;
}

inputText.addEventListener("keydown", keyDownEvent) // only function name





// form has special event - submit ( if we clicked enter this submit event is triggered )

// form events -- blur, focus, change

let myForm = document.getElementById('myForm');
let nameInput = document.getElementById('nameInput');
let nameErrMsg = document.getElementById("nameErrMsg");

let formData = {
    name: '',
    state: "Telangana",
    gender: "Male"
}

nameInput.addEventListener('change', function(event) {
    let nameInputValue = nameInput.value;       // event.target.value (best)
    if (nameInputValue === "") {
        nameErrMsg.textContent = '*Required';
    } else {
        nameErrMsg.textContent = '';
    }
    if (nameInputValue.length <= 2) {
        nameErrMsg.textContent = "Enter Valid Name";
    } else {
        formData.name = event.target.value
    }
})


let state = document.getElementById("state");
state.addEventListener('change', function(event) {
    formData.state = event.target.value;
})

let male = document.getElementById('male');
male.addEventListener('change', function(event) {
    formData.gender = event.target.value;
})

let female = document.getElementById('female');
female.addEventListener('change', function(event) {
    formData.gender = event.target.value;
})

myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // http server request
    // field level validations
    console.log(formData);
});





/* DOM Events
abort - ocuurs when loading of audio/video if aborted -- <video onabort= fun()>
animationstart(iteration and end) -- process of css animation
blur - when object lost the focus -- <input onblur = fun()>
canplay - browser can start playing the audio/video (when it has buffered enough to begin). <video oncanplay = fun()>
onchange -- onclick
copy -- when we try to copy the content of an element (oncopy=fun() value="")
cut 
ondblclick = fun() -- double click
drag
ended - when the media has reached end
focus - when an element gets focus
document.addEventListener('fullscreenchange', fun(){})
<input oninput=fun()/> -- when the value of an input element is changed
<input onkeypress = fun()/> -- when user presses a key
<body onload = fun() /> -- when an object has been loaded
<video onloadstart = fun()/> -- when browser looking for a specific video
onmousedown, onmouseenter, onmousemove, onmousemove, onmouseout, onmouseup

<body onoffline=fun()> -- when browser starts working ofline
play, playing, pause, progress, onratechange (fast, slow)
<body onresize = fun()>  -- when browser has benn resized
<video onstalled = fun() >  -- when browser is trying to get media data but data was not available
touchcancel, touchend, touchmove, touchstart, volumechange
wheel -- when mouse wheel is rolled up or down */





/* Event Propagations in DOM tree --- 3 Phases-- Capturing, Target, Bubbling
Mechanism that defines how events travel through the DOM tree to arrive its target and what happens to it afterward */


/* The order in which event handlers are called when one element is nested inside second element, 
 and both elements have registered a listener for same event */


document.getElementById('event1').addEventListener('click', () => {
    console.log("Event 1 Clicked")
})

document.getElementById('event2').addEventListener('click', (event) => {
    console.log("Event 2 Clicked")
    event.stopPropagation()
    event.stopImmediatePropagation() // It will not execute its sibblings also --- if there are any duplicates
})

document.getElementById('event3').addEventListener('click', () => {
    console.log("Event 3 Clicked")    // if we won't pass 3rd arg -- default is false (bubling mode) -- capture flags
})

/* if 3rd arg is true , it's a capturing (trickling) method
it has a performance issues -- how we can stop propagation at some time -- can use true or false combination also */



/* Capturing --- events propagates from window through DOM tree to the target node
Bubbling--- events propagates from target to window up through DOM tree by visiting all ancestors of target element one by one */



/* Event Deligation --- Using parents to handle children */

let tasks = document.getElementById('tasks')
tasks.addEventListener('click', (event) => {
    event.target.classList.toggle('completed')
})
