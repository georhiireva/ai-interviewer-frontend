import React from 'react';
import {VoiceOutputContext} from './VoiceOutputContext.ts';
import {useWebVoiceOutputService} from './WebVoiceOutputService.ts';

export const VoiceOutputProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const service = useWebVoiceOutputService();

    return (
        <VoiceOutputContext value={service}>
            {children}
        </VoiceOutputContext>
    );
};
