async function fetchOrderDetails(
    cargoValue: string, weightValue: number, amountValue: number, date: string,
    onLoadingCityValue: string, onLoadingValue: string, onLoadingPhoneValue: string,
    onUnloadingCityValue: string, onUnloadingValue: string, onUnloadingPhoneValue: string,
    temperatureCondition: boolean
) {
    try {
        const requestBody = {
            cargo: cargoValue,
            loading_time: date,
            loading_points: [{
                locality: onLoadingCityValue,
                address: onLoadingValue,
                phone: onLoadingPhoneValue
            }],
            unloading_points: [{
                locality: onUnloadingCityValue,
                address: onUnloadingValue,
                phone: onUnloadingPhoneValue
            }],
            weight: weightValue,
            amount: amountValue,
            temperature_condition: temperatureCondition
        };

        console.log('Тело запроса:', requestBody); // Отладочная строка

        const token = localStorage.getItem('token');
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
        };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/order/create_order`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Ответ с ошибкой:', errorData); // Отладочная строка
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Проблема с выполнением запроса:', error);
        throw error;
    }
}

export default fetchOrderDetails;
