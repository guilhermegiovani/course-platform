'use client'

import clsx from "clsx"
import { useState } from "react"

interface ICollapsibleTextProps {
    numberOfLinesWhenClosed: number
    children: React.ReactNode
}

export const CollapsibleText = ({ children, numberOfLinesWhenClosed }: ICollapsibleTextProps) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="flex flex-col items-end">
            <p
                data-open={open}
                style={{ '--number-of-lines-when-closed': numberOfLinesWhenClosed } as any}
                className="data-[open=false]:line-clamp-[var(--number-of-lines-when-closed)]"
            >
                {children}
            </p>

            <button
                data-open={open}
                className={clsx(
                    "px-1 bg-paper rounded border border-primary cursor-pointer",
                    "data-[open=false]:-mt-6"
                )}
                onClick={() => setOpen(!open)}
            >
                {open ? "Ver menos" : "Ver mais"}
            </button>
        </div>
    )
}