import Carusel from "../components/carusel/carusel"
import SearchBar from "../components/searchbar/searchbar"

export default function Home() {

    return (

        <div className='home'>
            <div className='left'>
                < Carusel />
            </div>
            <div className='right'>
                <SearchBar />
            </div>
        </div>
    )
}