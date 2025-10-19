const { Worker } = require('worker_threads');

function runWorker(limit) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./sumWorker.js', { workerData: { limit } });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0)
                reject(new Error(`Worker stopped with exit code ${code}`));
        });
    });
}

async function runMultipleWorkers() {
    const limits = [1e6, 1e7, 1e8, 1e9];
    const start = Date.now();
    const promises = limits.map(limit => runWorker(limit));
    const results = await Promise.all(promises);
    const end = Date.now();

    results.forEach((result, index) => {
        console.log(`Worker ${index + 1} sum: (limit ${limits[index]}) = ${result}`);
    });
    console.log(`Total time: ${(end - start) / 1000} seconds`);
}
runMultipleWorkers();