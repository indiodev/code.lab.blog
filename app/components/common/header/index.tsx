import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Input } from 'Components/ui/input';

export function Header(): React.ReactElement {
	const [searchParams, setSearchParams] = useSearchParams();
	const inputSearchRef = useRef<HTMLInputElement | null>(null);
	return (
		<header className="flex w-full bg-header py-12 sm:py-16">
			<section className="container flex flex-col gap-8 sm:gap-12">
				<h1 className="text-2xl md:text-[40px] font-medium text-center">
					<span className="text-white">Code</span>
					<span className="text-red-blog">Lab</span>
				</h1>
				<form
					className="flex flex-col space-y-2"
					onSubmit={(event) => {
						event.preventDefault();

						if (inputSearchRef?.current) {
							setSearchParams({ search: inputSearchRef.current.value! });
						}
					}}
				>
					<Input
						ref={inputSearchRef}
						defaultValue={searchParams.get('search') || ''}
						onChange={(event) => {
							if (!event.target.value) {
								setSearchParams({});
								return;
							}
						}}
						name="search"
						id="search"
						placeholder="Pesquisar no blog"
						className="w-full h-14 rounded-lg bg-search text-white border-0 ring-offset-search text-sm sm:text-xl"
					/>
					<span className="text-gray-500 text-right">
						Aperte enter para pesquisar
					</span>
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
