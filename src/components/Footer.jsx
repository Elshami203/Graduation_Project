// src/components/Footer.jsx
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white py-4">
            <div className="container mx-auto text-center">
                <p>
                    &copy; {new Date().getFullYear()} BFCAI Book Translator. All
                    rights reserved.
                </p>
                <div className="mt-2">
                    <a href="#" className="hover:underline mx-2">
                        Made with sweat and tears
                    </a>
                    <a href="#" className="hover:underline mx-2">
                        For the graduation project
                    </a>
                    <a href="#" className="hover:underline mx-2">
                        Dont Contact Us
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
