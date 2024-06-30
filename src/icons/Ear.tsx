
import { cva, type VariantProps } from "class-variance-authority"
import { SVGAttributes } from "react"
import { twMerge } from "tailwind-merge"


const variants = cva(
    "w-6 h-6 text-black/95"
)

export interface Props extends SVGAttributes<SVGElement>, VariantProps<typeof variants> { }

function Ear({ className, ...props }: Props) {
    return (
        <svg className={twMerge(variants({ className }))}
            {...props}
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill="currentColor"
                d="M216 104a8 8 0 0 1-16 0a72 72 0 0 0-144 0c0 26.7 8.53 34.92 17.57 43.64C82.21 156 92 165.41 92 188a36 36 0 0 0 36 36c10.24 0 18.45-4.16 25.83-13.09a8 8 0 1 1 12.34 10.18C155.81 233.64 143 240 128 240a52.06 52.06 0 0 1-52-52c0-15.79-5.68-21.27-13.54-28.84C52.46 149.5 40 137.5 40 104a88 88 0 0 1 176 0Zm-38.13 57.08a8 8 0 0 0-10.94 2.92a8 8 0 0 1-14.93-4c0-9.33 4.82-15.76 10.4-23.2c6.37-8.5 13.6-18.13 13.6-32.8a48 48 0 0 0-96 0a8 8 0 0 0 16 0a32 32 0 0 1 64 0c0 9.33-4.82 15.76-10.4 23.2c-6.37 8.5-13.6 18.13-13.6 32.8a24 24 0 0 0 44.78 12a8 8 0 0 0-2.91-10.92Z"
            />
        </svg>
    )
}

export default Ear