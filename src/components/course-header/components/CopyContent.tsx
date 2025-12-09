'use client'
import { useEffect, useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { MdCheck, MdContentCopy } from 'react-icons/md'
import clsx from 'clsx'

interface IContentCopyProps {
    title: string,
    content: string,
    children: React.ReactNode
}

export const CopyContent = ({ title, content, children }: IContentCopyProps) => {
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        if (copied) {
            setTimeout(() => {
                setCopied(false)
            }, 2000)
        }
    }, [copied])

    const handleCopy = () => {
        setCopied(true)
        window.navigator.clipboard.writeText(content)
    }

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                {children}
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className={clsx(
                        "p-2 gap-2 bg-paper border border-primary",
                        "rounded-lg flex flex-col max-w-sm min-w-64"
                    )}
                >
                    <span>{title}</span>

                    <div className="flex items-center gap-1">
                        <input
                            readOnly
                            autoFocus
                            onFocus={e => e.target.select()}
                            value={content}
                            className="bg-background p-1 px-2 rounded"
                        />

                        <button className="p-2 cursor-pointer" onClick={handleCopy}>
                            {copied === true ? <MdCheck className="text-primary" /> : <MdContentCopy />}
                        </button>
                    </div>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}