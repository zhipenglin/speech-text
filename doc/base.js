const {default: record} = _SpeechDemo;
const {Button, Alert, Flex} = antd;
const {useState, useEffect, useRef} = React;

const BaseExample = () => {
    const [message, setMessage] = useState({type: 'info', message: '尚未开始'});
    const [recording, setRecording] = useState(false);
    const recordRef = useRef(null);
    useEffect(() => {
        recordRef.current = record();
    }, []);
    return <Flex vertical gap={10}>
        <Alert type={message.type} message={message.message}/>
        <div>
            <Button onClick={() => {
                recordRef.current.then(async ({start, stop}) => {
                    if (recording) {
                        const {data} = await stop();
                        if (data.code === 200) {
                            setMessage({type: 'success', message: data.message || '未识别到语音内容'});
                        } else {
                            setMessage({type: 'error', message: '转换错误'});
                        }
                    } else {
                        start();
                    }
                    setRecording(!recording);
                });
            }}>{recording ? '正在录制' : '点击开始'}</Button>
        </div>
    </Flex>;
};

render(<BaseExample/>);
