// services/speech-synthesis/SpeechSynthesisContext.tsx
import { createContext } from 'react';
import type { VoiceOutputService } from './VoiceOutputService.ts';

export const VoiceOutputContext = createContext<VoiceOutputService | null>(null);
