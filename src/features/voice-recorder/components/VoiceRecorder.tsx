import {useSpeechService} from "../hooks/useSpeechServiceHook.ts";

function VoiceRecorder() {
    const recognitionService = useSpeechService();

    const toggleListening = () => {
        if (!recognitionService.isAvailable()) {
            alert('Speech recognition is not supported in this browser.');
            return;
        }

        if (recognitionService.isListening()) {
            void recognitionService.stopListening();
        } else {
            recognitionService.startListening().catch((error: unknown) => {
                console.error('Failed to start listening:', error);
            });
        }
    };

    const handleReset = () => {
        if (!recognitionService.isAvailable()) {
            alert('Speech recognition is not supported in this browser.');
            return;
        }
        recognitionService.resetTranscript();
    };

    if (!recognitionService.isAvailable()) {
        return (
            <div className="w-full max-w-md bg-white p-4 rounded-md shadow-md text-center">
                <p className="text-red-500">Speech recognition is not supported in this browser.</p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-md flex flex-col items-center">
            <button
                type="button"
                onClick={toggleListening}
                className={`px-4 py-2 rounded-md text-white font-semibold mb-4 ${
                    recognitionService.isListening() ? 'bg-red-500' : 'bg-blue-500'
                }`}
            >
                {recognitionService.isListening() ? 'Stop Listening' : 'Start Listening'}
            </button>
            <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 bg-gray-500 text-white rounded-md font-semibold mb-4"
            >
                Reset Transcript
            </button>
            <div className="w-full bg-white p-4 rounded-md shadow-md">
                <h2 className="text-lg font-semibold mb-2">Transcript:</h2>
                <p className="text-gray-700">{recognitionService.getTranscript() || 'No speech detected yet...'}</p>
            </div>
        </div>
    );
}

export default VoiceRecorder;