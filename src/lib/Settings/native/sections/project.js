import SettingsInputType from "../../../../resources/enums/settings-input-types";
import SettingsRestrictionType from "../../../../resources/enums/settings-restriction-types";

export default {
    id: "project",
    section: "Project",
    restriction: [
        SettingsRestrictionType.EDITOR
    ],
    options: {
        targetFPS: {
            name: "Target Update Rate",
            description: "By default, the project will try to update loops 1/60th of every second (if force loops to pause is enabled) and every frame is considered this long.\nUse this option to change the frame rate of the project, **though numbers past 250 may not function properly.**\nThis will also be limited per computer, depending on how powerful your computer is.",
            inputs: {
                toggle: {
                    type: SettingsInputType.TEXTLINE,
                    value: (editor) => {
                        return editor.State.currentProject.settings.targetFPS;
                    },
                    listeners: {
                        onchange: (editor, event) => {
                            editor.State.currentProject.settings.targetFPS = Number(event.target.value);
                        }
                    }
                }
            }
        },
        forceLoopPauses: {
            name: "Force Loops to pause",
            description: "Used if block loops have a chance to repeat forever. Wait blocks will be required inside of forever loops (and loops that may repeat forever) if this is disabled.",
            inputs: {
                toggle: {
                    type: SettingsInputType.CHECKBOX,
                    value: (editor) => {
                        return editor.State.currentProject.settings.forceLoopPauses;
                    },
                    listeners: {
                        onclick: (editor, event) => {
                            editor.State.currentProject.settings.forceLoopPauses = event.target.checked;
                        }
                    }
                }
            }
        },
        forceConditionalPauses: {
            name: "Force Conditional Pauses",
            description: "Used if blocks can wait for a statement to be true, but have a chance to wait forever. If this is disabled, the page will freeze when a block is waiting forever.",
            inputs: {
                toggle: {
                    type: SettingsInputType.CHECKBOX,
                    value: (editor) => {
                        return editor.State.currentProject.settings.forceConditionalPauses;
                    },
                    listeners: {
                        onclick: (editor, event) => {
                            editor.State.currentProject.settings.forceConditionalPauses = event.target.checked;
                        }
                    }
                }
            }
        },
    }
};