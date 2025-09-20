import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

interface SpeechRecognitionHook {
    transcript: string;
    listening: boolean;
    resetTranscript: () => void;
    browserSupportsSpeechRecognition: boolean;
}

function VoiceRecorder() {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
    } = useSpeechRecognition() as SpeechRecognitionHook;

    // Type guard to ensure SpeechRecognition is available
    const isSpeechRecognitionAvailable = (): boolean => {
        return typeof SpeechRecognition !== 'undefined' && browserSupportsSpeechRecognition;
    };

    const toggleListening = () => {
        if (!isSpeechRecognitionAvailable()) {
            alert('Speech recognition is not supported in this browser.');
            return;
        }

        if (listening) {
            void SpeechRecognition.stopListening();
        } else {
            SpeechRecognition.startListening({ continuous: true }).catch((error: unknown) => {
                console.error('Failed to start listening:', error);
            });
        }
    };

    const handleReset = () => {
        if (!isSpeechRecognitionAvailable()) {
            alert('Speech recognition is not supported in this browser.');
            return;
        }
        resetTranscript();
    };

    if (!isSpeechRecognitionAvailable()) {
        return (
            <div className="w-full max-w-md bg-white p-4 rounded-md shadow-md text-center">
                <p className="text-red-500">Speech recognition is not supported in this browser.</p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-md flex flex-col items-center">
            <button type={"button"}
                onClick={toggleListening}
                className={`px-4 py-2 rounded-md text-white font-semibold mb-4 ${
                    listening ? 'bg-red-500' : 'bg-blue-500'
                }`}
            >
                {listening ? 'Stop Listening' : 'Start Listening'}
            </button>
            <button type={"button"}
                onClick={handleReset}
                className="px-4 py-2 bg-gray-500 text-white rounded-md font-semibold mb-4"
            >
                Reset Transcript
            </button>
            <div className="w-full bg-white p-4 rounded-md shadow-md">
                <h2 className="text-lg font-semibold mb-2">Transcript:</h2>
                <p className="text-gray-700">{transcript || 'No speech detected yet...'}</p>
            </div>
        </div>
    );
}

export default VoiceRecorder;