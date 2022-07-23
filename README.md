# Backup Mode 文檔網站

該網站是使用 [Docusaurus 2](https://docusaurus.io/) 所構建出來的。

### 安裝

```
$ yarn
```

### 運行開發環境

```
$ yarn start
```

此指令啟動本地開發服務器並打開瀏覽器窗口。 大多數更改都會實時反映，而無需重新啟動服務器。

### 構建

```
$ yarn build
```

此指令將靜態內容生成到“build”目錄中，並且可以使用任何靜態內容託管服務提供服務。

### 部署

使用 SSH:

```
$ USE_SSH=true yarn deploy
```

不是使用 SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

如果您使用 GitHub 頁面進行託管，此命令是構建網站並推送到 `gh-pages` 分支的便捷方式。
