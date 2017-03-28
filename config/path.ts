/**
 * 提供基础目录服务
 */


//fix typescript end

const path = require('path');


export const CWD = process.cwd();
export const BUILD = path.join(CWD, 'dist');

export const CWD_NODE_MODULES = path.join(CWD, 'node_modules');
export const NODE_MODULES = path.join(__dirname, '../node_modules');

//客户端源代码路径
export const SOURCE_PATH = path.join(CWD, 'src');
export const STATIC_PATH = path.join(CWD, 'public');
