import { useState, useEffect } from "react";


const DynamicTypingEffect = ({ phrases, typingSpeed = 100, delayAfterTyping = 1000 }) => {
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const type = () => {
            const fullText = phrases[phraseIndex % phrases.length];

            setText(
                isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), delayAfterTyping);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
            }
        };

        const timeout = setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);

        return () => clearTimeout(timeout);
    }, [text, phraseIndex, phrases, isDeleting, typingSpeed, delayAfterTyping]);


    return (
        <span>
            { text }
        </span>
    );
};


export default DynamicTypingEffect;
