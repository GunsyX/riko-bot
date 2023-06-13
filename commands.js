const { InstallGlobalCommands } = require('./utils.js');
const keys = require('./keys.js');


const commands = [
    {
        name: 'owa',
        description: 'check if alive',
        type: 1,
    },
    {
        name: 'uwu',
        description: 'uwu',
        type: 1,
    }
];
InstallGlobalCommands(keys.AppID, commands);