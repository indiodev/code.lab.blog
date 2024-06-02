import { Search } from 'lucide-react';
import React, { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Button } from 'Components/ui/button';
import { Input } from 'Components/ui/input';
import { cn } from 'Lib/utils';

export function Header(): React.ReactElement {
	const [searchParams, setSearchParams] = useSearchParams();
	const inputSearchRef = useRef<HTMLInputElement | null>(null);

	const [scroll, setScroll] = React.useState(false);
	const handleScroll = (): void => {
		setScroll(window.scrollY > 30);
	};

	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return (): void => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header
			className={cn(
				'flex w-full bg-header py-12 sm:py-16 transition-all duration-700',
				scroll && 'fixed bg-header py-6 sm:py-4 z-10',
			)}
		>
			<section className="container flex flex-col gap-8 sm:gap-12">
				<h1
					className={cn(
						'text-2xl md:text-[40px] font-medium text-center transition-all duration-700',
						scroll && 'hidden',
					)}
				>
					<span className="text-white">Code</span>
					<span className="text-red-blog">Lab</span>
				</h1>
				<form
					className="flex"
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
						className="transition-all duration-700 rounded-tr-none rounded-br-none flex-1 w-full h-14 bg-search text-white border-0 ring-0  focus-visible:ring-0 focus-visible:ring-offset-0 ring-offset-transparent text-sm sm:text-xl"
					/>

					<Button
						className="h-full bg-gray-blog rounded-tl-none rounded-bl-none"
						type="submit"
					>
						<Search />
					</Button>
				</form>
			</section>
		</header>
	);
}
