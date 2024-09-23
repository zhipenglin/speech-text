import axios from 'axios';

const record = async () => {
    const stream = await window.navigator.mediaDevices.getUserMedia({audio: true}).catch((e) => {
        alert('出错，请确保已允许浏览器获取录音权限');
        throw e;
    });
    const recorder = new window.MediaRecorder(stream);

    let chunks = [];
    const events = [['start', () => {
        chunks = [];
    }], ['dataavailable', (e) => {
        chunks.push(e.data);
    }]];
    events.forEach(([name, handler]) => recorder.addEventListener(name, handler));
    return {
        start: () => {
            recorder.start(1000);
        },
        stop: async () => {
            events.forEach(([name, handler]) => recorder.removeEventListener(name, handler));
            stream.getTracks().forEach(track => track.stop());
            const blob = new Blob(chunks, {type: 'audio/wav;codecs=opus'});
            const file = new File([blob], 'audio.wav', {type: 'audio/wav'});
            const res = await axios.postForm({
                url: '', data: {file}
            });
            return {file, res};
        }
    };
};

export default record;
