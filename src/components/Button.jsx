import { cva } from "class-variance-authority"
import { cn } from "../lib/utils"
import React from "react"

const buttonVariants = cva("w-auto h-[48px] text-2xl rounded-2xl flex items-center gap-2 px-4 transition-all cursor-pointer ",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-gray-800",
        secondary: "bg-[#F7F7F7] text-black hover:bg-gray-200",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-gray-400 text-black hover:bg-gray-100",
        ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
        link: "text-blue-600 underline hover:text-blue-800",
        icon: "p-2 bg-gray-200 text-black hover:bg-gray-300 w-[48px] flex justify-center",
        withIcon: "bg-green-600 text-white hover:bg-green-700 flex items-center gap-2 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Button = ({ children, variant }) => {
  return (
    <button className={cn(buttonVariants({ variant }))}>
      {children}
    </button>
  )
}

export default Button
