import { useEffect, useState } from "react";


const StaticTypingEffect = ({ content, typingSpeed = 100 }) => {
    const [typedText, setTypedText] = useState("");

    useEffect(() => {
        const type = () => {
            setTypedText(content.substring(0, typedText.length + 1));
        };

        if (typedText !== content) {
            const timeout = setTimeout(type, typingSpeed);
            return () => clearTimeout(timeout);
        }
    }, [typedText, content, typingSpeed]);


    return (
        <span>
            { typedText }
        </span>
    );
};


export default StaticTypingEffect;
