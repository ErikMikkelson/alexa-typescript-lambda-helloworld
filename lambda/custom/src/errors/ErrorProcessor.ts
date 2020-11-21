import { ErrorHandler, HandlerInput } from 'ask-sdk-core';
import { Strings } from '../utilities/constants';
import i18n from 'i18next';

/**
 * Handles ErrorTypes.Unexpected errors which should be thrown when something
 * unexpected happens.
 */
export const ErrorProcessor: ErrorHandler = {
    canHandle(_handlerInput: HandlerInput, _error: Error) {
        return true;
    },
    handle(handlerInput: HandlerInput, _error: Error) {
        console.log('Error handled: ${error.message}');

        return handlerInput.responseBuilder.speak(i18n.t(Strings.ERROR_MSG)).getResponse();
    },
};
