import SettingsInputType from "../../../../resources/enums/settings-input-types";
import SettingsRestrictionType from "../../../../resources/enums/settings-restriction-types";

export default {
    id: "editor",
    section: "Editor",
    restriction: [
        SettingsRestrictionType.EDITOR
    ],
    options: {
        customEditorFont: {
            name: "Custom Editor Font",
            description: "Changes the font for the editor. **Font will only apply after refreshing the page.**\nDefault font is Arial.",
            inputs: {
                font: {
                    type: SettingsInputType.TEXTLINE,
                    value: "Arial"
                }
            }
        },
        editorSounds: {
            name: "Editor Sounds",
            description: "Checking the box will enable editor sound effects. **Will only apply after refreshing the page.**",
            inputs: {
                sounds: {
                    type: SettingsInputType.CHECKBOX,
                    value: true
                }
            }
        },
    }
};