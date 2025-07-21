'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import { cards } from './card.data'

export default function Home() {
	const router = useRouter()
	return (
		<main className='flex min-h-screen items-center justify-center'>
			<ul className='grid grid-cols-3 gap-4'>
				{cards.map(card => (
					<li key={card.id}>
						<Card
							onClick={() => {
								setTimeout(() => router.push(`/product/${card.id}`), 400)
							}}
							className='min-w-[400px] cursor-pointer overflow-hidden pt-0'>
							<motion.div layoutId={`product-image-${card.id}`}>
								<CardHeader className='relative h-[300px] w-full'>
									<Image className='' alt='' src={card.imgSrc} fill />
								</CardHeader>
							</motion.div>
							<CardContent>
								<CardTitle>{card.title}</CardTitle>
							</CardContent>
							<CardFooter>
								<span>Цена: {card.price}</span>
							</CardFooter>
						</Card>
					</li>
				))}
			</ul>
		</main>
	)
}
