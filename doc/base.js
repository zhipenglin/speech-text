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
