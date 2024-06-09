import { Heart } from 'lucide-react';

import { cn } from 'App/lib/utils';
import { Button } from 'Components/ui/button';
import {
	CardContent,
	CardDescription,
	CardHeader,
	Card as Root,
} from 'Components/ui/card';
import type { Post } from 'Models/post';
import { useFavorite } from 'Store/post/favorites';
export function PostCard({ data }: { data: Post }): React.ReactElement {
	const { toggle, favorite_list } = useFavorite();
	return (
		<Root className="border-search hover:ring-2 hover:ring-red-blog bg-transparent py-8 px-8 sm:px-10 sm:py-10 transition-all duration-700 border">
			<CardHeader className="flex justify-between flex-row p-0 items-center space-y-0">
				<CardDescription className="text-red-blog font-medium text-xs sm:text-sm md:text-base p-0 transition-all duration-700">
					{new Intl.DateTimeFormat('pt-BR', {
						dateStyle: 'medium',
					}).format(new Date(data.created_at))}
				</CardDescription>
				<Button
					className="bg-transparent p-0"
					onClick={() => toggle(data.id)}
				>
					<Heart
						className={cn(
							'text-red-blog w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-all duration-700',
							favorite_list.includes(data.id) && 'fill-red-blog',
						)}
					/>
				</Button>
			</CardHeader>
			<CardContent className="text-white font-medium gap-4 flex flex-col p-0">
				<h2 className="text-xl sm:text-xl md:text-2xl transition-all duration-700">
					{data.title}
				</h2>
				<p className="opacity-65 text-sm sm:text-base md:text-xl transition-all duration-700">
					{data.description}
				</p>
			</CardContent>
		</Root>
	);
}
