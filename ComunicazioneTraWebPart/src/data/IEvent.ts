import { ILocation } from ".";

/**
 * Represents event
 */
//export interface IEvent extends ILocation {
export interface IEvent {
    /**
     * The start date of the event
     */
    Tipo: string;
    /**
     * The name of the event
     */
    name: string;
    /**
     * The e-mail address of the person organizing the event
     */
    Avengers: string;
    /**
     * The name of the person organizing the event
     */
    // organizerName: string;
}