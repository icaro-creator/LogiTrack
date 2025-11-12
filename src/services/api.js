import axios from 'axios';

const API_BASE_URL = 'https://api.logitrack.com/v1';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getShipments = async () => {
  try {
    const response = await apiClient.get('/shipments');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar remessas:', error);
    throw error;
  }
};

export const trackShipment = async (trackingId) => {
  try {
    const response = await apiClient.get(`/shipments/${trackingId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao rastrear remessa:', error);
    throw error;
  }
};

export const updateShipmentStatus = async (trackingId, status) => {
  try {
    const response = await apiClient.put(`/shipments/${trackingId}`, { status });
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar status:', error);
    throw error;
  }
};

export default apiClient;
