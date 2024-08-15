import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import axios from "axios";
import data from "../mocks/data.json"

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useLocalStorage("language", "en");
    const [mockData, setMockData] = useState({});
    const [loading, setLoading] = useState(true)

    const postData = async () => {
        try {
            const response = await axios.post('https://reqres.in/api/mertozturk', data);
            setMockData(response.data[language])
            setLoading(false)
        } catch (error) {
            console.error("Data error:", error)
            setLoading(false)
        }
    }

    useEffect(() => {
        postData();
    }, [language]);

    const toggleLanguage = () => {
        const newLang = language === "en" ? "tr" : "en"
        setLanguage(newLang)
    }

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <LanguageContext.Provider value={{ mockData, toggleLanguage }} >
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider;