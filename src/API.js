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

        console.log(paramsString);

        return baseUrl + endpoint + apiKeyQuery + paramsString;
    }

    return (
        <APIContext.Provider value={{ getEndpointUrl }}>
            {children}
        </APIContext.Provider>
    );
}