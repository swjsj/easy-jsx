export var _config = {
    staticFileDir:'.',
    apiServer:''
}

export function getConfig(){
    return _config;
}

export function setConfig(config){
    debugger    
    _config = config;
}