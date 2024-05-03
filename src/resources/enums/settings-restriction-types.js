/**
 * Types of restrictions for sections in the Settings menu.
 * @enum {string}
 */
const SettingsRestrictionType = {
    /**
     * Should be defined as a custom function that returns a boolean.
     */
    ARBITRARY: 'function',

    /**
     * This section is only accessible in the editor.
     */
    EDITOR: 'editor',
};

export default SettingsRestrictionType;
