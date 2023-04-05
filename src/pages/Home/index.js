import { useEffect, useState } from "react";
import api from '../../services/api';

// URL da API: /movie/550?api_key=cf9b04b49e7881c301fc4c97e0c1f694

function Home(){
    const [filmes, setFilmes] = useState([]);


    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("movie/get-now-playing", {
                params:{
                    api_key:"cf9b04b49e7881c301fc4c97e0c1f694",
                    language: "pt-BR",
                    page: 1,
                }
            })

            console.log(response);
        }

        loadFilmes();

    }, [])


    return(
        <div>
            <h1>BEM VINDO A HOME</h1>
        </div>
    )
}

export default Home;