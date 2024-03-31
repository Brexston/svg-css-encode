import { mapActions, mapState } from 'pinia';
import translateStore from '@/store/translate/translate';

export const useTranslateStore = {
	computed: {
		...mapState(translateStore, { 
            translations: 'translations',
			getTranslation: 'getTranslation',
			currentLanguage: 'currentLanguage',
		}),
	},
	methods: {
		...mapActions(translateStore, {
			loadTranslate: 'loadTranslate',
			updateCurrentLanguage: 'updateCurrentLanguage',
		}),
	},
};
