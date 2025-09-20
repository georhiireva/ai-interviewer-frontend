import { createContext } from 'react';
import type { SpeechRecognitionService } from './SpeechRecognitionService';

// Контекст без дефолтного значения
export const SpeechRecognitionContext = createContext<SpeechRecognitionService | null>(null);
