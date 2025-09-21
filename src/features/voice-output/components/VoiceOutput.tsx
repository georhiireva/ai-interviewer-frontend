// features/voice-output/components/VoiceOutputTester.tsx
import React, {useState, useEffect} from "react";
import {useVoiceOutputService} from "../hooks/useVoiceOutputServiceHook.ts";

const VoiceOutput: React.FC = () => {
    const voice = useVoiceOutputService();
    const [text, setText] = useState("");
    const [isSpeaking, setIsSpeaking] = useState(false);

    const handleSpeak = () => {
        if (!voice.isAvailable()) {
            alert("Voice output is not supported in this browser.");
            return;
        }
        if (text.trim() === "") {
            alert("Please enter some text to speak.");
            return;
        }
        voice.speak(text);
        setIsSpeaking(true);
    };

    useEffect(() => {
        if (!voice.isAvailable()) return;

        const checkSpeaking = () => {
            if (!voice.speaking()) {
                setIsSpeaking(false);
                window.clearInterval(intervalId);
            }
        };

        let intervalId: number | undefined;
        if (isSpeaking) {
            intervalId = window.setInterval(checkSpeaking, 300);
        }

        return () => {
            if (intervalId !== undefined) {
                window.clearInterval(intervalId);
            }
        };
    }, [isSpeaking, voice]);

    return (
        <div className="w-full max-w-md bg-white p-4 rounded-md shadow-md flex flex-col gap-4">
            <h2 className="text-xl font-bold text-center">Voice Output Tester</h2>
            <input
                type="text"
                value={text}
                onChange={(e) => { setText(e.target.value); }}
                placeholder="Enter text to speak..."
                className="border border-gray-300 rounded-md p-2"
            />
            <button
                type="button"
                onClick={handleSpeak}
                disabled={isSpeaking}
                className={`px-4 py-2 rounded-md text-white font-semibold ${
                    isSpeaking ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                }`}
            >
                {isSpeaking ? "Speaking..." : "Speak"}
            </button>
        </div>
    );
};

export default VoiceOutput;