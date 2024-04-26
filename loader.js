'use client'

export default function myImageLoader({src, width, quality}) {
    return `https://nextjsportfolio.com${src}?auto=compress&cs=tinysrgb&dpr=2&h=${width}&w=${width}&q=${quality || 75}`
}