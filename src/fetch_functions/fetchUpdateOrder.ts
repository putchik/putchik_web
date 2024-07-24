import Order from '../components/Orders/OrderModel';

const fetchUpdateOrder = async (
  id: number, cargoValue: string, cost: number, weightValue: number, amountValue: number, date: string,
  onLoadingCityValue: string, onLoadingValue: string, onLoadingPhoneValue: string,
  onUnloadingCityValue: string, onUnloadingValue: string, onUnloadingPhoneValue: string,
  temperatureCondition: boolean, status: string, distanceValue: number
): Promise<Order> => {
  try {
    const requestBody = {
      id: id,
      cargo: cargoValue,
      cost: cost,
      weight: weightValue,
      amount: amountValue,
      loading_time: date,
      distance: distanceValue,
      temperature_condition: temperatureCondition,
      status: status,
      loading_points: [{
        locality: onLoadingCityValue,
        address: onLoadingValue,
        phone: onLoadingPhoneValue
      }],
      unloading_points: [{
        locality: onUnloadingCityValue,
        address: onUnloadingValue,
        phone: onUnloadingPhoneValue
      }]
    };

    const token = localStorage.getItem('token');
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/order`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error response:', errorData);
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in request:', error);
    throw error;
  }
}

export default fetchUpdateOrder;
