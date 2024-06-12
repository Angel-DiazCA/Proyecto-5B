import { menu } from "./settings.js";

let language = 'EN';

export const init = () =>{
    console.log('Initializing sidemenu...');
    drawMenu('EN');
    document.getElementById("icon-language").addEventListener("click", toggleLanguage);
}

//draw menu
// function drawMenu(language){
//     menu.forEach(option => {
//         drawMenuOption(language, option);
//     });
// }
function drawMenu(language) {
    console.log(menu);
    // Link stylesheet
    var parent = document.getElementById("sidemenu");
    parent.innerHTML =
      '<link rel="stylesheet" href="components/sidemenu/sidemenu.css">';
    menu.forEach((option) => {
      drawMenuOption(language, option);
    });
  }
  
  function toggleLanguage() {
    if (language === "EN") {
      language = "ES";
    } else {
      language = "EN";
    }
    drawMenu(language);
  }

//draw Menu Option
function drawMenuOption(language, option) {
    console.log(option);
    var parent = document.getElementById('sidemenu');

    var divOption = document.createElement('div');
    divOption.className = 'sidemenu-option';
    parent.appendChild(divOption);

    var divIcon = document.createElement('div');
    divIcon.className = 'sidemenu-icon';
    divIcon.style.background = option.color;
    divOption.appendChild(divIcon);

    var icon = document.createElement('i');
    icon.className = 'fas fa-' + option.icon;
    divIcon.appendChild(icon);

    var divText = document.createElement('div');
    divText.className = 'sidemenu-text';
    divText.id = 'sidemenu-option-' + option.module;
    divOption.appendChild(divText);

    var label = document.createElement('label');
    switch(language) {
        case 'ES': label.textContent = option.title[0]; break;
        case 'EN': label.textContent = option.title[1]; break;
    }
    divText.appendChild(label);

    if (typeof option.component !== 'undefined'){
        divText.addEventListener('click', () => {
            console.log('load component ' + option.component);
        });
    } else if (Array.isArray(option.submenu)) {
        // Create the chevron icon for dropdown
        var divChevron = document.createElement('div');
        divChevron.className = 'sidemenu-icon chevron';
        divOption.appendChild(divChevron);

        var iconChevy = document.createElement('i');
        iconChevy.className = 'fas fa-chevron-down';
        divChevron.appendChild(iconChevy);

        // Create the submenu container
        var divSubmenu = document.createElement('div');
        divSubmenu.className = 'sidemenu-submenu hidden';
        divOption.appendChild(divSubmenu);

        // Populate the submenu
        option.submenu.forEach(subOption => {
            var subDivOption = document.createElement('div');
            subDivOption.className = 'sidemenu-suboption';
            divSubmenu.appendChild(subDivOption);

            var subDivText = document.createElement('div');
            subDivText.className = 'sidemenu-text';
            subDivOption.appendChild(subDivText);

            var subLabel = document.createElement('label');
            switch(language) {
                case 'ES': subLabel.textContent = subOption.title[0]; break;
                case 'EN': subLabel.textContent = subOption.title[1]; break;
            }
            subDivText.appendChild(subLabel);

            if (typeof subOption.component !== 'undefined') {
                subDivText.addEventListener('click', () => {
                    console.log('load component ' + subOption.component);
                });
            }
        });

        // Add event listener to show/hide the submenu
        divText.addEventListener('click', () => {
            divSubmenu.classList.toggle('hidden');
            iconChevy.classList.toggle('fa-chevron-down');
            iconChevy.classList.toggle('fa-chevron-up');
        });
    }
}


window.addEventListener('load', init);

/*
<div class="sidemenu-option">
    <div class="sidemenu-icon">
        <i class="fas fa-home"></i>
    </div>
    <div class="sidemenu-text">
        <label id="label-sidemenu-home">Home</label>
    </div>
    <div class="sidemenu-arrow">
        <i id="arrow-menu" class="fas fa-chevron-down"></i>
    </div>
</div> */