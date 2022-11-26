const UrlParser = {
    parseActiveUrlWithCombiner() {
        const url = window.location.hash.slice(1).toLowerCase();
        const mixedUrl = this._urlMixer(url);
        return this._urlCombiner(mixedUrl);
    },

    parseActiveUrlWithoutCombiner() {
        const url = window.location.hash.slice(1).toLowerCase();
        return this._urlMixer(url);
    },

    _urlMixer(url) {
        const urlsSplits = url.split('/');
        return {
            resource: urlsSplits[1] || null,
            id: urlsSplits[2] || null,
            verb: urlsSplits[3] || null,
        };
        },

    _urlCombiner(splitedUrl) {
        return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
        + (splitedUrl.id ? '/:id' : '')
        + (splitedUrl.verb ? `/${splitedUrl.verb}` : '');
    },
};

export default UrlParser;