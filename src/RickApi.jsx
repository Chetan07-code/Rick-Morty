import React, { useState, useEffect } from "react";

const RickApi = () => {
  const [chars, setChars] = useState([]);

  const getCharacters = async () => {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/1,2,3,4,5,6"
    );

    setChars(await response.json());
  };

  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <>
      <h2>Ricky & Morty characters</h2>
      <div className='container-fluid mt-5 '>
        <div className='row text-center'>
          {chars.map((curChar) => {
            return (
              <div className='col-10 col-md-4 mt-5' key={curChar.id}>
                <div className='card p-2'>
                  <div className='d-flex align-items-center'>
                    <div className='image'>
                      <img
                        src={curChar.image}
                        className='rounded'
                        width='155'
                        alt='characters'
                      />
                    </div>
                    <div className='ml-3 w-100'>
                      <h4 className='mb-0 mt-0 textLeft'>{curChar.name}</h4>
                      <span className='textLeft'>
                        {curChar.status} :{curChar.species}
                      </span>
                      <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'>
                        <div className='d-flex flex-column'>
                          <span className='articles'>
                            Last known location : {curChar.location.name}
                          </span>
                        </div>

                        <div className='articles'>
                          First seen in:{curChar.origin.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RickApi;
