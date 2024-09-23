
# speech-demo


### 安装

```shell
npm i --save @kne/speech-demo
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
- _SpeechDemo(@kne/current-lib_speech-demo),antd(antd)

```jsx
const {default: record} = _SpeechDemo;
const {Button} = antd;
const {useState, useEffect, useRef} = React;

const BaseExample = () => {
    const [recording, setRecording] = useState(false);
    const recordRef = useRef(null);
    useEffect(() => {
        recordRef.current = record();
    }, []);
    return <div>
        <Button onClick={() => {
            recordRef.current.then(async ({start, stop}) => {
                if (recording) {
                    const res = await stop();
                    console.log(res);
                } else {
                    start();
                }
                setRecording(!recording);
            });
        }}>{recording ? '正在录制' : '点击开始'}</Button>
    </div>;
};

render(<BaseExample/>);

```


### API

| 属性名 | 说明 | 类型 | 默认值 |
|-----|----|----|-----|
|     |    |    |     |

