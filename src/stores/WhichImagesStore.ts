
import { create } from "zustand"
import { produce } from "immer"

type ImageTypes = "cool-images" | "boring-images";

interface Props {
    whichImage: ImageTypes;
    setWhichImage(value: ImageTypes): void;
}

const useWhichImagesStore = create<Props>(set => ({
    whichImage: (localStorage.getItem("image-type") as ImageTypes) || "boring-images",
    setWhichImage: data => set(
        produce((state: Props) => {
            state.whichImage = data
        })
    )
}))

export default useWhichImagesStore



// Description : this global store is no that much important but. its just for showing the nice ( not sensetive for some people ) for the cover image of the image.
// you can find the images the public/boring-images ( whichImage: "boring-images" ) and public/cool-images ( whichImage: "cool-images" )
// also you can see the demo of how it works by going to settings and check the 'Show Cool Images' checkbox. and then go back to the home page. doesn't it cool ? :> i mean the images 😂