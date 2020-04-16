async function start() {
	return await Promise.resolve(`Async is working`);
}

start().then(console.log);

const unUsedVar = [];


class Util {
	static id = Date.now()
}

console.log(` >>>>>>>  Util.id :: `, Util.id);
console.log(unUsedVar);


import(`lodash`).then( (_) => {
	console.log('Lodash', _.random(0, 42, true) );
});