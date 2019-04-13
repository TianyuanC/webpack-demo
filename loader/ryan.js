const ryanLoader = source => {
    const json = JSON.stringify(source);
    return `export default ${json}`;
};

module.exports = ryanLoader;
