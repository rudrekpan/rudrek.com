'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Photo {
  src: string
  alt: string
  caption?: string
}

interface PhotoSectionProps {
  photos: Photo[]
}

export function PhotoSection({ photos }: PhotoSectionProps) {
  return (
    <section className="py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative overflow-hidden rounded-2xl ${
              index === 0 ? 'col-span-2 row-span-2' : ''
            }`}
          >
            <div className="aspect-square relative group">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {photo.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium">
                      {photo.caption}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
