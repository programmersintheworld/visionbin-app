import { React, createContext, useState, useEffect } from "react";
import instance from "../../API/instance";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const contextValue = {
        user,
        setUser,
        loading,
        setLoading,
    }
    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
}