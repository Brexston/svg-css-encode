<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useTranslateStore } from "@/hooks/useTranslateStore";
import { Translate } from '@/store/translate/types';

export default defineComponent({
	name: 'TextComponent',
	mixins: [useTranslateStore],

    props: {
        translate: {
            type: Object as PropType<Translate>,
            required: true
        }
    }
})  
</script>

<template>
    <span v-html="getTranslation(translate)"></span>
</template>
