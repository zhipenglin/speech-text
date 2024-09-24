import axios from 'axios';
import Recorder from 'recorder-core';
import 'recorder-core/recorder.wav.min';

const record = async (options) => {
    const {url} = Object.assign({}, options);
    const rec = Recorder({
        type: "wav", sampleRate: 16000, bitRate: 16
    });
    return {
        start: async () => {
            await new Promise((resolve, reject) => {
                rec.open(resolve, reject);
            });
            rec.start();
        }, stop: async () => {
            const file = await new Promise((resolve, reject) => {
                rec.stop((blob) => {
                    resolve(new File([blob], 'audio.wav', {type: 'audio/wav'}));
                }, reject);
            });
            rec.close();
            return await axios.postForm(url, {file});
        }
    };
};

export default record;
