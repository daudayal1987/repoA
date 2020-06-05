/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.18.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1NonResourceAttributes } from './v1NonResourceAttributes';
import { V1ResourceAttributes } from './v1ResourceAttributes';

/**
* SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
*/
export class V1SubjectAccessReviewSpec {
    /**
    * Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here.
    */
    'extra'?: { [key: string]: Array<string>; };
    /**
    * Groups is the groups you\'re testing for.
    */
    'groups'?: Array<string>;
    'nonResourceAttributes'?: V1NonResourceAttributes;
    'resourceAttributes'?: V1ResourceAttributes;
    /**
    * UID information about the requesting user.
    */
    'uid'?: string;
    /**
    * User is the user you\'re testing for. If you specify \"User\" but not \"Groups\", then is it interpreted as \"What if User were not a member of any groups
    */
    'user'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "extra",
            "baseName": "extra",
            "type": "{ [key: string]: Array<string>; }"
        },
        {
            "name": "groups",
            "baseName": "groups",
            "type": "Array<string>"
        },
        {
            "name": "nonResourceAttributes",
            "baseName": "nonResourceAttributes",
            "type": "V1NonResourceAttributes"
        },
        {
            "name": "resourceAttributes",
            "baseName": "resourceAttributes",
            "type": "V1ResourceAttributes"
        },
        {
            "name": "uid",
            "baseName": "uid",
            "type": "string"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1SubjectAccessReviewSpec.attributeTypeMap;
    }
}
