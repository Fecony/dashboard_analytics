import http from '@/http-client';
import { ChartData, WidgetData } from '@/types';

class DashboardService {
    getWidgets(): Promise<any> {
        return http.get<WidgetData>('/dashboard/widgets');
    }

    getChart(): Promise<any> {
        return http.get<ChartData>(`/dashboard/chart`);
    }
}

export default new DashboardService();
