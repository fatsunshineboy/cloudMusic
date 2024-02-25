
### 运行项目

1. 确保安装了 `Nodejs` ，可通过 `cmd` 运行 `node -v` 查看是否安装成功

2. 打开 `cloudMusic`文件夹，在当前路径打开 `cmd` 运行以下命令，安装项目依赖

   ```bash
   npm install
   ```

3. `cmd`运行以下命令，启动项目，默认会在`http://127.0.0.1:5173/`启动一个本地服务器

   ```bash
   npm run dev
   ```

4. 重启一个`cmd`,打开 `NeteaseCloudMusicApi`文件夹，在当前路径打开 `cmd` 运行以下命令，安装项目依赖

   ```bash
   npm install
   ```

5. 运行以下命令，启动接口服务器，默认会在`http://127.0.0.1:5173/`启动一个接口服务器

   ```bash
   node app.js
   ```

6. 访问 `http://127.0.0.1:5173/`
   



### 注意事项：

1. 项目依赖 NPM 包管理工具，可以通过下载 [Node.js]([Node.js (nodejs.org)](https://nodejs.org/en/)) 自动安装 NPM

2. `cloudMusic` 为本人所写项目，`NeteaseCloudMusicApi` 为别人开发的网易云音乐接口服务器项目

3. 为了减少文件大小，两个项目都没有安装依赖，运行项目请参考运行项目的步骤

4. 如想获取项目最新动态,可以直接从`github`上`clone`下来

   项目：

   ```bash
   git clone git@github.com:fatsunshineboy/cloudMusic.git
   ```

   接口服务器：

   ```bash
   git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git
   ```

5. 有关网址：

   ```git
   项目地址：https://github.com/fatsunshineboy/cloudMusic
   接口服务器地址：https://github.com/Binaryify/NeteaseCloudMusicApi
   ```

6. 如果访问失败，可能是由于接口服务器的默认端口`5173`被占用，此时需要修改源文件更改接口服务器的访问地址

   修改方式如下：

   

   打开 `cloudMusic-src-api-index.ts` 文件,在第5行可以看到如下代码
   
   ```typescript
   const baseURL = import.meta.env.PROD
     ? "http://1.117.75.142:3000/"
    : "http://localhost:3000";
   ```
   
   将第7行的`http://localhost:3000`修改为`http://localhost:你的接口服务器端口号`即可
