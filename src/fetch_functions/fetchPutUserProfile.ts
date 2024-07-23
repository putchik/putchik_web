import { UserInfo } from "../components/Profile/Profile";

async function fetchPutUserProfile(userInfo: UserInfo) {
    try {
        const response = await fetch(import.meta.env.VITE_API_BASE_URL + '/api/user/me', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body:
                userInfo.is_organization_account
                    ? JSON.stringify({
                        id: userInfo.id,
                        phone: userInfo.phone,
                        email: userInfo.email,
                        name: userInfo.name,
                        is_organization_account: userInfo.is_organization_account,
                        organization: {
                            organization_name: userInfo.organization,
                            inn: userInfo.inn,
                        }
                    })
                    : JSON.stringify({
                        id: userInfo.id,
                        phone: userInfo.phone,
                        email: userInfo.email,
                        name: userInfo.name,
                        is_organization_account: userInfo.is_organization_account,
                        organization: {
                            organization_name: userInfo.organization,
                            inn: userInfo.inn,
                        }
                    })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the /api/user/me fetch operation:', error);
        throw error;
    }
}

export default fetchPutUserProfile;