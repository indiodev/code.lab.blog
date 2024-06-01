import { useRef } from 'react';

import { Input } from 'Components/ui/input';

export function Header(): React.ReactElement {
	const inputSearchRef = useRef<HTMLInputElement | null>(null);
	return (
		<header className="flex w-full bg-header py-16">
			<section className="container flex flex-col gap-12">
				<h1 className="text-[40px] font-medium text-center">
					<span className="text-white">Code</span>
					<span className="text-red-blog">Lab</span>
				</h1>
				<form
					onSubmit={(event) => {
						event.preventDefault();
						console.log(inputSearchRef.current?.value);
					}}
				>
					<Input
						ref={inputSearchRef}
						placeholder="Pesquisar no blog"
						className="w-full h-14 rounded-lg bg-search text-white border-0 ring-offset-search text-xl"
					/>
					<button
						className="sr-only"
						type="submit"
					>
						Pesquisar
					</button>
				</form>
			</section>
		</header>
	);
}
