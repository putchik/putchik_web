import Order from "../components/Orders/OrderModel";
import { ADMIN_AUTH_PAGE } from "../router/paths";

async function fetchPostAdminOrder(order: Order, adminPrice: string, adminStatus: string) {
    try {
        if (localStorage.getItem('token') == undefined) {
            window.location.href = ADMIN_AUTH_PAGE;
            return;
        }
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'));
        myHeaders.append("Content-Type", "application/json")

        var requestOptions: RequestInit = {
            method: 'PUT',
            headers: myHeaders,
            redirect: 'follow',
            body:
                JSON.stringify({
                    ...order,
                    cost: adminPrice,
                    status: adminStatus,
                })
        };
        console.log({
            ...order,
            cost: adminPrice,
            status: adminStatus,
        });
        const response = await fetch(import.meta.env.VITE_API_BASE_URL + '/api/admin/order', requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the /api/admin/order fetch operation:', error);
        throw error;
    }
}

export default fetchPostAdminOrder;