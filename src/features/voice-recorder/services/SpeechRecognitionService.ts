export interface SpeechRecognitionService {
    start(onResult: (text: string) => void, onError?: (err: string) => void): void;
    stop(): void;
    isActive(): boolean;
}