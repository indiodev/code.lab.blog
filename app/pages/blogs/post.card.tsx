import { Heart } from 'lucide-react';

import { Button } from 'Components/ui/button';
import {
	CardContent,
	CardDescription,
	CardHeader,
	Card as Root,
} from 'Components/ui/card';
import type { Post } from 'Models/post';
export function PostCard({ data }: { data: Post }): React.ReactElement {
	return (
		<Root className="border-search hover:ring-2 hover:ring-red-blog bg-transparent py-8 px-8 sm:px-10 sm:py-10">
			<CardHeader className="flex justify-between flex-row p-0 items-center space-y-0">
				<CardDescription className="text-red-blog font-medium text-xs sm:text-base p-0">
					{new Intl.DateTimeFormat('pt-BR', {
						dateStyle: 'medium',
					}).format(new Date(data.created_at))}
				</CardDescription>
				<Button className="bg-transparent p-0">
					<Heart className="text-red-blog fill-red-blog w-5 h-5 sm:w-7 sm:h-7" />
				</Button>
			</CardHeader>
			<CardContent className="text-white font-medium gap-4 flex flex-col p-0">
				<h2 className="text-xl sm:text-2xl">{data.title}</h2>
				<p className="opacity-65 text-sm sm:text-xl">{data.description}</p>
			</CardContent>
		</Root>
	);
}
