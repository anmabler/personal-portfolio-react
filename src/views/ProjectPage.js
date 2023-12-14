import React from 'react'
import Card from '../components/Card';

export default function ProjectPage() {
    const cards = [
        {
          title: "Card 1",
          description: "This is the first card description.",
          imageUrl: "https://picsum.photos/200",
        },
        {
          title: "Card 2",
          description: "This is the second card description.",
          imageUrl: "https://picsum.photos/200",
        },
        {
          title: "Card 3",
          description: "This is the third card description.",
          imageUrl: "https://picsum.photos/200",
        },
      ];
  return (
    <div>ProjectPage
        <div className="flex flex-col gap-6">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  )
}
