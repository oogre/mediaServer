
const {run} = require('./common/os.tools.js');
const {wait} = require('./common/tools.js');


const obsCli = async (port, param) => {
    return run(`python.exe /Users/vince/AppData/Roaming/Python/Python310/site-packages/obs_cli.py -P ${port} ${param}`);
    // return wait(10);
}
const visibleMediaPerScene = {};

let _obsDict = [];

const getPortByScene = (name) => {
    const {port} = _obsDict.find(({sceneName}) => sceneName == name);
    return port;
}

module.exports.init = (dict) => {
    _obsDict = dict
}

module.exports.showMedia = async ({sceneName, port, mediaName}) =>{
    if(!port){
        port = getPortByScene(sceneName);
    }
    if(!!visibleMediaPerScene[sceneName]){
        module.exports.hideMedia({sceneName, port, mediaName:visibleMediaPerScene[sceneName]})
    }
    visibleMediaPerScene[sceneName] = mediaName;
    console.log("show", sceneName, port, mediaName);
    await obsCli(port, `item show "${mediaName}"`);
    return obsCli(port, `filter enable "${mediaName}" "Turn On"`);
};

module.exports.hideMedia = async ({sceneName, port, mediaName}) =>{
    if(!port){
        port = getPortByScene(sceneName);
    }
    console.log("hide", sceneName, port, mediaName);
    await obsCli(port, `filter enable "${mediaName}" "Turn Off"`);
    return obsCli(port, `item hide "${mediaName}"`);
};

module.exports.listMedia = async (sceneName) =>{
    const port = getPortByScene(sceneName);
    const result = await obsCli(port, `item list`);

    return [{sceneName, port, mediaName:"bonjour"}, {sceneName, port, mediaName:"yolo"}]
};

