type AdditionalBlock = {
    city: string;
    address: string;
    phone: string;
  };
  
  async function fetchCreateOrder(
    cargoValue: string, weightValue: number, amountValue: number, date: string,
    onLoadingCityValue: string, onLoadingValue: string, onLoadingPhoneValue: string,
    onUnloadingCityValue: string, onUnloadingValue: string, onUnloadingPhoneValue: string,
    temperatureCondition: boolean, additionalLoadingPoints: AdditionalBlock[]
  ) {
    try {
      const loadingPoints = [
        {
          locality: onLoadingCityValue,
          address: onLoadingValue,
          phone: onLoadingPhoneValue
        },
        ...additionalLoadingPoints.map(point => ({
          locality: point.city,
          address: point.address,
          phone: point.phone
        }))
      ];
  
      const unloadingPoints = [
        {
          locality: onUnloadingCityValue,
          address: onUnloadingValue,
          phone: onUnloadingPhoneValue
        }
      ];
  
      const requestBody = {
        cargo: cargoValue,
        loading_time: date,
        loading_points: loadingPoints,
        unloading_points: unloadingPoints,
        weight: weightValue,
        amount: amountValue,
        temperature_condition: temperatureCondition
      };
  
      console.log('Тело запроса:', requestBody);
  
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
        console.error('Ответ с ошибкой:', errorData);
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Проблема с выполнением запроса:', error);
      throw error;
    }
  }
  
  export default fetchCreateOrder;
  