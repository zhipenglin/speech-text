#### 默认导出 speech(options):Promise

example:

```javascript
const {start, stop} = await speech(options);
```

#### options:Object

| 属性名 | 说明             | 类型     | 默认值 |
|-----|----------------|--------|-----|
| url | 上传文件语音识别目标接口地址 | string | -   |

#### 开始录音 start():Promise

example:

```javascript
await start();
```

#### 结束录音 stop():Promise

example:

```javascript
const response = await stop();
const {code, message} = response.data;
```

| 属性名     | 说明               | 类型     | 默认值 |
|---------|------------------|--------|-----|
| code    | 后端接口返回状态值,200为成功 | number | -   |
| message | 语音转换结果           | string | -   |


