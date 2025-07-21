'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Card } from '@/app/card.data'

import { CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface CardItemProps {
	card: Card
}

export const CardItem = ({ card }: CardItemProps) => {
	const router = useRouter()
	const [visible, setVisible] = useState(true)
	const handleBack = () => {
		setVisible(false)
		setTimeout(() => router.back(), 500)
	}
	return (
		<AnimatePresence>
			{visible && (
				<main className='relative flex min-h-screen items-center justify-center'>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.5 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.4 }}
						className='fixed inset-0 z-10 bg-black'
					/>

					<motion.div
						layoutId={`product-image-${card.id}`}
						className='fixed top-32 right-20 z-20 h-[400px] w-[400px] overflow-hidden rounded-xl'>
						<CardHeader className='relative h-full w-full'>
							<Image alt='' src={card.imgSrc ?? ''} fill />
						</CardHeader>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 100 }}
						transition={{ duration: 0.4, delay: 0.2 }}
						className='relative z-30 mt-[300px] min-w-[350px] rounded-lg bg-white p-8 shadow-lg'>
						<CardContent>
							<CardTitle>{card?.title}</CardTitle>
						</CardContent>
						<CardFooter>
							<span>Цена: {card?.price}</span>
						</CardFooter>
						<button className='mt-4 rounded bg-gray-200 px-4 py-2 hover:bg-gray-300' onClick={handleBack}>
							Назад
						</button>
					</motion.div>
				</main>
			)}
		</AnimatePresence>
	)
}
