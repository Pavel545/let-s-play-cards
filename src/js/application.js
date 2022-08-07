window.complexity = ''
window.application = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName) {
        window.application.screens[screenName]()
    },
    renderBlock: function (blockName, container, cls, content, attrs) {
        window.application.blocks[blockName](container, cls, content, attrs)
    },
    timers: [],
}
