export class DOMAssertionError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'DOMAssertionError';
    };
};

/////// TYPE GUARDS ///////
/** Verify if a value is a Node. */
export const isNode = (value: unknown): value is Node => value instanceof Node;
/** Verify if a value is an Element. */
export const isElement = (value: unknown): value is Element => value instanceof Element;
/** Verify if a value is a HTMLElement. */
export const isHTMLElement = (value: unknown): value is HTMLElement => value instanceof HTMLElement;
/** Verify if a value is a HTMLInputElement. */
export const isHTMLInputElement = (value: unknown): value is HTMLInputElement => value instanceof HTMLInputElement;
/** Verify if a value is a HTMLSelectElement. */
export const isHTMLSelectElement = (value: unknown): value is HTMLSelectElement => value instanceof HTMLSelectElement;
/** Verify if a value is a HTMLButtonElement. */
export const isHTMLButtonElement = (value: unknown): value is HTMLButtonElement => value instanceof HTMLButtonElement;
/** Verify if a value is a HTMLAnchorElement. */
export const isHTMLAnchorElement = (value: unknown): value is HTMLAnchorElement => value instanceof HTMLAnchorElement;
/** Verify if a value is a HTMLFormElement. */
export const isHTMLFormElement = (value: unknown): value is HTMLFormElement => value instanceof HTMLFormElement;
/** Verify if a value is a HTMLImageElement. */
export const isHTMLImageElement = (value: unknown): value is HTMLImageElement => value instanceof HTMLImageElement;
/** Verify if a value is a HTMLTableElement. */
export const isHTMLTableElement = (value: unknown): value is HTMLTableElement => value instanceof HTMLTableElement;
/** Verify if a value is a HTMLTableRowElement. */
export const isHTMLTableRowElement = (value: unknown): value is HTMLTableRowElement => value instanceof HTMLTableRowElement;
/** Verify if a value is a HTMLTableColElement. */
export const isHTMLTableColElement = (value: unknown): value is HTMLTableColElement => value instanceof HTMLTableColElement;
/** Verify if a value is a HTMLTableCellElement. */
export const isHTMLTableCellElement = (value: unknown): value is HTMLTableCellElement => value instanceof HTMLTableCellElement;

/////// ASSERTIONS ///////
/**
 * Asserts that a value is a Node.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNode(value: unknown, message?: string): asserts value is Node {
    if (!message) message = 'value is not a Node';
    if (!isNode(value)) throw new DOMAssertionError(message);
};

/**
 * Asserts that a value is an Element.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertElement(value: unknown, message?: string): asserts value is Element {
    if (!message) message = 'value is not an Element';
    if (!isElement(value)) throw new DOMAssertionError(message);
};

/**
 * Asserts that a value is a HTMLElement.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertHTMLElement(value: unknown, message?: string): asserts value is HTMLElement {
    if (!message) message = 'value is not a HTMLElement';
    if (!isHTMLElement(value)) throw new DOMAssertionError(message);
};

/**
 * Asserts that a value is a HTMLInputElement.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertHTMLInputElement(value: unknown, message?: string): asserts value is HTMLInputElement {
    if (!message) message = 'value is not a HTMLInputElement';
    if (!isHTMLInputElement(value)) throw new DOMAssertionError(message);
};

/**
 * Asserts that a value is a HTMLSelectElement.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertHTMLSelectElement(value: unknown, message?: string): asserts value is HTMLSelectElement {
    if (!message) message = 'value is not a HTMLSelectElement';
    if (!isHTMLSelectElement(value)) throw new DOMAssertionError(message);
};

/**
 * Asserts that a value is a HTMLButtonElement.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertHTMLButtonElement(value: unknown, message?: string): asserts value is HTMLButtonElement {
    if (!message) message = 'value is not a HTMLButtonElement';
    if (!isHTMLButtonElement(value)) throw new DOMAssertionError(message);
};

/**
 * Asserts that a value is a HTMLAnchorElement.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertHTMLAnchorElement(value: unknown, message?: string): asserts value is HTMLAnchorElement {
    if (!message) message = 'value is not a HTMLAnchorElement';
    if (!isHTMLAnchorElement(value)) throw new DOMAssertionError(message);
};

/**
 * Asserts that a value is a HTMLFormElement.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertHTMLFormElement(value: unknown, message?: string): asserts value is HTMLFormElement {
    if (!message) message = 'value is not a HTMLFormElement';
    if (!isHTMLFormElement(value)) throw new DOMAssertionError(message);
};

/**
 * Asserts that a value is a HTMLImageElement.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertHTMLImageElement(value: unknown, message?: string): asserts value is HTMLImageElement {
    if (!message) message = 'value is not a HTMLImageElement';
    if (!isHTMLImageElement(value)) throw new DOMAssertionError(message);
};

/**
 * Asserts that a value is a HTMLTableElement.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertHTMLTableElement(value: unknown, message?: string): asserts value is HTMLTableElement {
    if (!message) message = 'value is not a HTMLTableElement';
    if (!isHTMLTableElement(value)) throw new DOMAssertionError(message);
};

/**
 * Asserts that a value is a HTMLTableRowElement.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertHTMLTableRowElement(value: unknown, message?: string): asserts value is HTMLTableRowElement {
    if (!message) message = 'value is not a HTMLTableRowElement';
    if (!isHTMLTableRowElement(value)) throw new DOMAssertionError(message);
};

/**
 * Asserts that a value is a HTMLTableColElement.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertHTMLTableColElement(value: unknown, message?: string): asserts value is HTMLTableColElement {
    if (!message) message = 'value is not a HTMLTableColElement';
    if (!isHTMLTableColElement(value)) throw new DOMAssertionError(message);
};

/**
 * Asserts that a value is a HTMLTableCellElement.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertHTMLTableCellElement(value: unknown, message?: string): asserts value is HTMLTableCellElement {
    if (!message) message = 'value is not a HTMLTableCellElement';
    if (!isHTMLTableCellElement(value)) throw new DOMAssertionError(message);
};