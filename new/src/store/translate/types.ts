export type TranslateState = {
	translations: Language[],
	currentTranslation: Language,
    currentLanguage: string,
};

export type Language = {
    languageCode: string;
    tooltip: string;
    title: string;
    description: string;
    insertSvg: string;
    example: string;
    preview: string;
    readyCss: string;
    fullRecording: string;
    shortRecording: string;
    copy: string;
    addSize: string;
    conversionSettings: string;
    addCss: string;
    removeSemicolon: string;
    useShortRecording: string;
    save: string;   
}

export type Translate = {
    default: string, 
    code: string
}