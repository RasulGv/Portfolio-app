import library from '../assets/library.jpg'
import foody from '../assets/foody.jpg'
import netflix from '../assets/netflix.jpg'
import chess from '../assets/chess.jpg'
import hangman from '../assets/hangman.jpg'
import weather from '../assets/weather.png'

const projects = [
    {
      id: 1,
      title: 'Online Library',
      image: library,
      description: 'A digital library platform where users can browse, read, and borrow books online.',
      technologies: ['HTML', 'CSS', 'Javascript'],
    },
    {
      id: 2,
      title: 'Foody App',
      image: foody,
      description: 'A food delivery application that allows users to order food from local restaurants.',
      technologies: ["React", 'Firebase', 'Material UI'],
    },
    {
      id: 3,
      title: 'Netflix Clone',
      image: netflix,
      description: 'A clone of the popular streaming service Netflix, featuring user authentication and video streaming.',
      technologies: ['React', 'Firebase'],
    },
    {
      id: 4,
      title: 'Chess Game',
      image: chess,
      description: 'An online multiplayer chess game with real-time matchmaking and chat features.',
      technologies: ['CSS', 'React'],
      
    },
    {
      id: 5,
      title: 'Hangman Game',
      image: hangman,
      description: 'A classic hangman game where players guess letters to form a word before running out of attempts.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      
    },
    {
      id: 6,
      title: 'Weather App',
      image: weather,
      description: 'A weather forecasting application that provides real-time weather updates and forecasts.',
      technologies: ['React', 'API', 'CSS'],
      
    }
  ];
  
  export default projects;
  