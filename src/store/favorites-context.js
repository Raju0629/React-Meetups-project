import { createContext, useState, useEffect } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
        if (storedFavorites) {
          setUserFavorites(storedFavorites);
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(userFavorites));
      }, [userFavorites]);

    function addFavoritesHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
        return prevUserFavorites.concat(favoriteMeetup)
    });
    }

    function removeFavoritesHandler(meetupId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }
    
    function itemIsFavoritesHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length, 
        addFavorite: addFavoritesHandler,
        removeFavorite: removeFavoritesHandler,
        itemIsFavorite: itemIsFavoritesHandler
    };

    return (
        <FavoritesContext.Provider value={context}>
        {props.children}
        </FavoritesContext.Provider>

    );
};

export default FavoritesContext;