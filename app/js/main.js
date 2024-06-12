import { loadComponent } from './providers/components.js';
import { settings } from './settings.js';

//variables
var sideMenuVisible = true;
var settingsSubmenuVisible = true;

//getters and setters
export function getSideMenuVisible(){
    return sideMenuVisible;
}
export function toggleSideMenuVisible(){
    sideMenuVisible = !sideMenuVisible;
}

export function getSettingsSubmenuVisible(){
    return settingsSubmenuVisible;
}
export function toggleSettingsSubmenuVisible(){
    settingsSubmenuVisible = !settingsSubmenuVisible;
}

//event handler
window.addEventListener('load', load);

//load document
function load(){
    console.log("Loading Main...");
    //loading components
    // loadComponent({
    //     parent: 'header',
    //     url: 'components/header'
    // });
    settings.load.components.forEach(c=>{
        loadComponent(c);
    });
}