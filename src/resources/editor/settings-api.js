import nativeSections from '../../lib/Settings/native';
import { encodeToSave, decodeFromSave } from '../util/localstorage-encode';

class SettingsUI {
    static _nativeSettings = nativeSections;
    static _registeredSections = {};

    static getSetting(name) {
        const key = 'clamp:' + name;
        const value = localStorage.getItem(key);
        return decodeFromSave(value);
    }
    static saveSetting(sectionPrefix, basePath, ...extraParams) {
        const path = [sectionPrefix];
        path.push(basePath);

        let settingValue = null;
        for (let i = 0; i < extraParams.length; i++) {
            const parameter = extraParams[i];
            if (i === extraParams.length - 1) {
                // this is the value of the setting
                settingValue = parameter;
                break;
            }

            path.push(parameter);
        }

        const key = 'clamp:' + path.join('.');
        const encoded = encodeToSave(settingValue);
        localStorage.setItem(key, encoded);
        console.log('saved setting', key, encoded);
    }

    static initialize() {
        this.register(this._nativeSettings);
    }
    static register(sectionSet) {
        const id = sectionSet.id;
        if (id in this._registeredSections) throw new Error('Section set ' + id + ' was already registered');

        const sectionIds = Object.keys(sectionSet.sections);
        if (sectionIds.length <= 0) return;

        const registeredSectionIds = Object.values(this._registeredSections)
            .map(set => Object.keys(set.sections))
            .flat(Infinity);
            
        // make sure each section has an id property, and also make sure they dont conflict with other sections
        for (const item of sectionIds) {
            if (registeredSectionIds.includes(item)) {
                throw new Error('Section ID ' + item + ' already exists in another sectionSet');
            }

            const section = sectionSet.sections[item];
            section.id = item;
        }

        // each option should have an id property, and
        // convert the inputs object to an array
        for (const sectionId in sectionSet.sections) {
            const section = sectionSet.sections[sectionId];

            for (const optionId in section.options) {
                const option = section.options[optionId];
                option.id = optionId;
                
                const inputsArray = [];
                for (const inputId in option.inputs) {
                    const input = option.inputs[inputId];
                    input.id = inputId;
                    inputsArray.push(input);
                }
                option.inputs = inputsArray;
            }
        }

        this._registeredSections[id] = sectionSet;
    }
}

export default SettingsUI;