import React, {createContext, ReactNode, useEffect, useState} from 'react';

const TOKEN = 'M2YwODRlYjk4Njc1NDdjNDk3MTExN2E4NjY0ZTI3N2Q6Y2NhOGQ0NTc4YTZmNGE0YmJmMmExN2MzMmJjYTNmNzk'


export interface AuthContextValue {
    accessToken: string | null;
    expiresIn: number | null;
    tokenType: string | null;
}

const emptyValue = {accessToken: null, tokenType: null, expiresIn: null}

export const AuthContext = createContext<AuthContextValue>(emptyValue)


async function authorizeClient () : Promise<AuthContextValue>{
    try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                "Authorization": `Basic ${TOKEN}`
            },
            body: "grant_type=client_credentials"
        })
        const result = await response.json()
        return {accessToken: result.access_token, expiresIn: result.expires_in, tokenType: result.token_type}
    } catch (error) {
        console.error("Error", error);
        return emptyValue
    }
}


async function getAuthOptionsValue(): Promise<AuthContextValue> {
    return authorizeClient()
}

type Props = {
    children: ReactNode
}

export function AuthContextProvider({children} : Props) {
    const [value, setValue] = useState<AuthContextValue>(emptyValue)
    useEffect(() => {
        async function executeGetAuthOptionsValue () {
            const value = await getAuthOptionsValue()
            setValue(value)
        }
        executeGetAuthOptionsValue()

    }, [])
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContext
