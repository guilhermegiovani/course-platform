// import { Interweave } from "interweave"
'use client'
import dynamic from "next/dynamic"
import { UrlMatcher } from 'interweave-autolink'
import { useMemo } from "react"
import { MatcherInterface } from "interweave"

const Interweave = dynamic(() => import('interweave').then(result => result.Interweave), { ssr: false })

interface IPlayerClassHeaderProps {
    title: string
    description: string
    onTimeClick(seconds: number): void
}

export const PlayerClassHeader = ({ title, description, onTimeClick }: IPlayerClassHeaderProps) => {

    const urlMatcher = useMemo(() => {

        return new UrlMatcher(
            'UrlMatcher',
            { validateTLD: false },
            ({ url }) => (
                <a href={url} target="_blank" className="text-primary">
                    {url}
                </a>
            )
        )
    }, [])

    const timeMatcher = useMemo(() => {

        const handleTimeClick = (time: string) => {
            const [seconds = 0, minute = 0, hour = 0] = time.split(':').reverse().map(num => parseInt(num))

            const resultSeconds = seconds + (minute * 60) + (hour * 3600)

            onTimeClick(resultSeconds)
        }

        return {
            asTag: () => 'button',
            propName: 'TimeMatcher',
            inverseName: 'noTimeMatcher',

            createElement: (children, props) => (
                <button
                    key={props.key}
                    className="text-primary hover:underline cursor-pointer"
                    onClick={() => handleTimeClick(String(children))}
                >
                    {children}
                </button>
            ),
            match: (content) => {
                const result = content.match(/\b(\d{1,2}):(\d{1,2}):(\d{1,2})\b|\b(\d{1,2}):(\d{1,2})\b/)
                if (!result) return null
                if (!result.index && result.index !== 0) return null

                const first = result.at(0)
                if (!first) return null

                return {
                    valid: true,
                    match: first,
                    index: result.index,
                    length: first.length
                }
            }

        } satisfies MatcherInterface
    }, [onTimeClick])

    return (
        <div className="flex flex-col gap-2 mt-2">
            <h3 className="font-extrabold text-xl">
                {title}
            </h3>

            {/* <p>
                {description}
            </p> */}

            <Interweave
                content={description}
                matchers={[urlMatcher, timeMatcher]}
            />
        </div>
    )
}