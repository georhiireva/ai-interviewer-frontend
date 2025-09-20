import {use} from 'react';
import {SpeechRecognitionContext} from '../services/SpeechRecognitionContext';
import type {SpeechRecognitionService} from '../services/SpeechRecognitionService';

export function useSpeechService(): SpeechRecognitionService {
    const ctx = use(SpeechRecognitionContext);
    if (!ctx) {
        throw new Error('useSpeechService must be used within SpeechRecognitionProvider');
    }
    return ctx;
}
