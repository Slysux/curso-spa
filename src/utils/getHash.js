const getHash = () => location.hash.replace(/#\/(\d{1,2})\/?/, '$1').toLowerCase() || '/'

export default getHash;