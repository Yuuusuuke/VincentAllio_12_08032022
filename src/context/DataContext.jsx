import React, { useState } from 'react';

export const DataContext = React.createContext();

export const DataProvider = ({children}) => {
    const initialData = {
        globalInfo: [],
        activity: [],
        averageSession: [],
        performance: [],
        error: null
    }

    const [data, setData] = useState(initialData);

    const url = "http://localhost:3000/user/";
    const fetchData = async (id) =>{
        Promise.all([ // In order to doing all fetch at the same time, rather than waiting each one by one
            fetch(url + id),
            fetch(url + id + "/activity"),
            fetch(url + id + "/average-sessions"),
            fetch(url + id + "/performance")
        ]).then(([responseGlobal, responseActivity, responseSessions, responsePerformance]) => Promise.all([responseGlobal.json(), responseActivity.json(), responseSessions.json(), responsePerformance.json(), responseGlobal.status // Same for json()
        ])).then(([responseGlobal, responseActivity, responseSessions, responsePerformance, statusError]) => {
            setData({
                globalInfo: responseGlobal,
                activity: responseActivity,
                averageSessions: responseSessions,
                performance: responsePerformance,
                error: statusError
            });
        }).catch(error => {
            throw new Error(error);
        });
    }

    return(
        <DataContext.Provider value={{data, fetchData}}>
            {children}
        </DataContext.Provider>
    )
}