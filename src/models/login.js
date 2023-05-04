const form = document.querySelector('#login-form');

form.addEventListener('submit', async (event) => {
	event.preventDefault();

	const username = form.elements.username.value;
	const password = form.elements.password.value;

	try {
		const response = await fetch('/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username,
				password
			})
		});

		if (response.ok) {
			const { token } = await response.json();
			localStorage.setItem('token', token);
			window.location.href = '/dashboard';
		} else {
			alert('Invalid username or password');
		}
	} catch (error) {
		console.error(error);
	}
});
