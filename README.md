# C++ 学习应用

这是一个轻量级前端应用，帮助初学者学习 C++：

- 学习路线展示
- 概念卡片轮播
- 每日小测互动

## 本地运行

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。

## GitHub Pages 无法自动打开的常见原因

如果你点击 `https://machunzheng2553.github.io/GitHubC-/` 没有自动跳转或打不开，通常是下面几种原因：

1. **仓库还没启用 Pages**
   - 打开仓库 `Settings -> Pages`
   - `Build and deployment` 选择 **GitHub Actions**（本仓库已提供工作流）。

2. **还没触发部署**
   - 推送后到 `Actions` 页面确认 `Deploy static content to Pages` 运行成功。

3. **首次部署需要几分钟**
   - GitHub Pages 首次发布常有 1~5 分钟延迟。

4. **仓库名大小写或链接不一致**
   - 仓库名应与链接中的 `GitHubC-` 完全一致（包括大小写与短横线）。

5. **浏览器缓存**
   - 强制刷新（`Ctrl + F5`）后再访问。

> 本项目是静态页面，首页文件是 `index.html`，部署成功后访问仓库 Pages 链接即可直接打开。
