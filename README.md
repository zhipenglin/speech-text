
# speech-text


### 安装

```shell
npm i --save @kne-components/speech-text
```

### 示例


#### 示例样式

```scss
.ant-card {
  border-color: black;
  text-align: center;
  width: 200px;
}
```

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _SpeechText(@kne/current-lib_speech-text),antd(antd)

```jsx
const {default: SpeechText} = _SpeechText;
const {Button, Alert, Flex} = antd;
const {useState, useEffect, useRef} = React;

const BaseExample = () => {
    const [message, setMessage] = useState({type: 'info', message: '尚未开始'});
    const [recording, setRecording] = useState(false);
    const recordRef = useRef(null);
    useEffect(() => {
        recordRef.current = SpeechText({url: 'https://ct.deeperagi.com/action/papi/ai/vCMA01/uploadWavFile'});
    }, []);
    return <Flex vertical gap={10}>
        <Alert type={message.type} message={message.message}/>
        <div>
            <Button onClick={() => {
                recordRef.current.then(async ({start, stop}) => {
                    setMessage({type: 'warning', message: '正在识别，请稍等'});
                    if (recording) {
                        const {data} = await stop();
                        if (data.code === 200) {
                            setMessage({type: 'success', message: data.message || '未识别到语音内容'});
                        } else {
                            setMessage({type: 'error', message: '转换错误'});
                        }
                    } else {
                        setMessage({type: 'warning', message: '开始语音识别'});
                        start();
                    }
                    setRecording(!recording);
                });
            }}>{recording ? '正在录制' : '点击开始'}</Button>
        </div>
    </Flex>;
};

render(<BaseExample/>);

```


### API

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



