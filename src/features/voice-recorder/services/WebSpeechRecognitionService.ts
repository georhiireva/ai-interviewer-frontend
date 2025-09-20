// services/speech/ReactSpeechRecognitionService.ts
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import type {SpeechRecognitionService} from './SpeechRecognitionService';

export function useWebSpeechRecognitionService(): SpeechRecognitionService {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
    } = useSpeechRecognition();

    return {
        isAvailable: () => typeof SpeechRecognition !== 'undefined' && browserSupportsSpeechRecognition,
        startListening: (options?: { continuous?: boolean }) =>
            SpeechRecognition.startListening({ continuous: options?.continuous ?? true }),
        stopListening: () => SpeechRecognition.stopListening(),
        resetTranscript,
        getTranscript: () => transcript,
        isListening: () => listening,
    };
}
