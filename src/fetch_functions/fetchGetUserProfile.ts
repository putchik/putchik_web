async function fetchGetUserProfile() {
    try {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'));

        var requestOptions: RequestInit = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        const response = await fetch(import.meta.env.VITE_API_BASE_URL + '/api/user/me/profile', requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the /api/user/me/profile fetch operation:', error);
        throw error;
    }
};

export default fetchGetUserProfile;