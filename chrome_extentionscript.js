let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}    

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        renderLeads(myLeads)
    })

})


inputBtn.addEventListener("click",function(){
    if (inputEl.value===""){
        inputEl.placeholder = "Emplty field cannot be saved!";
    }
    else{
        
        myLeads.push(inputEl.value)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        renderLeads(myLeads)
        inputEl.value = ""
        inputEl.removeAttribute("placeholder")      
    }

})

function renderLeads(leads){
    let listItems = ""
    for (i=0; i<leads.length;i++){
        //listItems += "<li><a target = '_blank' href='"+ leads[i] +"'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target = '_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
        //const li = document.createElement("li")
        //li.textContent = leads[i]
        //ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
})