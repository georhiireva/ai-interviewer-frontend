import './App.css'
import VoiceRecorder from "./features/voice-recorder/";
import {SpeechRecognitionProvider} from './features/voice-recorder';

function App() {


    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <h1 className="text-2xl font-bold mb-4">Speech Recognition Demo</h1>
            <SpeechRecognitionProvider>
                <VoiceRecorder />
            </SpeechRecognitionProvider>
        </div>
    );
}

export default App
