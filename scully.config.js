const { registerPlugin } = require('@scullyio/scully');

const routeProcess = Symbol('routeProcess');
const routeProcessPlugin = (routes) => {
    const { ROUTES: en } = require('./src/assets/i18n/en.json');
    const { ROUTES: ru } = require('./src/assets/i18n/ru.json');

    const translateRoutes = (prefix, translations) => routes.map(({ route, ...handledRoute }) => ({
        ...handledRoute,
        route: `/${ prefix }${ Object.entries(translations).reduce((r, [a, b]) => r.replace(a, b), route) }`
    }));

    return [
        ...translateRoutes('en', en),
        ...translateRoutes('ru', ru)
    ];
};

registerPlugin('routeProcess', routeProcess, routeProcessPlugin);

module.exports.config = {
    defaultPostRenderers: []
};
