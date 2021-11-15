import axios from 'axios';

const SET_VODKA = 'SET_VODKA';

export const setVodka = (vodka) => {
  return {
    type: SET_VODKA,
    vodka
  }
};

export const fetchVodka = (category) => {
  // console.log(data);
  return async (dispatch) => {
    const response = await axios.get(`/api/categories/${category}`);
    const Vodka = response.data;
    console.log('This is Vodka: ', Vodka);
    dispatch(setVodka(Vodka));
  }
};

export default (state = [], action) => {
  switch (action.type){
    case SET_VODKA:
      return action.vodka;
    default:
      return state;
  }
}
