//

const leafTag = '_@@_EasyJSXLeaf'
export function isLeaf(tree){
    return tree[leafTag]
}


export function list2map(list,options = {idKey:'id'}) {
    var map = {};  //id:[]    
    var idKey = options.idKey;
    
    for (var i in list) {
        var item = list[i];
        map[item[idKey]] = item;
    }
    return map;
}

export function list2tree(list,options = {idKey:'id',pidKey:'pid'}) {
    var treeList = [];
    var pidKey = options.pidKey;
    var map = {};  //id:[]    
    var idKey = options.idKey;
    
    for (var i in list) {
        var item = list[i];
        map[item[idKey]] = {...item};
    }

    for (var i in map) {
        var item = map[i];
        item[leafTag] = true        
        if (item.pid) {
            var parent = map[item[pidKey]]
            parent.children = parent.children ? parent.children.concat(item) : [item];
            item.parent = parent;
        } else {
            treeList.push(item)
        }
    }
    return treeList;
}
