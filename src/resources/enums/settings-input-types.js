/**
 * Types of inputs for the Settings menu.
 * @enum {string}
 */
const SettingsInputType = {
    /**
     * Should be defined as a custom function that returns an HTMLElement class.
     */
    ARBITRARY: 'html',

    /**
     * Button with arbitrary functionality when clicked.
     */
    BUTTON: 'button',
    
    /**
     * A single line of input for the user to type anything.
     * Outputs of this input type may still contain multiple lines using DevTools.
     */
    TEXTLINE: 'textline',
    
    /**
     * Multiple lines of input for the user to type anything.
     */
    TEXTBOX: 'textbox',
    
    /**
     * A single checkbox that can be toggled on or off.
     */
    CHECKBOX: 'checkbox',
};

export default SettingsInputType;
