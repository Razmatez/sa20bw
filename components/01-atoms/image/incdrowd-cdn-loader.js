'use client'

export default function IncrowdImageLoader({ src, width, quality }) {
  return `${src}?width=${width}&quality=${quality || 75}&format=webp`
}