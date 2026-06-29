<div align=“中心”>
[English][中文]
</div>

# Pot-App Recognize Plugin - DeepSeek OCR

A Pot-App OCR plugin using SiliconFlow's DeepSeek-OCR model. Supports 100+ languages.

## Installation

1. Download the latest `.potext` from [Releases](https://github.com/saillill/pot-app-recognize-plugin-deepseek/releases)
2. Open Pot-App → Preferences → Text Recognition → Add External Plugin
3. Import the `.potext` file

## Get an API Key

1. Register at [cloud.siliconflow.com](https://cloud.siliconflow.com)
2. Go to API Keys page and create a new key
3. Copy the key (starts with `sk-`) into the plugin config

## Configuration

| Field | Description |
|-------|-------------|
| API Key | Your SiliconFlow API key (starts with `sk-`) |
| Custom Prompt | Default `PROMPT = '<image>\nFree OCR.'` |
