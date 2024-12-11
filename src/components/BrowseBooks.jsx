import React, { useState, useEffect } from "react";
import axios from "axios";

const BrowseBooks = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get(
                    "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=10"
                );
                setBooks(response.data.items);
                setIsLoading(false);
            } catch (error) {
                setError(
                    "An error occurred while fetching books. Please try again later."
                );
                setIsLoading(false);
            }
        };

        fetchBooks();
    }, []);

    const handleRead = (bookId) => {
        // Implement read functionality
        console.log(`Read book with ID: ${bookId}`);
    };

    const handleTranslate = (bookId) => {
        // Implement translate functionality
        console.log(`Translate book with ID: ${bookId}`);
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500 mt-8">
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className="bg-blue-50">
        <div className="container mx-auto px-4 py-8 ">
            <h1 className="text-3xl font-bold text-blue-800 mb-8">
                Browse Books
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map((book) => (
                    <div
                        key={book.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                        <img
                            src={
                                book.volumeInfo.imageLinks?.thumbnail ||
                                "/placeholder.svg?height=200&width=150"
                            }
                            alt={book.volumeInfo.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2 text-blue-800">
                                {book.volumeInfo.title}
                            </h2>
                            <p className="text-gray-600 mb-2">
                                {book.volumeInfo.authors
                                    ? book.volumeInfo.authors.join(", ")
                                    : "Unknown Author"}
                            </p>
                            <p className="text-sm text-gray-500 mb-4">
                                {book.volumeInfo.description
                                    ? `${book.volumeInfo.description.slice(
                                          0,
                                          100
                                      )}...`
                                    : "No description available"}
                            </p>
                            <div className="flex justify-between">
                                <button
                                    onClick={() => handleRead(book.id)}
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                                >
                                    Read
                                </button>
                                <button
                                    onClick={() => handleTranslate(book.id)}
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                                >
                                    Translate
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default BrowseBooks;
