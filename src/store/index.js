import { createStore } from 'vuex';

const store = createStore({
	state: () => ({
		MemoriesData: [
			{
				id: 1,
				title: 'A trip into the mountains',
				image:
					'https://media-cdn.tripadvisor.com/media/photo-s/10/c4/23/16/highland-view-bed-and.jpg',
				description: 'lorem ipsum dolar ...',
			},
			{
				id: 2,
				title: 'Surfing the sea side',
				image:
					'https://upload.wikimedia.org/wikipedia/commons/4/4e/Mavericks_Surf_Contest_2010b.jpg',
				description: 'lorem ipsum dolar ...',
			},
			{
				id: 3,
				title: 'Good eating',
				image:
					'https://media.self.com/photos/5f490e4e4a75ee30a626683e/master/pass/woman_food_donut.jpeg',
				description: 'lorem ipsum dolar ...',
			},
			{
				id: 4,
				title: 'USA is good country',
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/USA_Flag_Map.svg/2560px-USA_Flag_Map.svg.png',
				description: 'lorem ipsum dolar ...',
			},
			{
				id: 5,
				title: 'Hiking',
				image:
					'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
				description: 'going for a hiking!',
			},
		],
	}),

	getters: {
		getMemories: (state) => state.MemoriesData,
		getMemory: (state) => {
			return (memoryId) => {
				console.log('memoryId :>> ', memoryId);
				return state.MemoriesData.find((memory) => memory.id == memoryId);
			};
		},
	},
	mutations: {
		addMemory(state, memoryData) {
			const newMemory = {
				id: new Date().toISOString(),
				title: memoryData.title,
				image: memoryData.image,
				description: memoryData.description,
			};
			state.MemoriesData.unshift(newMemory);
		},
	},
	actions: {
		addMemory(context, memoryData) {
			context.commit('addMemory', memoryData);
		},
	},
});

export default store;
