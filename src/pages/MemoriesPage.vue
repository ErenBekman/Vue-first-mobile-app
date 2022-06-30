<template>
	<base-layout page-title="All Memories">
		<template v-slot:actions-end>
			<ion-button router-link="/memories/add">
				<ion-icon slot="icon-only" :icon="add" />
			</ion-button>
		</template>
		<memories-list :memories="memories"></memories-list>
	</base-layout>
</template>

<script>
import MemoriesList from '../components/memories/MemoriesList.vue';
import { IonButton, IonIcon } from '@ionic/vue';
import { add, camera } from 'ionicons/icons';
export default {
	components: {
		MemoriesList,
		IonButton,
		IonIcon,
	},
	data() {
		return {
			add,
			camera,
		};
	},
	computed: {
		memories() {
			return this.$store.getters.getMemories;
		},
	},
};
</script>
