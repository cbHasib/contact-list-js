function displayContact(contact) {
  const contactSection = document.getElementById("contact-display");


  const stringObj = JSON.stringify(contact);
//   const stringObj = 'G';

  const contactItem = document.createElement("div");
  contactItem.innerHTML = `<div
    class="py-8 px-8 w-2/3 mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:space-y-0 sm:space-x-6 my-7">


    <div class="grid lg:grid-cols-3 grid-cols-1 gap-4 justify-center items-center text-center">
        <div><img class="block mx-auto h-24 rounded-full lg:mx-0 lg:shrink-0"
                src=${contact.imageUrl} alt="${contact.name} Photo">
        </div>

        <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">
                ${contact.name}
            </p>
            <p class="text-slate-500 font-medium">
                ${contact.designation}
            </p>
        </div>
        <div>
            <button
                class="mx-auto px-6 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" data-bs-toggle="modal" data-bs-target="#exampleModalCenter" onclick='modalBody(${stringObj})'>Contact</button>
        </div>
    </div>

</div>`;

contactSection.appendChild(contactItem);
}


function displayAllContact(contactAllList){
    for(const contact of contactAllList){
        displayContact(contact);
    }
}

displayAllContact(contactList);





function modalBody(obj){
    const modalBody = document.getElementById('modal-body');
    const modalContent = document.createElement('div');
    
    modalContent.innerHTML = `
    <div>
    <div><img class="block mx-auto h-52 rounded-full lg:mx-0 lg:shrink-0"
            src=${obj.imageUrl} alt="${obj.name} Photo">
    </div>

    <div class="space-y-0.5">
        <p class="mt-2 text-3xl text-purple-900 font-semibold">
            ${obj.name}
        </p>
        <p class="text-lg  text-cyan-600 font-medium">
            ${obj.designation}
        </p>
    </div>


    <div class="my-2 w-3/4 mx-auto text-gray-700">
        <p>${obj.about}</p>
    </div>


    <div class="flex justify-center align-middle gap-4 my-3">
        <div class="text-green-600">
            <img src="img/icons/map.png" alt="" class="inline w-5"> <span>District: <span
                    class="font-semibold text-slate-800">${obj.district}</span></span>
        </div>

        <div class="text-red-500">
            <img src="img/icons/date.png" alt="" class="inline w-5"> <span>Birthday: <span
                    class="font-semibold text-slate-800">${obj.birthday}</span></span>
        </div>
    </div>



    <div class="flex justify-center align-middle gap-3">
        <a href="tel:${obj.phone}">
            <div class="flex justify-center align-middle gap-2 bg-gray-200 px-3 py-2 rounded-full text-slate-700 hover:bg-cyan-900 shadow-xl hover:text-white border border-gray-400">
                <img src="img/icons/telephone.png" alt="" class="w-auto h-6">
                <span>Call Me</span>
            </div>
        </a>

        <a href="https://wa.me/${obj.whatsapp}">
            <div class="flex justify-center align-middle gap-2 bg-gray-200 px-3 py-2 rounded-full text-slate-700 hover:bg-cyan-900 shadow-xl hover:text-white border border-gray-400">
                <img src="img/icons/whatsapp.png" alt="" class="w-auto h-6">
                <span>WhatsApp</span>
            </div>
        </a>
    </div>



</div>
    `;


    modalBody.innerHTML = '';
    modalBody.appendChild(modalContent);
}




