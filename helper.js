const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

module.exports = compose;
