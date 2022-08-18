document.getElementById('search-box').addEventListener('keyup', function(event){

    const contactSection = document.getElementById("contact-display");
    const searchKey = event.target.value.toLowerCase();

    const searchContact = [];
    
    for(const list of contactList){
        if(list.name.toLowerCase().includes(searchKey)){
            searchContact.push(list);
        }
        else{
        }
        
    }
    contactSection.innerHTML = '';
    displayAllContact(searchContact);

})