interface Window {
    complexity: string;
    application: { screens; blocks;renderScreen; renderBlock; timers};
    deckID: number[];
    time: string|null|undefined;
    deckT:NodeListOf<Element>|undefined|null;
}
window.complexity = '';
window.application = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName) {
        window.application.screens[screenName]();
    },
    renderBlock: function (blockName, container, cls, content, attrs) {
        window.application.blocks[blockName](container, cls, content, attrs);
    },
    timers: [],
};

window.deckID = [
    6.1, 7.1, 8.1, 9.1, 10.1, 11.1, 12.1, 13.1, 14.1, 6.2, 7.2, 8.2, 9.2, 10.2,
    11.2, 12.2, 13.2, 14.2, 6.3, 7.3, 8.3, 9.3, 10.3, 11.3, 12.3, 13.3, 14.3,
    6.4, 7.4, 8.4, 9.4, 10.4, 11.4, 12.4, 13.4, 14.4,
];
window.time = '00:00';
