import * as _ from "lodash";
import * as PNotify from "@pnotify/core";
import * as PNotifyMobile from "@pnotify/mobile";
import "@pnotify/core/dist/BrightTheme.css";
import countryCard from './templates/country-cards.hbs';
// import countryList from './templates/hbs/country-list.hbs';
import './styles.css';
import fetchCountries from './js/fetchCountries';

  const refs = {
    searchInput: document.querySelector('.js-input'),
    articlesContainer: document.querySelector('.js-articles-container'),
  };
  fetchCountries();



  // console.log(fetchCountries());
  // function onSearch(e) {
  //   e.preventDefault();
  //   fetchCountry(e)
  //     // .then(data => data.ok ? data : Promise.reject(data))
  //     .then((data) => {
  //       refs.countryCardContainer.innerHTML = "";
  //       myStack.close(true);
  //       if (data.length === 1) {
  //         refs.countryCardContainer.insertAdjacentHTML("beforeend", countryCardTpl(data[0]))
  //       } else if (data.length < 11) {
  //         data.forEach((country) => {
  //           console.log(country.name);
  //         });
  //         refs.countryCardContainer.insertAdjacentHTML("beforeend", countryList(data))
  //       } else if (data.length > 10) {
  //         PNotify.notice({
  //           text: "Too many matches found. Please, enter a more specific name!",
  //           stack: myStack,
  //           modules: new Map([...PNotify.defaultModules, [PNotifyMobile, {}]]),
  //         })
  //       }
  //     })
  //     .catch(
  //       PNotify.notice({
  //       title: 'ERROR!',
  //         text: "Such country doesn't exist!Try to type something normal O.o",
  //         stack: myStack,
  //         modules: new Map([...PNotify.defaultModules, [PNotifyMobile, {}]]),
  //       })
  //     )
  // }