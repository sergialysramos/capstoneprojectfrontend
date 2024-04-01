import AxiosConfig from "./axios";

class DataService extends AxiosConfig {
    constructor() {
        super("user");
    }

    async getUserAppointments(token, userId) {
        try {
            const response = await this.axios.get(`/getUserAppointments/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching appointments:", error);
            throw error;
        }
    }

    async updateAppointmentStatus(token, appointmentId, status) {
        try {
            const response = await this.axios.put(`/updateAppointmentStatus/${appointmentId}`, { status }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            console.error("Error updating appointment status:", error);
            throw error;
        }
    }
}

const dataService = new DataService();
export default dataService;
