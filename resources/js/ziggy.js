const Ziggy = {
    url: 'http://localhost:8000',
    port: 8000,
    defaults: {},
    routes: {
        'horizon.stats.index': { uri: 'horizon/api/stats', methods: ['GET', 'HEAD'] },
        'horizon.workload.index': { uri: 'horizon/api/workload', methods: ['GET', 'HEAD'] },
        'horizon.masters.index': { uri: 'horizon/api/masters', methods: ['GET', 'HEAD'] },
        'horizon.monitoring.index': { uri: 'horizon/api/monitoring', methods: ['GET', 'HEAD'] },
        'horizon.monitoring.store': { uri: 'horizon/api/monitoring', methods: ['POST'] },
        'horizon.monitoring-tag.paginate': { uri: 'horizon/api/monitoring/{tag}', methods: ['GET', 'HEAD'] },
        'horizon.monitoring-tag.destroy': { uri: 'horizon/api/monitoring/{tag}', methods: ['DELETE'] },
        'horizon.jobs-metrics.index': { uri: 'horizon/api/metrics/jobs', methods: ['GET', 'HEAD'] },
        'horizon.jobs-metrics.show': { uri: 'horizon/api/metrics/jobs/{id}', methods: ['GET', 'HEAD'] },
        'horizon.queues-metrics.index': { uri: 'horizon/api/metrics/queues', methods: ['GET', 'HEAD'] },
        'horizon.queues-metrics.show': { uri: 'horizon/api/metrics/queues/{id}', methods: ['GET', 'HEAD'] },
        'horizon.jobs-batches.index': { uri: 'horizon/api/batches', methods: ['GET', 'HEAD'] },
        'horizon.jobs-batches.show': { uri: 'horizon/api/batches/{id}', methods: ['GET', 'HEAD'] },
        'horizon.jobs-batches.retry': { uri: 'horizon/api/batches/retry/{id}', methods: ['POST'] },
        'horizon.pending-jobs.index': { uri: 'horizon/api/jobs/pending', methods: ['GET', 'HEAD'] },
        'horizon.completed-jobs.index': { uri: 'horizon/api/jobs/completed', methods: ['GET', 'HEAD'] },
        'horizon.failed-jobs.index': { uri: 'horizon/api/jobs/failed', methods: ['GET', 'HEAD'] },
        'horizon.failed-jobs.show': { uri: 'horizon/api/jobs/failed/{id}', methods: ['GET', 'HEAD'] },
        'horizon.retry-jobs.show': { uri: 'horizon/api/jobs/retry/{id}', methods: ['POST'] },
        'horizon.jobs.show': { uri: 'horizon/api/jobs/{id}', methods: ['GET', 'HEAD'] },
        'horizon.index': { uri: 'horizon/{view?}', methods: ['GET', 'HEAD'], wheres: { view: '(.*)' } },
        'sanctum.csrf-cookie': { uri: 'sanctum/csrf-cookie', methods: ['GET', 'HEAD'] },
        telescope: { uri: 'telescope/{view?}', methods: ['GET', 'HEAD'], wheres: { view: '(.*)' } },
        'ignition.healthCheck': { uri: '_ignition/health-check', methods: ['GET', 'HEAD'] },
        'ignition.executeSolution': { uri: '_ignition/execute-solution', methods: ['POST'] },
        'ignition.updateConfig': { uri: '_ignition/update-config', methods: ['POST'] },
        about: { uri: '/', methods: ['GET', 'HEAD'] },
        projects: { uri: 'projects', methods: ['GET', 'HEAD'] },
        'projects.show': { uri: 'projects/{slug}', methods: ['GET', 'HEAD'] },
        contact: { uri: 'contact', methods: ['GET', 'HEAD'] },
        'contact.store': { uri: 'contact', methods: ['POST'] },
        'sign-in': { uri: 'sign-in', methods: ['GET', 'HEAD'] },
        'sign-in.store': { uri: 'sign-in', methods: ['POST'] },
        'sign-out': { uri: 'sign-out', methods: ['POST'] },
        dashboard: { uri: 'dashboard', methods: ['GET', 'HEAD'] },
    },
};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };