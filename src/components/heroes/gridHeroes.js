export const getHeroes = async( heroe ) => {
    const Heroe = heroe;
    const apikey = "cfa25283f57e62606ad6646d672a9284"
    const hash = "10c1208c6e31316ae46f37e1d2d9e790";
    const url = 'https://gateway.marvel.com/v1/public/characters?nameStartsWith='+Heroe+'&limit=10&apikey='+apikey+'&hash='+hash+'&ts=1';
    const resp = await fetch( url );
    const { data } = await resp.json();

    const heroesImg = data.results  

    console.log(url)
    console.log(data.results);

    return (
        <div>
            
        </div>
    )
}

export default getHeroes;