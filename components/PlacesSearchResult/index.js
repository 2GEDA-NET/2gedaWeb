import PlacesSearchCard from "../ui-components/PlacesSearchCard";

const PlacesSearchResult = () => {

    const places = [
        {
            id: 1,
            address: '14, Adekola Hammed street Yaba, Lagos',
            kilometers: 140,
        },
        {
            id: 2,
            address: '14, Adekola Hammed street Yaba, Lagos',
            kilometers: 140,
        },
        {
            id: 3,
            address: '14, Adekola Hammed street Yaba, Lagos',
            kilometers: 140,
        },
        {
            id: 4,
            address: '14, Adekola Hammed street Yaba, Lagos',
            kilometers: 140,
        },
        
    ]

    return(
        <div style={{margin: '50px 20px',}}>
            <PlacesSearchCard places={places}/>
        </div>
    );
};


export default PlacesSearchResult;