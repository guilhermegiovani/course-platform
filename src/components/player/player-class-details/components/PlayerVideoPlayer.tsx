'use client'

import clsx from 'clsx'
import dynamic from 'next/dynamic'
import { forwardRef, useImperativeHandle, useMemo, useRef, useState } from 'react'
import { MdPlayCircle } from 'react-icons/md'
import type TReactPlayer from 'react-player'


//import ReactPlayer from 'react-player'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

interface IPlayerVideoPlayerProps {
    videoId: string

    onPlayNext: () => void
}
export interface IPlayerVideoPlayerRef {
    setProgress: (second: number) => void
}

// eslint-disable-next-line react/display-name
export const PlayerVideoPlayer = forwardRef<IPlayerVideoPlayerRef, IPlayerVideoPlayerProps>(({ videoId, onPlayNext }, playerRefToForward) => {
    const playerRef = useRef<TReactPlayer>()
    const wrapperRef = useRef<HTMLDivElement>(null)

    const [totalDuration, setTotalDuration] = useState<number | undefined>(undefined)
    const [progress, setProgress] = useState<number | undefined>(undefined)

    const secondsUntilEnd = useMemo(() => {
        if (!totalDuration) return undefined
        if (!progress) return undefined

        return Number((totalDuration - progress).toFixed(0))
    }, [progress, totalDuration])

    const showNextButton = useMemo(() => {

        return !!secondsUntilEnd && secondsUntilEnd <= 30
    }, [secondsUntilEnd])

    useImperativeHandle(playerRefToForward, () => {
        return {
            setProgress(seconds) {
                playerRef.current?.seekTo(seconds, 'seconds')
                wrapperRef.current?.scrollIntoView({behavior: 'smooth'})
            }
        }
    })


    return (
        <div ref={wrapperRef} className='h-full'>
            {showNextButton && (
                <button
                    onClick={onPlayNext}
                    className={clsx(
                        'absolute right-4 top-36 z-10',
                        'flex gap-2 items-center bg-primary',
                        'py-3 px-4 rounded-lg font-bold cursor-pointer'
                    )}
                >
                    Próxima aula em {secondsUntilEnd}
                    <MdPlayCircle size={24} />
                </button>
            )}

            <ReactPlayer
                // ref={playerRef}
                height="100%"
                width="100%"
                // playing={true}
                controls={true}

                onEnded={() => onPlayNext()}
                onReady={(ref) => playerRef.current = ref}

                onProgress={({ playedSeconds }) => setProgress(playedSeconds)}
                onDuration={(duration) => setTotalDuration(duration)}

                url={`https://www.youtube.com/watch?v=${videoId}`}
            // onReady={(ref) => playerRef.current = ref}
            />
        </div>
    )
})