import React from 'react';


function Header({data}) {
    return (
        <>
            <header className="App-header">
                <p>Name - {data.name}</p>
                <p>address -  {data.address}</p>
                <p>Age -  {data.age}</p>
            </header>
        </>
    );
}

export default Header;