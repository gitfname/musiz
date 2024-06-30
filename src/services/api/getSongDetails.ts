
import { musics } from "../../data/musics";
import { MusicOptions } from "../../types/MusicOptions";

interface getSingeSongDetailsProps {
    id: string;
}

interface getSingleSongDetailsOutPut extends MusicOptions { }

async function getSingleSongDetails({ id }: getSingeSongDetailsProps): Promise<getSingleSongDetailsOutPut | undefined> {

    // its just for mocking the api response
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(musics.find(music => music.id === id))
        }, 400)
    })

}

export {
    getSingleSongDetails
}

export type {
    getSingleSongDetailsOutPut
}



// Description : get a single Song details from the api