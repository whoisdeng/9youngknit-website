# 9YoungKnit 网站下一步操作

这个项目是一个 Next.js + TypeScript + Tailwind CSS 的 B2B 服装工厂展示站，适合部署到 Vercel。

## 1. 本地运行

进入项目文件夹后执行：

```bash
npm install
npm run dev
```

浏览器打开：

```text
http://localhost:3000
```

## 2. 本地构建检查

```bash
npm run build
```

如果显示 compiled successfully 或 build completed，说明可以部署。

## 3. 修改联系信息

打开：

```text
data/site.ts
```

需要替换：

- email
- whatsappNumber
- whatsappDisplay
- alibaba
- instagram
- tiktok
- linkedin

注意：whatsappNumber 要使用国际格式，不要加 + 号。例如中国号码：

```text
8613812345678
```

## 4. 上传 GitHub

```bash
git init
git add .
git commit -m "Initial 9youngknit website"
git branch -M main
git remote add origin https://github.com/你的用户名/9youngknit-website.git
git push -u origin main
```

## 5. 部署 Vercel

1. 登录 Vercel
2. Add New Project
3. Import GitHub Repository
4. 选择 `9youngknit-website`
5. Framework Preset 选择 Next.js
6. Build Command 保持 `npm run build`
7. 点击 Deploy

## 6. 绑定域名

Vercel 项目里打开：

```text
Settings → Domains
```

添加：

```text
9youngknit.com
www.9youngknit.com
```

然后按照 Vercel 给出的 DNS 记录去你的域名后台修改。

## 7. 暂时不要添加的功能

第一版先不要做：

- 在线付款
- 购物车
- 客户登录
- 订单查询
- 实时运费
- 数据库后台

第一版重点是：展示产品能力、工厂实力、定制服务，并引导客户进入 WhatsApp 沟通。
