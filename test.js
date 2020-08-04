"use strict";

console.log('in test');

async function sleep(ms) {
    return await new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve();
            }, ms || 500);
        } catch (error) {
            reject(error);
        }
    });
}

async function run() {
    console.log('sleep for 5 s');
    await sleep(5000);
    console.log('end sleep');
}

const r = run();
r.catch((e) => {
    console.log('catch', e);
});
r.then(() => {
    console.log('end run');
});
