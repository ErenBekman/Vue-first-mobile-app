<template>
	<form class="ion-padding" @submit.prevent="submitForm">
		<ion-list>
			<ion-item>
				<ion-label position="floating"> Title </ion-label>
				<ion-input type="text" required v-model="title" />
			</ion-item>
			<ion-item>
				<ion-label position="floating"> Image URL </ion-label>
				<ion-input type="url" required v-model="imgUrl" />
			</ion-item>
			<ion-item>
				<ion-label position="floating"> Description </ion-label>
				<ion-textarea rows="5" v-model="description"></ion-textarea>
			</ion-item>
		</ion-list>
		<ion-button expand="block" fill="outline" type="submit">Save</ion-button>
	</form>
</template>

<script>
import {
	IonList,
	IonItem,
	IonLabel,
	IonInput,
	IonTextarea,
	IonButton,
} from '@ionic/vue';
export default {
	emits: ['save-memory'],
	components: {
		IonList,
		IonItem,
		IonLabel,
		IonInput,
		IonTextarea,
		IonButton,
	},
	data() {
		return {
			title: '',
			imgUrl: '',
			description: '',
		};
	},
	methods: {
		submitForm() {
			const memoryData = {
				title: this.title,
				image: this.imgUrl,
				description: this.description,
			};
			this.$emit('save-memory', memoryData);
		},
	},
};
</script>

<style></style>
