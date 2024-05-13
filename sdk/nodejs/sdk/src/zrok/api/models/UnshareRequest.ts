/* tslint:disable */
/* eslint-disable */
/**
 * zrok
 * zrok client access
 *
 * The version of the OpenAPI document: 0.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UnshareRequest
 */
export interface UnshareRequest {
    /**
     * 
     * @type {string}
     * @memberof UnshareRequest
     */
    envZId?: string;
    /**
     * 
     * @type {string}
     * @memberof UnshareRequest
     */
    shrToken?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UnshareRequest
     */
    reserved?: boolean;
}

/**
 * Check if a given object implements the UnshareRequest interface.
 */
export function instanceOfUnshareRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UnshareRequestFromJSON(json: any): UnshareRequest {
    return UnshareRequestFromJSONTyped(json, false);
}

export function UnshareRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnshareRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'envZId': !exists(json, 'envZId') ? undefined : json['envZId'],
        'shrToken': !exists(json, 'shrToken') ? undefined : json['shrToken'],
        'reserved': !exists(json, 'reserved') ? undefined : json['reserved'],
    };
}

export function UnshareRequestToJSON(value?: UnshareRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'envZId': value.envZId,
        'shrToken': value.shrToken,
        'reserved': value.reserved,
    };
}
