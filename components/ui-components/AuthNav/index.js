const AuthNav = ({ navTitle }) => {
    return (
        <div style={{ display: "flex", justifyContent: 'space-between', background: 'linear-gradient(180deg, #B469EF 0%, #4F0DA3 100%)', position: 'fixed', top: 0, right: 0, left: 0, alignItems: 'center', zIndex: 100,}}>
            <div>
                <img src="/assets/logo_white.png" alt="2geda logo" />
            </div>
            <div style={{color: 'white', fontWeight:'bolder',}}>{navTitle}</div>
            <div></div>
        </div>
    );
};


export default AuthNav;