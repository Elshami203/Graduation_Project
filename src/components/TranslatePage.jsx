import React, { useRef, useState } from "react";

const TranslatePage = () => {
    const [sourceText, setSourceText] = useState("");
    const [translatedText, setTranslatedText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef(null);

    const handleTranslate = async () => {
        if (!sourceText.trim()) {
            alert("Please enter text to translate.");
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch("https://libretranslate.com/translate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    q: sourceText,
                    source: "en",
                    target: "ar",
                    format: "text",
                }),
            });

            if (!response.ok) {
                throw new Error("Translation failed. Please try again.");
            }

            const data = await response.json();
            setTranslatedText(data.translatedText);
        } catch (error) {
            console.error("Error translating text:", error);
            alert("An error occurred while translating. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSourceText(e.target.result);
            };
            reader.readAsText(file);
        }
    };

    return (
        <div className="bg-blue-50">
            <div className="container mx-auto p-10 min-h-screen">
                <h1 className="text-3xl font-bold text-blue-800 mb-4">Translate</h1>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="sourceText"
                        >
                            Source Text
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="sourceText"
                            placeholder="Enter text to translate"
                            rows="4"
                            value={sourceText}
                            onChange={(e) => setSourceText(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <button
                            className="bg-blue-500 mb-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleUploadClick}
                        >
                            Upload a file
                        </button>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: "none" }}
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="mb-4">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleTranslate}
                            disabled={isLoading}
                        >
                            {isLoading ? "Translating..." : "Translate to Arabic"}
                        </button>
                    </div>
                    {translatedText && (
                        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
                            <h2 className="text-lg font-bold text-green-800 mb-2">Translated Text</h2>
                            <p className="text-gray-700">{translatedText}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TranslatePage;
