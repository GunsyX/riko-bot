const { InstallGlobalCommands } = require('./utils.js');
const keys = require('./keys.js');


const commands = [
    {
        name: 'owa?',
        description: 'check if alive',
    },
    {
        name: 'uwu',
        description: 'uwu',
    }
];
InstallGlobalCommands(keys.AppID, commands);