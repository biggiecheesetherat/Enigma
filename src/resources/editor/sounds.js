import { browser } from "$app/environment";
import SettingsAPI from "./settings-api";

let canPlaySound = true;
if (browser) {
    canPlaySound = SettingsAPI.getSetting("native-setting.editorSounds.sounds") !== false;
}

export function playSound(name) {
    if (!canPlaySound) return;

    const audio = new Audio(`/sounds/${name}.mp3`);
    audio.play();
    audio.volume = 0.5;
}

/**
 * Preloads all audio files specified.
 * This is because the hosted version of Clamp will cause a bit of a delay before playing audio
 * due to the host having to provide the file, not the local machine.
 * @param {Array} files An array full of file paths to audio files.
 */
export function preloadSounds(files) {
    if (!canPlaySound) return;
    
   for (const path of files) {
       new Audio(path);
   }
}