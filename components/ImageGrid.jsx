'use client'

import clsx from 'clsx'

import Loading from './Loading'
import { Suspense } from 'react'
import {NextImage} from './NextImage'

export default function ImageGrid({ data }) {
  return (
      <main
        className={clsx(
          'mt-4 columns-1 gap-x-4 gap-y-4',
          'md:columns-2',
          'lg:columns-3 lg:gap-x-8'
        )}
      >
        {data.map(({ _id, imageUrl, alt, ratio }) => (
          <NextImage key={_id} image={imageUrl} alt={alt} ar={ratio} />
        ))}
      </main>
  )
}