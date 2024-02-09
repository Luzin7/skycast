export default function handleFetchError(error) {
	const inputText = document.querySelector('.search');
	if (error.response) {
		if (error.response.status === 404) {
			inputText.placeholder =
				'Desculpe! Não encontramos o lugar que você procurou.';
			inputText.value = '';
		}

		if (error.response.status !== 404) {
			inputText.placeholder =
				'Houve algum problema na busca... Tente novamente';
			inputText.value = '';
		}
	}
}
