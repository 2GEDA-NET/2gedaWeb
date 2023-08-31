const PeopleSearchCard = ({ results }) => {
    return (
        <div>
            {results.map((result) => (
                <div key={result.id}>
                    <div  style={{ display: "flex", alignItems: 'center' }}>
                        <div style={{ position: 'relative' }}>
                            <img src={result.image} alt={result.name} style={{ borderRadius: '10px', width: '50px', height: '50px', margin: '10px 0' }} />
                            <div style={{ borderRadius: '50%', width: '10px', height: '10px', backgroundColor: '#17F12D', position: "absolute", bottom: '12px', right: '-5px' }}></div>
                        </div>
                        <div style={{ margin: '10px' }}>
                            <p style={{ fontSize: '0.8em' }}>{result.name}</p>
                            <p style={{ fontSize: '0.6em' }}>{result.location}</p>
                        </div>
                    </div>
                    <hr/>
                </div>
            ))}
        </div>
    );
};

export default PeopleSearchCard;
