/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Service Fleet Manager
 * Kafka Service Fleet Manager is a Rest API to manage kafka instances and connectors.
 *
 * The version of the OpenAPI document: 1.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ServiceAccountAllOf
 */
export interface ServiceAccountAllOf {
    /**
     * server generated unique id of the service account
     * @type {string}
     * @memberof ServiceAccountAllOf
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountAllOf
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountAllOf
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountAllOf
     */
    clientID?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountAllOf
     */
    clientSecret?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountAllOf
     */
    owner?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountAllOf
     */
    created_at?: string;
}


