
import { create } from "zustand"
import { produce } from "immer"


interface Props {
    isOpen: boolean;
    setIsOpen(value: boolean): void;
}

const useEditProfileModalStore = create<Props>(set => ({
    isOpen: false,
    setIsOpen: data => set(
        produce((state: Props) => {
            state.isOpen = data
        })
    )
}))
export default useEditProfileModalStore



// Description : fear simgle. this is the global store used to manage the opening/closing state of the EditorProfileModel ( basicly if you set the isOpen value to true. the model will open. and false to closing the model )