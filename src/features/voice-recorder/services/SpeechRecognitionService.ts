export interface SpeechRecognitionService {
    isAvailable(): boolean;
    startListening(options?: { continuous?: boolean }): Promise<void>;
    stopListening(): Promise<void>;
    resetTranscript(): void;
    getTranscript(): string;
    isListening(): boolean;
}