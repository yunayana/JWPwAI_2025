const fs = require('fs');
const events = require('events');
const util = require('util');

function Watcher(watchDir, processedDir) {
    this.watchDir = watchDir;
    this.processedDir = processedDir;
}

util.inherits(Watcher, events.EventEmitter);

Watcher.prototype.watch = function () {
    const watcher = this;
    fs.readdir(this.watchDir, function (err, files) {
        if (err) throw err;
        for (const file of files) {
            watcher.emit('process', file);
        }
    });
};

Watcher.prototype.start = function () {
    const watcher = this;
    fs.watch(this.watchDir, function (eventType, filename) {
        if (filename) {
            watcher.watch();
        }
    });
};

const watchDir = './watch';
const processedDir = './done';
const watcher = new Watcher(watchDir, processedDir);

watcher.on('process', function (file) {
    const watchFile = watchDir + '/' + file;       // używamy stałych katalogów
    const processedFile = processedDir + '/' + file.toLowerCase(); // zmiana nazwy na małe litery
    fs.rename(watchFile, processedFile, function (err) {
        if (err) throw err;
        console.log(`Przeniesiono: ${file} -> ${processedFile}`);
    });
});

watcher.start();
console.log('Watcher uruchomiony, obserwuje katalog ./watch...');
watcher.watch();
