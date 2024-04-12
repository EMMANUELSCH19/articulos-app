import React from "react";

function SocialMedia({ name }) {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {name}
        </button>
    );
}

export default SocialMedia;