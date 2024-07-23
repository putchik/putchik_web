async function fetchPostAdminLogin(login: string, password: string) {
    try {
        const response = await fetch(import.meta.env.VITE_API_BASE_URL + '/api/admin/sign_in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:
                JSON.stringify({
                    login: login,
                    password: password,
                })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the /api/admin/sign_in fetch operation:', error);
        throw error;
    }
}

export default fetchPostAdminLogin