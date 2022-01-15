import axios, { Axios } from "axios";
import { useState , useEffect } from "react";
import MovieCard from "components/MovieCard";
import Pagination from "components/pagination";
import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/movie";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=3`)
    .then(response => {
    const data = response.data as MoviePage;
    console.log(data);
    setPageNumber(data.number);
    });
}, []);

    // forma entrada, lógica solta e fora do ciclo do react, faz com que ele roda duas vezes
    //axios.get(`${BASE_URL}/movies?size=12&page=3`)
    //     .then(response => {
    //         const data = response.data as MoviePage;
    //         setPageNumber(data.number);
    //     });

    return (
        <>
        <p>{pageNumber}</p>
            <Pagination />

            <div className="container">
                <div className="row">

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb=3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb=3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb=3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb=3">
                        <MovieCard />
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Listing;