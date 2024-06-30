
import { create } from "zustand"
import { produce } from "immer"

interface Props {
    HOLO: boolean;
    setHOLO(value: boolean): void;
    PowerAudio: boolean;
    setPowerAudio(data: boolean): void;
    wave: boolean;
    setWave(data: boolean): void;
    showImage: boolean;
    setShowImage(data: boolean): void;
    showVideo: boolean;
    setShowVideo(data: boolean): void;
}

const useAudioVisualizerSettingsStore = create<Props>(set => ({
    HOLO: false,
    PowerAudio: false,
    wave: true,
    showImage: false,
    showVideo: true,

    setHOLO: data => set(
        produce((state: Props) => {
            state.HOLO = data
        })
    ),
    setPowerAudio: data => set(
        produce((state: Props) => {
            state.PowerAudio = data
        })
    ),
    setWave: data => set(
        produce((state: Props) => {
            state.wave = data
        })
    ),
    setShowImage: data => set(
        produce((state: Props) => {
            state.showImage = data
        })
    ),
    setShowVideo: data => set(
        produce((state: Props) => {
            state.showVideo = data
        })
    )
}))

export default useAudioVisualizerSettingsStore


// Description : this is the global store used for managing the AudoVisualizer component
// to change the ui of the AudioVisualizer and also to change the to the different AudioVisualizers
// because so far there are 4 audio visualizers available ins this app
// 1- Holo
// 2- PowerAudio
// 3- wave.js
//  4- video ( this one is actualy not a audio visualizer but instead just a few videos of girls dancing. i thought it would be cool :) doesn't it ? )