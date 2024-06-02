import { useSearchParams } from 'react-router-dom';

import type { Post } from 'Models/post';

import { PostCard } from './post.card';

const data_list: Post[] = [
	{
		id: 1,
		created_at: new Date().toString(),
		description:
			'Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.',
		slug: 'o-que-e-linguagem-de-programacao',
		title: 'O que é linguagem de programação? Conheça as principais',
	},
	{
		id: 2,
		created_at: new Date().toString(),
		description:
			'O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.',
		slug: 'github-agora-permite-fazer-login-sem-precisar-de-senha',
		title: 'GitHub agora permite fazer login sem precisar de senha',
	},
	{
		id: 3,
		created_at: new Date().toString(),
		description:
			'O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.',
		slug: 'por-que-os-hiperlinks-são-azuis-em-sua-maioria',
		title: 'Por que os hiperlinks são azuis em sua maioria?',
	},
	{
		id: 4,
		created_at: new Date().toString(),
		description:
			'O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.',
		slug: 'github-agora-permite-fazer-login-sem-precisar-de-senha',
		title: 'GitHub agora permite fazer login sem precisar de senha',
	},
	{
		id: 5,
		created_at: new Date().toString(),
		description:
			'O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.',
		slug: 'github-agora-permite-fazer-login-sem-precisar-de-senha',
		title: 'GitHub agora permite fazer login sem precisar de senha',
	},
	{
		id: 6,
		created_at: new Date().toString(),
		description:
			'O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.',
		slug: 'github-agora-permite-fazer-login-sem-precisar-de-senha',
		title: 'GitHub agora permite fazer login sem precisar de senha',
	},
];

export function Blogs(): React.ReactElement {
	const [searchParams] = useSearchParams();
	const search = searchParams.get('search');

	const posts = data_list.filter((post) => post.title.includes(search ?? ''));

	return (
		<section className="container flex flex-col gap-10">
			{posts.length === 0 && (
				<p className="text-white text-center">
					Nenhuma postagem encontrada para <strong>{search}</strong>
				</p>
			)}

			{posts.length > 0 &&
				posts.map((post) => (
					<PostCard
						data={post}
						key={post.id}
					/>
				))}
		</section>
	);
}
