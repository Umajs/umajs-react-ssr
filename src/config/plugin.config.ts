import Uma, { TConfig } from '@umajs/core';
import * as path from 'path';

const { ROOT } = Uma.options;

export default <TConfig>{
    views: {
        enable: true,
        name: 'views',
        options: {
            root: `${process.cwd()}/views`,
            autoRender: true,
            opts: {
                map: { html: 'nunjucks' },
            },
        },
    },
    'react-ssr': {
        enable: true,
        options: {
            rootDir: 'web',
            ssr: true, // 全局开启服务端渲染
            cache: false, // 全局使用服务端渲染缓存 开发环境设置true无效
        },
    },
    error: true,
    logger: {
        enable: true,
        options: {
            level: 'ALL', // 日志输出级别
            consoleLevel: 'ALL',
            replaceConsole: false,
            file: null,
            dir: path.resolve(ROOT, './../logs'), // 日志目录
            errorLogName: 'errorlogger.log', // error级别日志文件名
            infoLogName: 'infologger.log', // info级别日志文件名
            warnLogName: 'warnlogger.log', // warn级别日志文件名
            allowDebugAtProd: true, // 是否允许打印debug日志
        },
    },
};
