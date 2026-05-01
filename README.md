<div align="center">
<h3>[<a href='./README_EN.md'>English</a>][中文]</h3>
</div>

# Pot-App 文字识别插件 - DeepSeek OCR

基于 OpenAI 兼容 API 的文字识别插件，默认使用 DeepSeek-OCR 模型，支持近百种语言的文字识别。

## 下载安装

1. 在 [Releases](https://github.com/saillill/pot-app-recognize-plugin-deepseek/releases) 页面下载最新的 `plugin.com.pot-app.deepseek_recognize.potext`
2. 打开 Pot-App → 偏好设置 → 文字识别 → 添加外部插件
3. 选择下载的 `.potext` 文件导入

## 获取 API Key

本插件需要 API Key 才能使用，推荐以下平台：

**硅基流动（推荐）**：
1. 打开 [cloud.siliconflow.cn](https://cloud.siliconflow.cn) 注册账号
2. 进入「API 密钥」页面，点击「新建 API 密钥」
3. 复制以 `sk-` 开头的密钥，粘贴到插件的 API Key 配置中
4. 新用户通常有免费额度，用完后需充值

**其他兼容平台**：
将「请求地址」切换为「自定义」，填入对应平台的 API 地址和模型 ID 即可。

## 配置说明

| 配置项 | 类型 | 说明 |
|--------|------|------|
| 模型 | 下拉 | 默认 `DeepSeek-OCR`，也可选「自定义」填入其他模型 |
| 自定义模型名 | 输入 | 选择「自定义」后，填入模型 ID |
| 请求地址 | 下拉 | 默认 `硅基流动`，也可选「自定义」 |
| 自定义请求地址 | 输入 | 选择「自定义」后，填入 OpenAI 兼容 API 地址 |
| API Key | 输入 | 你的 API 密钥 |
| 自定义 Prompt | 输入 | 默认 `Free OCR.`，可按需修改 |
