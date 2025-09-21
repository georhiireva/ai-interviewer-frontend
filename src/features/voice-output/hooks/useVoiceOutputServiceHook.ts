// services/speech-synthesis/useSpeechSynthesis.ts
import {use} from 'react';
import { VoiceOutputContext } from '../services/VoiceOutputContext.ts';
import type { VoiceOutputService } from '../services/VoiceOutputService.ts';

export function useVoiceOutputService(): VoiceOutputService {
    const ctx = use(VoiceOutputContext);
    if (!ctx) {
        throw new Error('useSpeechSynthesis must be used within SpeechSynthesisProvider');
    }
    return ctx;
}
