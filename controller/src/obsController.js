
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

module.exports.blastMedia = async ({sceneName, port, sourceName}) =>{
    if(!port){
        port = getPortByScene(sceneName);
    }
   
    console.log("blast", sceneName, port, sourceName);
    return obsCli(port, `item toggle "${sourceName}"`);
    //return obsCli(port, `item hide "${sourceName}"`);
};


module.exports.showMedia = async ({sceneName, port, sourceName}) =>{
    if(!port){
        port = getPortByScene(sceneName);
    }
   /* if(!!visibleMediaPerScene[sceneName]){
        module.exports.hideMedia({sceneName, port, sourceName:visibleMediaPerScene[sceneName]})
    }
    visibleMediaPerScene[sceneName] = sourceName;*/
    console.log("show", sceneName, port, sourceName);
    await obsCli(port, `item show "${sourceName}"`);
    try{
        await obsCli(port, `filter enable "${sourceName}" "Turn On"`);
    }catch(error){}
};


module.exports.hideMedia = async ({sceneName, port, sourceName}) =>{
    if(!port){
        port = getPortByScene(sceneName);
    }
    try{
        await obsCli(port, `filter enable "${sourceName}" "Turn Off"`);
    }catch(error){}
    
    return obsCli(port, `item hide "${sourceName}"`);
};

module.exports.listMedia = async (sceneName) =>{

    const port = getPortByScene(sceneName);
    let rawList = await obsCli(port, `-j item list`);
    let list = JSON.parse(rawList)
    return list.map(({sourceName}) => {
        return {
            sourceName,
            sceneName,
            port
        }
    });
};

