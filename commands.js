import 'dotenv/config';
import { InstallGlobalCommands } from './utils.js';
import keys from './keys.js';


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