import React,{useState} from 'react'
import './App.css';
import MovieCard from './Components/Cards/MovieCard'
import MovieList from './Components/List/MovieList'
import FilterCard from './Components/Filter/FilterCard'

const App = () => {
  const [movie,setMovie]=useState([
                                  { id:Math.random(),
                                    title:'Arret Mere Thiaba',
                                    description:"Arrêt Mére Thiaba, une nouvelle production de Marodi Tv. A partir du 09 Mars sur la TFM et sur Marodi TV.",
                                    posterURL:'http://marodi.tv/vignettesseries/arret-mere-thiaba-1.jpg',
                                    rating:1,
                                  },
                                  { id:Math.random(),
                                    title:'Yoon',
                                    description:"Salif, livreur, insatisfait de sa situation actuelle, retrouve un vieil ami, Abdel, qui semble s’en être beaucoup mieux sorti que lui. Cette rencontre le frustre au plus haut point et le pousse à décider de quitter le pays par la mer, .",
                                    posterURL:'http://marodi.tv/vignettesseries/yoon-1.jpg',
                                    rating:4,
                                  },
                                  { id:Math.random(),
                                    title:'Une femme, un mari',
                                    description:"clandestinement. Il entraîne avec lui sa meilleure amie Solange qui a tout perdu après un mariage raté et vit aux crochets de ses parents déjà pauvres, avec sa fille. Solange a un projet en tête, mais sa mère, Sophie, refuse de le financer, avançant que ce que sa fille veut faire est réservé aux hommes. Solange arrive à la convaincre de payer pour qu’elle voyage hors du pays, chercher le salut ailleurs. Malheureusement, la pirogue dans laquelle devaient se trouver Salif et Solange fait naufrage. Tout le monde sait Salif décédé. Sophie essaie de cacher la disparition de sa fille, se sentant coupable, elle se rendra souvent au niveau des quais, espérant des nouvelles de sa fille. Stéphane, père de Solange, blâme sa femme. Lors d’une discussion entre Stéphane et Sophie, Dame, ami de Solange et Salif, et aussi collègue de ce dernier, découvre que son amie a aussi disparu ",
                                    posterURL:'http://marodi.tv/vignettesseries/impact-1.jpg',
                                    rating:5,
                                  },
                                  { id:Math.random(),
                                    title:'Virginie',
                                    description:"Virginie est une série qui relate l’histoire d’une jeune fille du nom de Virginie. Elle a 16 ans et c’est la chouchou de ses parents. Très brillante a l’école elle a toujours eu d’excellentes notes. Lauréate du prix du meilleur roman dans son centre, elle rafle tous les honneurs. Sa beauté, sa simplicité et sa politesse font d’elle une personne appréciée de tous.Parcontre elle garde ce caractère ferme et parfois dur de son père qui est militaire. Il s’agit du Général des forces armées du Sénégal.",
                                    posterURL:'http://marodi.tv/vignettesseries/virginie-1.jpg',
                                    rating:3,
                                  },                      
                              ])

const[titleMovie,setTitleMovie] = useState('');
const[rateMovie,setRateMovie] = useState('');
  return (
    <div>
      <MovieCard setMovie={setMovie} movie={movie}/> {/*add new movie*/}
      <br/>
      <FilterCard setTitleMovie={setTitleMovie} setRateMovie={setRateMovie}/> {/*get the resulat of search input&rate*/}
      <br/>
      <MovieList movie={movie} setMovie={setMovie} titleMovie={titleMovie} rateMovie={rateMovie}/>{/* display the resulat */}
    </div>
  )
}
export default App;