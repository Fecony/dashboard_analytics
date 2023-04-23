import { createServer } from 'miragejs';

import widgetData from './data/serverWidgetsData.json';
import chartData from './data/serverChartData.json';

export function makeServer({ environment = 'development' } = {}) {
    return createServer({
        environment,

        routes() {
            this.namespace = 'api';

            this.get('/dashboard/widgets', () => widgetData);

            this.get('/dashboard/chart', () => chartData);
        },
    });
}
