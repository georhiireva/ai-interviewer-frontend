export interface VoiceOutputService {
    isAvailable(): boolean;
    speak(text: string): void;
    cancel(): void;
    speaking(): boolean;
}