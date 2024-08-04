import axios from 'axios';
const apiClient = axios.create({
    baseURL: `https://free-ap-south-1.cosmocloud.io/development/api`,
    headers: {
        'projectId': '66af73663e50e013f0d273f3',
        'environmentId': "66af73663e50e013f0d273f4"
    }
});
export const getEmployees = () => apiClient.get(`/employees`, {
    params: {
        limit: 20,
        offset: 0
    }
});
export const getEmployee = (id) => apiClient.get(`/employees/${id}`);
export const createEmployee = (employee) => apiClient.post(`/employees`, employee);
export const deleteEmployee = (id) => apiClient.delete(`/employees/${id}`, {
    data: {}
});
