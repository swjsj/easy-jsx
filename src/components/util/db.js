export var _database = {}

export function get(key){
    return _database[key];
}

export function set(key,val){
    _database[key] = val;
}