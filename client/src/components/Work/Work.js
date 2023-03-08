import React from "react";
import './WorkStyles.css'
import FlipCard from "./FlipCard";

const cards = [
	{
	  id: "1",
	  variant: "click",
	  front: {
		background: "pcSmall.png"
	  },
	  back: {
		name: "Rate-My-PC-Setup",
		description: "Created to give people a better understanding of what to buy. That way they don't make a mistake and purchase a bad pc.",
		deployed: "Deployed",
		GitHub: "GitHub",
		programs: 'MongoDB, JavaScript, CSS, React.js, Heroku'
	  }
	},
	{
		id: "2",
		variant: "click",
		front: {
			background: "breakoutSmall.png"
		  },
		back: {
			name: "Breakout",
			description: "My take on the fun and retro game of breakout, created my Apple founders, Steve Jobs & Steve Wozniak",
			deployed: "Deployed",
			GitHub: "GitHub",
			programs: 'MongoDB, JavaScript, CSS, React.js, Heroku'
		  }
	  },
	  {
		id: "3",
		variant: "click",
		front: {
			background: ""
		  },
		back: {
			name: "",
			description: "",
			deployed: "Deployed",
			GitHub: "GitHub",
			programs: 'MongoDB, JavaScript, CSS, React.js, Heroku'
		  }
	  },
	  {
		id: "4",
		variant: "click",
		front: {
			background: ""
		  },
		back: {
			name: "",
			description: "",
			deployed: "Deployed",
			GitHub: "GitHub",
			programs: 'MongoDB, JavaScript, CSS, React.js, Heroku'
		  }
	  }
  ];


const Work = () => {

  return (
    <section className="App-header" id= "work">
      <div className="container">
	  <div className="card-container">
		<div className="overlay-background" />
		<div className="overlay-border" />
	  <div className="row h-100">
          {cards.map((card) => (
            <FlipCard key={card.id} card={card} />
          ))}
      </div>
      </div>
      </div>
    </section>
  )
}

export default Work;