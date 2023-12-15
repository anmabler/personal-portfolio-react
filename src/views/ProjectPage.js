import React from 'react'
import Card from '../components/Card';
import cryptoshuttle from '../images/cryptoshuttle-front.png'
import munamii from '../images/Skärmbild 2023-12-14 155418.png'
import bookkeeper from '../images/Skärmbild 2023-12-15 151253.png'

export default function ProjectPage() {
    const cards = [
        {
          title: "Crypto Shuttle",
          description: "This was a group project I completed during my internship. The project involved creating a website to predict future cryptocurrency prices. Users could log in and save their forecasts along with recommended buy and sell dates. I was responsible for the MongoDB database and its queries and functions on the backend. I also managed user functions and JWT.",
          imageUrl: cryptoshuttle,
          address: "https://github.com/ArastoSahbaei/cryptoanalysis"
        },
        {
          title: "Munamii cakery",
          description: "A static website made with HTML and CSS from client specifications.",
          imageUrl: munamii,
          address: "https://anmabler.github.io/MunamiiCakery/"
        },
        {
          title: "Bookkeeper",
          description: "A console appmade in C# to keep track of income and expenses. A list of transactions is read from a text file. The user can add new entries, edit existing ones and delete entries. When printing out the list of transaction the user can choose to sort by title, month, amount, descending or ascending. When the user exits the modified list overwrites the original.",
          imageUrl: bookkeeper,
          address: "https://github.com/anmabler/Bookkeeper"
        },
        {
          title: "Humans vs. Zombies",
          description: "'Humans vs. Zombies' app: The purpose of the app is to allow a user to join a game and then keep track of the game. A user can log in and see if they are registered for a game and whether they are a human or zombie in the game. On the game details page, there is an interactive map where you can see the missions in the game and gravestones of people who have been bitten by zombies. Additionally, the user can join a 'squad' - a group of users, or create their own squad. The user can also chat with other players in the game. Technologies used during the project: Java with Spring Boot and Hibernate, React with Redux toolkit, Keycloak for authentication, login, and registration in the app, and Heroku for deployment.",
          address: "https://gitlab.com/fredrikjeppsson/hvz-backend"
        },
      ];
  return (
    <div className='m-auto w-5/12'>ProjectPage
        <div className="flex flex-col gap-6">
        {cards.map((card, index) => (
          <a href={card.address}><Card key={index} {...card} /></a>
        ))}
      </div>
    </div>
  )
}
