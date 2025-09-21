import {useCallback} from "react";
import type {VoiceOutputService} from './VoiceOutputService.ts';


export function useWebVoiceOutputService(): VoiceOutputService {
    const isAvailable = useCallback((): boolean => {
        return typeof window !== "undefined" && !!window.speechSynthesis;
    }, []);

    const speak = useCallback((text: string) => {
        if (!("speechSynthesis" in window)) {
            console.error("Speech Synthesis not supported in this browser.");
            return;
        }

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "ru-RU"; // можно вынести в настройки
        window.speechSynthesis.cancel(); // сбрасываем предыдущую речь
        window.speechSynthesis.speak(utterance);
    }, []);

    const cancel = useCallback(() => {
        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
        }
    }, []);

    const speaking = useCallback((): boolean => {
        if (!isAvailable()) return false;
        return window.speechSynthesis.speaking;
    }, [isAvailable]);

    return {
        isAvailable,
        speak,
        cancel,
        speaking,
    };
}

export class WebVoiceOutputService implements VoiceOutputService {
    private synth: SpeechSynthesis;

    constructor() {
        this.synth = window.speechSynthesis;
    }

    isAvailable(): boolean {
        return typeof window !== 'undefined' && 'speechSynthesis' in window;
    }

    speak(text: string): void {
        console.log(text);
        if (!this.isAvailable()) return;


        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ru-RU'; // можно вынести в настройки
        this.synth.speak(utterance);
    }

    cancel(): void {
        if (this.isAvailable()) {
            this.synth.cancel();
        }
    }

    speaking(): boolean {
        return this.isAvailable() && this.synth.speaking;
    }
}
