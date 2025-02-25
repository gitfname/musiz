
import { Button } from "@chakra-ui/react"
import { BsCameraVideo } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { ApplicationRoutes } from "../../routes"


function Videos() {
    const navigate = useNavigate()
    return (
        <div className="w-full min-h-full h-max p-4 md:p-6 grid">

            <div className="h-full min-h-full flex flex-col gap-y-7 items-center justify-center">
                <BsCameraVideo className="w-16 h-16 fill-white" />
                <p className="text-base text-white/80 font-normal text-center">
                    Add Videos to Your My Musics. and Get Started
                </p>
                <Button
                    onClick={() => navigate(ApplicationRoutes.pages.library.videos.home)}
                    bgColor="white"
                    color="blackAlpha.900"
                    fontSize="sm"
                    rounded="full"
                    size="md"
                    width="full"
                    maxWidth="64"
                >
                    Browse Videos
                </Button>
            </div>

        </div>
    )
}

export default Videos