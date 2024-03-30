import { defineStore } from 'pinia';
import { TranslateState } from '@scripts/store/translate/types';


const useTranslateStore = defineStore('translate', {
	state: (): TranslateState => ({
		translations: [],
		currentLanguage: 'ru',
	}),

})

export default useTranslateStore;