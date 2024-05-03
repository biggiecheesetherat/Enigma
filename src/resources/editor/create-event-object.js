import State from '../state';

/**
 * Creates an editor object that is passed into events, usually in the settings menu.
 * @param {object} optProperties An object to inherit properties from. Default is {}.
 */
export function createEventObject(optProperties = {}) {
    const extras = optProperties || {};

    return {
        State,
        ...extras,
    };
}