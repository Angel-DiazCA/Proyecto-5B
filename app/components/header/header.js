import {
    getSettingsSubmenuVisible,
    getSideMenuVisible,
    toggleSettingsSubmenuVisible,
    toggleSideMenuVisible
} from "../../js/main.js";
import { getUser } from "../../js/providers/users.js";

let currentLanguage = 'EN'; // Variable global para el idioma actual

export const init = () =>{
    console.log('Initializing header...');

//load user data


    getUser().then((response) => {if (response.status==0)
        showUser(response.user);
    })
}
function showUser(user){
    document.getElementById('img-user-photo').src = user.photo;
    document.getElementById('label-user-name').textContent = user.name;
    document.getElementById('label-user-role').textContent = user.role.name;
    document.getElementById('label-language').textContent = user.preferences.language.id;
    //events
    document.getElementById('icon-language').addEventListener('click', () => { toggleLanguage(); });
    document.getElementById('icon-logout').addEventListener('click', () => { toggleLogout(); });
    document.getElementById('icon-theme').addEventListener('click', () => { toggleTheme(); });
    document.getElementById('header-menu').addEventListener('click', () => { toggleSidemenu(); });
    document.getElementById('header-settings').addEventListener('click', () => { toggleSubmenu(); });
}

//toggle language
function toggleLanguage(){
    currentLanguage = currentLanguage === 'EN' ? 'ES' : 'EN';
    document.getElementById('label-language').textContent = currentLanguage;
    drawMenu(currentLanguage); // Volver a dibujar el menú con el nuevo idioma
    console.log('Toggle Language to ' + currentLanguage);
}

//toggle sidemenu
function toggleSidemenu(){
    toggleSideMenuVisible();
    if(getSideMenuVisible()){
        document.getElementById('sidemenu').style.display = 'block';
        document.getElementById('content').style.width = '100%';
    }
    else{
        document.getElementById('sidemenu').style.display = 'none';
        document.getElementById('content').style.width = '100%';
    }
    console.log('Toggle Sidemenu')
}

//toggle submenu
function toggleSubmenu(){
    toggleSettingsSubmenuVisible();
    if(getSettingsSubmenuVisible()){
        document.getElementById('submenu').style.display = 'block';
        document.getElementById('content').style.width = '100%';
        }
        else{
            document.getElementById('submenu').style.display = 'none';
            document.getElementById('content').style.width = '100%';
        }
    console.log('Toggle Submenu')
}
//toggle icon-logout
function toggleLogout(){
    console.log('Toggle Logout')
}

//toggle icon-theme
function toggleTheme(){
    console.log('Toggle Theme')
}

