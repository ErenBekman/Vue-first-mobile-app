<template>
	<base-layout
		:page-title="loadMemory ? loadMemory.title : 'loading...'"
		page-default-back-link="/memories"
	>
		<h2 v-if="!loadMemory">dont loaded</h2>
		<memory-overview
			v-else
			:title="loadMemory.title"
			:description="loadMemory.description"
			:image="loadMemory.image"
		></memory-overview>
	</base-layout>
</template>

<script>
import MemoryOverview from '../components/memories/MemoryOverview.vue';

export default {
	components: { MemoryOverview },
	data() {
		return {
			memoryId: this.$route.params.id,
		};
	},
	computed: {
		loadMemory() {
			return this.$store.getters.getMemory(this.memoryId);
		},
	},
};
</script>
