import { Heart } from 'lucide-react';

import { Button } from 'Components/ui/button';
import {
	CardContent,
	CardDescription,
	CardHeader,
	Card as Root,
} from 'Components/ui/card';
import type { Post } from 'Models/post';
export function Card({ data }: { data: Post }): React.ReactElement {
	return (
		<Root className="border-search hover:ring-2 hover:ring-red-blog bg-transparent p-10">
			<CardHeader className="flex justify-between flex-row p-0">
				<CardDescription className="text-red-blog font-medium">
					{new Intl.DateTimeFormat('pt-BR', {
						dateStyle: 'medium',
					}).format(new Date(data.created_at))}
				</CardDescription>
				<Button className="bg-transparent">
					<Heart className="text-red-blog fill-red-blog w-7 h-7" />
				</Button>
			</CardHeader>
			<CardContent className="text-white font-medium gap-4 flex flex-col p-0">
				<h2 className="text-2xl">{data.title}</h2>
				<p className="opacity-65 text-xl">{data.description}</p>
			</CardContent>
		</Root>
	);
}
