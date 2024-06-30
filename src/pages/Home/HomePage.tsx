

import { ComponentType, lazy, Suspense } from "react"
// import {
//   Recommended, Exclusive, Featured, HotTracks, MoreToExplore, PlayLists, RecentlyPlayed,
//   DJMixes, MoreMusic, MustListen, NewMusics
// } from "../../components/Sections"

const sleep = async (ms: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1)
    }, ms);
  })
}

const delayedImport = (ms: number, path: string): Promise<{ default: ComponentType<any> }> => {
  return new Promise(async (resolve, reject) => {
    await sleep(ms)
    try {
      const module = await import(path)
      resolve({
        default: module.default
      })
    } catch (error) {
      reject()
    }
  })
}
const Recommended = lazy(() => import("../../components/Sections/Recommended"))
const Exclusive = lazy(() => import("../../components/Sections/Exclusive"))
const Featured = lazy(() => import("../../components/Sections/Featured"))
const HotTracks = lazy(() => import("../../components/Sections/HotTracks"))
const MoreToExplore = lazy(() => import("../../components/Sections/MoreToExplore"))
const PlayLists = lazy(() => import("../../components/Sections/PlayLists"))
const RecentlyPlayed = lazy(() => import("../../components/Sections/RcentlyPlayed"))
const DJMixes = lazy(() => import("../../components/Sections/DJMixes"))
const MoreMusic = lazy(() => import("../../components/Sections/MoreMusic"))
const MustListen = lazy(() => import("../../components/Sections/MustListen"))
const NewMusics = lazy(() => import("../../components/Sections/NewMusics"))

import Footer from "../../layout-components/Footer"

function HomePage() {

  return (
    <div className="w-full h-max p-4 md:p-6">
      {/* playlists */}
      <Suspense>
        <PlayLists />
      </Suspense>

      {/* recommended */}
      <Suspense>
        <Recommended />
      </Suspense>

      {
        import.meta.env.PROD
        &&
        <div className="my-12 w-full border border-red-400">
          <div id="pos-article-text-card-88416"></div>
        </div>
      }

      {/* featured */}
      <Suspense>
        <Featured />
      </Suspense>

      {/* RJ Exclusive */}
      <Suspense>
        <Exclusive />
      </Suspense>

      {/* HotTracks */}
      <Suspense>
        <HotTracks />
      </Suspense>

      {/* recently played */}
      <Suspense>
        <RecentlyPlayed />
      </Suspense>

      {/* more to explore */}
      <Suspense>
        <MoreToExplore />
      </Suspense>


      {/* new music */}
      <Suspense>
        <NewMusics />
      </Suspense>

      {/* must listen */}
      <Suspense>
        <MustListen />
      </Suspense>


      {/* DJ Mixes */}
      <Suspense>
        <DJMixes />
      </Suspense>

      {/* More Music */}
      <Suspense>
        <MoreMusic />
      </Suspense>

      <div className="mt-20"></div>
      <Footer />

    </div>
  )
}

export default HomePage