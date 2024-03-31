<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useTranslateStore } from '@/hooks/useTranslateStore';

export default defineComponent({
	name: 'Header',
    mixins: [useTranslateStore],
    props: {
        headText: {
            type: Object as PropType<{title: string, description?: string}>,
            required: true
        }
    },
    created() {
        const lang = this.$route.params.lang 
		this.updateCurrentLanguage(lang as string || 'ru')
        if(!lang)
        this.$router.push({ hash: 'ru' })
	},
    watch: {
		$route(to: any) {
			this.updateCurrentLanguage(to.params.lang)
		}
	},
})
</script>

<template>
    <header class="header">
        <nav class="header__nav">
            <router-link class="header__nav-link" to="/">
                <TextComponent :translate="{default: 'Конвертер', code: 'menuTitle'}"></TextComponent>
            </router-link>
            <router-link class="header__nav-link" to="/faq">
                <TextComponent :translate="{default: 'FAQ'}"></TextComponent>
            </router-link>
        </nav>
        <div class="header__lang">
            <router-link 
                v-for="lang in translations" 
                :key="lang.languageCode" 
                class="header__lang-link" 
                :to="lang.languageCode" 
                @click="updateCurrentLanguage(lang.languageCode)">
                {{ lang.languageCode }}
            </router-link>
        </div>
        
        <h1 class="header__title">
            <TextComponent :translate="{default: headText.title, code: 'title'}"></TextComponent>
        </h1>
        <p v-if="headText.description" class="header__description">
            <TextComponent :translate="{default: headText.description, code: 'description'}"></TextComponent>
        </p>
    </header>
</template>


<style lang="sass">
.header
    display: flex
    align-items: center
</style>