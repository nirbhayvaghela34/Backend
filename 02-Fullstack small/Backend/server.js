import express from 'express';

const app = express();

app.get('/api/jokes', (req,res) => {
    const jokes = [
        {
          "id": 1,
          "title": "Banana",
          "content": "Why did the banana go to the doctor? Because it wasn't peeling well."
        },
        {
          "id": 2,
          "title": "Math",
          "content": "Why was the math book sad? It had too many problems."
        },
        {
          "id": 3,
          "title": "Elevator",
          "content": "Why did the elevator go to school? It wanted to be a little higher in life."
        },
        {
          "id": 4,
          "title": "Ghost",
          "content": "Why did the ghost go into the bar? For the boos."
        },
        {
          "id": 5,
          "title": "Cookies",
          "content": "Why did the cookie go to the hospital? Because it felt crummy."
        },
        {
          "id": 6,
          "title": "Pirates",
          "content": "Why don't pirates shower before they walk the plank? Because they'll just wash up on shore later."
        },
        {
          "id": 7,
          "title": "Tooth",
          "content": "What time do you go to the dentist? Tooth-hurty."
        },
        {
          "id": 8,
          "title": "Butterfly",
          "content": "Why did the butterfly go to the dance? It wanted to be a social moth."
        },
        {
          "id": 9,
          "title": "Computer",
          "content": "Why did the computer go to the doctor? Because it had a virus."
        },
        {
          "id": 10,
          "title": "Eggs",
          "content": "Why did the eggs go to school? To get egg-ucated."
        }
      ]
      
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});