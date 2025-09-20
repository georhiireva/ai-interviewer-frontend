import React from 'react';
import {SpeechRecognitionContext} from './SpeechRecognitionContext.ts';
import {useWebSpeechRecognitionService} from './WebSpeechRecognitionService';

export const SpeechRecognitionProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const service = useWebSpeechRecognitionService();
    // const service = new OpenAISpeechRecognitionService();

    return (
        <SpeechRecognitionContext value={service}>
            {children}
        </SpeechRecognitionContext>
    );
};
