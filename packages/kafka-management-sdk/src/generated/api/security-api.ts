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


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ServiceAccount } from '../model';
// @ts-ignore
import { ServiceAccountList } from '../model';
// @ts-ignore
import { ServiceAccountRequest } from '../model';
/**
 * SecurityApi - axios parameter creator
 * @export
 */
export const SecurityApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create a service account
         * @param {ServiceAccountRequest} serviceAccountRequest service account request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createServiceAccount: async (serviceAccountRequest: ServiceAccountRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'serviceAccountRequest' is not null or undefined
            assertParamExists('createServiceAccount', 'serviceAccountRequest', serviceAccountRequest)
            const localVarPath = `/api/kafkas_mgmt/v1/service_accounts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(serviceAccountRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete service account
         * @param {string} id The id of record
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteServiceAccountById: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteServiceAccountById', 'id', id)
            const localVarPath = `/api/kafkas_mgmt/v1/service_accounts/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary get service account by id
         * @param {string} id The id of record
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServiceAccountById: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getServiceAccountById', 'id', id)
            const localVarPath = `/api/kafkas_mgmt/v1/service_accounts/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary List service accounts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServiceAccounts: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/kafkas_mgmt/v1/service_accounts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary reset credentials for the service account
         * @param {string} id The id of record
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetServiceAccountCreds: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('resetServiceAccountCreds', 'id', id)
            const localVarPath = `/api/kafkas_mgmt/v1/service_accounts/{id}/reset_credentials`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SecurityApi - functional programming interface
 * @export
 */
export const SecurityApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SecurityApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create a service account
         * @param {ServiceAccountRequest} serviceAccountRequest service account request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createServiceAccount(serviceAccountRequest: ServiceAccountRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServiceAccount>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createServiceAccount(serviceAccountRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete service account
         * @param {string} id The id of record
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteServiceAccountById(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Error>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteServiceAccountById(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary get service account by id
         * @param {string} id The id of record
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getServiceAccountById(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServiceAccount>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getServiceAccountById(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary List service accounts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getServiceAccounts(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServiceAccountList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getServiceAccounts(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary reset credentials for the service account
         * @param {string} id The id of record
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resetServiceAccountCreds(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServiceAccount>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetServiceAccountCreds(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SecurityApi - factory interface
 * @export
 */
export const SecurityApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SecurityApiFp(configuration)
    return {
        /**
         * 
         * @summary Create a service account
         * @param {ServiceAccountRequest} serviceAccountRequest service account request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createServiceAccount(serviceAccountRequest: ServiceAccountRequest, options?: any): AxiosPromise<ServiceAccount> {
            return localVarFp.createServiceAccount(serviceAccountRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete service account
         * @param {string} id The id of record
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteServiceAccountById(id: string, options?: any): AxiosPromise<Error> {
            return localVarFp.deleteServiceAccountById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary get service account by id
         * @param {string} id The id of record
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServiceAccountById(id: string, options?: any): AxiosPromise<ServiceAccount> {
            return localVarFp.getServiceAccountById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List service accounts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServiceAccounts(options?: any): AxiosPromise<ServiceAccountList> {
            return localVarFp.getServiceAccounts(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary reset credentials for the service account
         * @param {string} id The id of record
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetServiceAccountCreds(id: string, options?: any): AxiosPromise<ServiceAccount> {
            return localVarFp.resetServiceAccountCreds(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SecurityApi - interface
 * @export
 * @interface SecurityApi
 */
export interface SecurityApiInterface {
    /**
     * 
     * @summary Create a service account
     * @param {ServiceAccountRequest} serviceAccountRequest service account request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApiInterface
     */
    createServiceAccount(serviceAccountRequest: ServiceAccountRequest, options?: any): AxiosPromise<ServiceAccount>;

    /**
     * 
     * @summary Delete service account
     * @param {string} id The id of record
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApiInterface
     */
    deleteServiceAccountById(id: string, options?: any): AxiosPromise<Error>;

    /**
     * 
     * @summary get service account by id
     * @param {string} id The id of record
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApiInterface
     */
    getServiceAccountById(id: string, options?: any): AxiosPromise<ServiceAccount>;

    /**
     * 
     * @summary List service accounts
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApiInterface
     */
    getServiceAccounts(options?: any): AxiosPromise<ServiceAccountList>;

    /**
     * 
     * @summary reset credentials for the service account
     * @param {string} id The id of record
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApiInterface
     */
    resetServiceAccountCreds(id: string, options?: any): AxiosPromise<ServiceAccount>;

}

/**
 * SecurityApi - object-oriented interface
 * @export
 * @class SecurityApi
 * @extends {BaseAPI}
 */
export class SecurityApi extends BaseAPI implements SecurityApiInterface {
    /**
     * 
     * @summary Create a service account
     * @param {ServiceAccountRequest} serviceAccountRequest service account request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public createServiceAccount(serviceAccountRequest: ServiceAccountRequest, options?: any) {
        return SecurityApiFp(this.configuration).createServiceAccount(serviceAccountRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete service account
     * @param {string} id The id of record
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public deleteServiceAccountById(id: string, options?: any) {
        return SecurityApiFp(this.configuration).deleteServiceAccountById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary get service account by id
     * @param {string} id The id of record
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public getServiceAccountById(id: string, options?: any) {
        return SecurityApiFp(this.configuration).getServiceAccountById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List service accounts
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public getServiceAccounts(options?: any) {
        return SecurityApiFp(this.configuration).getServiceAccounts(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary reset credentials for the service account
     * @param {string} id The id of record
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public resetServiceAccountCreds(id: string, options?: any) {
        return SecurityApiFp(this.configuration).resetServiceAccountCreds(id, options).then((request) => request(this.axios, this.basePath));
    }
}
