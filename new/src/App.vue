<script lang="ts">
import { defineComponent } from 'vue';
import { useTranslateStore } from '@/hooks/useTranslateStore';

export default defineComponent({
	name: 'App',
	mixins: [useTranslateStore],
	created() {
		this.loadTranslate()
	}
});
</script>

<template>
	<main class="page">
		<router-view/>
	</main>
</template>
