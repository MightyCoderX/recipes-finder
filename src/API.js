import React from 'react';

export const APIContext = React.createContext();

export const APIProvider = ({ children }) =>
{
    const baseUrl = 'https://api.spoonacular.com/recipes';
    const apiKeyQuery = `?apiKey=${process.env.REACT_APP_API_KEY}`;

    const getEndpointUrl = (endpoint, params) =>
    {
        if(!params) return baseUrl + endpoint + apiKeyQuery;

        let paramsString = '';

        for(const param in params)
        {
            if(!params[param]) continue;
            paramsString += `&${param}=${params[param]}`;
        }

        return baseUrl + endpoint + apiKeyQuery + paramsString;
    }

    const getErrorMessage = (responseStatus) =>
    {
        responseStatus = Number(responseStatus);
        
        switch(responseStatus)
        {
            case 404:
                return '404 Resource not found';

            case 402:
                return '402 Daily quota reached';

            default:
                return responseStatus;
        }
    }

    return (
        <APIContext.Provider value={{ getEndpointUrl, getErrorMessage }}>
            {children}
        </APIContext.Provider>
    );
}