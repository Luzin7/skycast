import React from 'react';
import './footer.css';
import getCurrentYear from '../../scripts/getDate';

export default function Footer() {
	return (
		<footer>
			<div className="footer_container">
				<p>
					Este é um projeto refatorado. Para acessar o projeto original{' '}
					<a
						href="https://luzin7.github.io/react-weather-app/"
						target="_blank"
						rel="noreferrer"
					>
						clique aqui.
					</a>
				</p>
				<span>
					{getCurrentYear()} - Aplicação desenvolvida por{' '}
					<a
						href="https://lvictor-portfolio.vercel.app/"
						target="_blank"
						rel="noreferrer"
					>
						Luan Victor
					</a>
					.
				</span>
			</div>
		</footer>
	);
}
