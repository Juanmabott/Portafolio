import React, { useState } from 'react';

const CopyEmailButton: React.FC = () => {
    const [showNotification, setShowNotification] = useState(false);
    const emailLink = "Bottaro.juanmanuel@hotmail.com";

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(emailLink);
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <div className="relative">
            <button
                onClick={copyToClipboard}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
                Copy Email
            </button>
            
            {showNotification && (
                <div className="absolute top-full mt-2 left-0 bg-green-900 text-white px-3 py-1 rounded shadow-lg">
                    Copiado
                </div>
            )}
        </div>
    );
};

export default CopyEmailButton;