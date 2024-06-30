import { TypesOfLogin } from "../components/LogInInputTypes";

async function fetchPostSendCode(typeOfLogin: TypesOfLogin, phone: string, email: string) {
    try {
        const response = await fetch('http://localhost:8000/api/auth/send_code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:
                typeOfLogin == "phone"
                    ? JSON.stringify({
                        phone: phone
                    })
                    : JSON.stringify({
                        email: email
                    })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the /api/auth/send_code fetch operation:', error);
        throw error;
    }
}

export default fetchPostSendCode