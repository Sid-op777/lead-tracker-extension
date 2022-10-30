let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click",function(){
    if (inputEl.value===""){
        inputEl.placeholder = "Emplty field cannot be saved!";
    }
    else{
        
        myLeads.push(inputEl.value)
        renderLeads()
        inputEl.value = ""
        inputEl.removeAttribute("placeholder")      
    }

})


function renderLeads(){
    let listItems = ""
    for (i=0; i<myLeads.length;i++){
        //listItems += "<li><a target = '_blank' href='"+ myLeads[i] +"'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target = '_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
        //const li = document.createElement("li")
        //li.textContent = myLeads[i]
        //ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}


