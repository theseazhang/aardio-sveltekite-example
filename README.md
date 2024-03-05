## 如何使用

建议使用最新版node和npm。低于某个版本，可能导致依赖安装失败。
如果没有挂vpn，请将npm安装源设置为国内镜像，以避免安装失败。

运行`npm install`安装依赖包，然后运行`npm run dev`进行开发测试。

## 本地打包模式

默认采用此模式。运行`npm run build`输出生产文件，位于'build'目录下。复制到aardio生成的exe目录下，即可运行。

## 服务端node部署模式

参考文档：https://kit.svelte.dev/docs/adapter-node

运行`npm i -D @sveltejs/adapter-node`安装node适配器。

修改`svelte.config.js`

```js
import adapter from '@sveltejs/adapter-node';

export default {
	kit: {
		adapter: adapter()
	}
};
```

使用git或ftp在服务器上同步仓库中，运行`npm install`安装依赖包。然后运行`npm run build`构建应用。

然后运行`node -r dotenv/config build`启动应用。

一般情况下，在生产环境下会配合使用pm2方便后台运行和应用管理。

## pm2

`pm2 start build/index.js --name myapp`

`pm2 stop myapp`

`pm2 restart myapp`

生产环境默认端口为3000。

## 常见问题

1. 非https模式下服务端set-cookie失败：

`svelte.config.js`中可修改配置，取消跨域检查。

```js
const config = {
	kit: {
		adapter: adapter(),
		csrf: {
			checkOrigin: false
		}
	}
};
```

2. svelteKit中调用aardio函数，会显示一个烦人的下划线，提示missing-declaration。

这是因为svelte不能识别aardio导入的js函数。在函数调用的行上方，添加
`<!-- svelte-ignore missing-declaration -->`即可消除下划线，在vscode中支持快速修复.
