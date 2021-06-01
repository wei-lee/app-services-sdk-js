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
 * @interface ServiceAccountListItemAllOf
 */
export interface ServiceAccountListItemAllOf {
    /**
     * server generated unique id of the service account
     * @type {string}
     * @memberof ServiceAccountListItemAllOf
     */
    id?: string;
    /**
     * client id of the service account
     * @type {string}
     * @memberof ServiceAccountListItemAllOf
     */
    clientID?: string;
    /**
     * name of the service account
     * @type {string}
     * @memberof ServiceAccountListItemAllOf
     */
    name?: string;
    /**
     * owner of the service account
     * @type {string}
     * @memberof ServiceAccountListItemAllOf
     */
    owner?: string;
    /**
     * service account creation timestamp
     * @type {string}
     * @memberof ServiceAccountListItemAllOf
     */
    created_at?: string;
    /**
     * description of the service account
     * @type {string}
     * @memberof ServiceAccountListItemAllOf
     */
    description?: string;
}


