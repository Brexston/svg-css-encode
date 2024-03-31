import { defineStore } from 'pinia';
import { TranslateState, Translate, Language } from '@/store/translate/types';


const useTranslateStore = defineStore('translate', {
	state: (): TranslateState => ({
		translations: [],
		currentTranslation: {},
		currentLanguage: 'ru',
	}),

	actions: {
		async loadTranslate() {
			const languages = await import('@/translate/translate.json')
			this.translations = languages.default
			this.findAllTranslations()
			this.findCurrentTranslation()
		},
		findCurrentTranslation() {
			this.currentTranslation = this.translations.find((language: Language) => language.languageCode === this.currentLanguage)
		},
		updateCurrentLanguage(lang: string) {
			this.currentLanguage = lang
			this.findCurrentTranslation()
		}
	},

	getters: {
		getTranslation(): (translate: Translate) => string {
			return (translate: Translate): string => {
				return this.currentTranslation?.[translate.code] || translate.default;
			}
		}
	}

})

export default useTranslateStore;