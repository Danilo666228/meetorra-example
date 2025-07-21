import { cards } from '@/app/card.data'

import { CardItem } from './CardItem'

type Params = Promise<{ id: string }>

export default async function ProductPage({ params }: { params: Params }) {
	const { id } = await params
	const currentCard = cards.find(card => card.id === Number(id))

	if (!currentCard) {
		return <div>Ошибка такого товара нету</div>
	}

	return <CardItem card={currentCard} />
}
