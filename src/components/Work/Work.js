import React from "react";
import './WorkStyles.css'
import FlipCard from "./FlipCard";

const cards = [
	{
	  id: "1",
	  variant: "click",
	  front: {
		background: "ChefSmall.png"
	  },
	  back: {
		name: "Sous Chef",
		description: "Whether you're looking for a quick and easy weeknight meal or an impressive dinner party dish, you're sure to find something to suit your tastes in Sous-Chef's ever-expanding recipe collection.",
		deployed:'https://sous-chef-app.herokuapp.com/dashboard',
		GitHub: "https://github.com/AdamMontemurro/sous_chef_client",
		programs: 'PostgreSQL,  JavaScript,  Express,  Node,  CSS,  React.js,  Heroku'
	  }
	},
	{
		id: "2",
		variant: "click",
		front: {
			background: "RideSmall.png"
		  },
		back: {
			name: "Thrill Ride Share",
			description: "Our website is designed to help users find information about theme parks and rides from all around the world.",
			deployed: "https://thrill-ride-share.herokuapp.com/",
			GitHub: "https://github.com/Anthony5321/Thrill_Ride_Share",
			programs: 'Mongoose, Express, React.js, Node.js, MongoDB, HTML, JavaScript, CSS, Heroku'
		  }
	  },
	  {
		id: "3",
		variant: "click",
		front: {
			background: "pcSmall.png"
		  },
		back: {
			name: "Rate-My-PC-Setup",
			description: "Created to give people a better understanding of what to buy. That way they don't make a mistake and purchase a bad pc.",
			deployed: "https://rate-my-pc-setup.herokuapp.com/",
			GitHub: "https://github.com/Anthony5321/Rate-My-PC-Setup",
			programs: 'MongoDB, JavaScript, CSS, React.js, Heroku'
		  }
	  },
	  {
		id: "4",
		variant: "click",
		front: {
			background: "breakoutSmall.png"
		  },
		back: {
			name: "Breakout",
			description: "My take on the fun and retro game of breakout, created my Apple founders, Steve Jobs & Steve Wozniak",
			deployed: "http://old-new-breakout.surge.sh/",
			GitHub: "https://github.com/Anthony5321/Breakout",
			programs: 'HTML, JavaScript, CSS, Heroku'
		  }
	  }
  ];


const Work = () => {

  return (
    <section className="App-header" id= "work">
      <div className="container">
		<h1 className="projects">Passion Projects</h1>
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