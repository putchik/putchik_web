interface Order {
    id: number;
    readable_id: string;
    customer_id: number;
    cargo: string;
    created_at: string; // Date string in ISO 8601 format
    cost: number;
    distance: number;
    weight: number;
    amount: number;
    temperature_condition: boolean;
    status: "confirmed" | "in_process" | "done";
    loading_points: LoadingPoint[];
    unloading_points: LoadingPoint[];
}

interface LoadingPoint {
    locality: string;
    address: string;
    phone: string;
    lat?: string;
    lon?: string;
    index?: number;
}

export default Order;