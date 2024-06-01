import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type PostFavorites = {
	favorite_list: number[];
	toggle: (id: number) => void;
};

export const useFavorite = create<PostFavorites>()(
	persist(
		(set) => ({
			favorite_list: [],
			toggle(id): void {
				set((state) => {
					if (state.favorite_list.includes(id)) {
						return {
							favorite_list: state.favorite_list.filter((i) => i !== id),
						};
					}

					return {
						favorite_list: [...state.favorite_list, id],
					};
				});
			},
		}),
		{ name: 'favorite_list', storage: createJSONStorage(() => sessionStorage) },
	),
);
