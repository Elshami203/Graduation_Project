import React from "react";

const AboutUsPage = () => {
    return (
        <><div className="min-h-screen bg-blue-50">
        <div className="container mx-auto  p-10 ">
            <h1 className="text-3xl font-bold text-blue-800 mb-4">About Us</h1>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <p className="text-gray-700 text-base mb-4">
                    Welcome to Book Translator, your go-to platform for
                    translating literary works across languages. Our mission is
                    to make literature accessible to readers worldwide, breaking
                    down language barriers and fostering cultural exchange.
                </p>
                <p className="text-gray-700 text-base mb-4">
                    Founded in 2023, Book Translator leverages cutting-edge AI
                    technology to provide accurate and nuanced translations that
                    preserve the authors original style and intent. Whether
                    youre a student, researcher, or book enthusiast, our tool is
                    designed to help you explore literature in multiple
                    languages.
                </p>
                <p className="text-gray-700 text-base">
                    Our team consists of passionate linguists, software
                    engineers, and literature lovers who are committed to
                    continually improving our translation services. We believe
                    in the power of words to connect people across cultures and
                    are excited to be part of your journey in exploring world
                    literature.
                </p>
            </div>
        </div>
        </div>
        </>
    );
};

export default AboutUsPage;
