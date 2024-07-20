import vue from 'rollup-plugin-vue'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default {
    input: 'src/index.ts', // 指定输入文件路径，这里是项目的入口文件
    output: [
        {
            file: 'lib/my-component.esm.js', // 输出的文件路径及文件名
            format: 'es', // 输出文件的模块格式，这里是 ES 模块
        },
        {
            file: 'lib/my-component.umd.js', // 另一个输出文件路径及文件名
            format: 'umd', // 输出文件的模块格式，这里是 UMD（通用模块定义）
            name: 'MyComponent', // 当 UMD 格式时，需要指定一个全局变量名
            globals: {
                vue: 'Vue', // 表示在全局环境中 Vue 的变量名是 'Vue'
            },
        },
    ],
    plugins: [
        resolve({
            extensions: ['.js', '.ts', '.vue'], // 解析这些扩展名的文件
        }),
        commonjs(), // 允许 Rollup 解析 CommonJS 模块
        vue(), // 处理 .vue 文件
        typescript({
            tsconfig: './tsconfig.json', // 使用项目根目录下的 tsconfig.json 配置文件
        }),
    ],
    external: ['vue'], // 指定这些模块不应被打包，而是在运行时从外部提供
}