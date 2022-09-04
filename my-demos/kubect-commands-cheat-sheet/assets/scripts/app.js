mainNav = document.getElementById('main_nav');

const generateNewMenuItem = (menuTextConent)=>{
    let li =  document.createElement("li");
    let a = document.createElement("a");
    let i = document.createElement("i");
    let span = document.createElement("span");

    i.classList.add("fa");
    i.classList.add("fa-home");
    i.classList.add("fa-2x");
    span.classList.add("nav-text");
    span.textContent=menuTextConent
    
    a.append(i);
    a.append(span);
    li.append(a);

    return li;
}

for (const x of Array(10).keys()) {
    mainNav.append(generateNewMenuItem(`Option - ${x}`));
}
