# FEND NEIGHBORHOOD MAP (REACT)

Project 8 (final) of the [Front-End Web Developer with Udacity](https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001).

## For Users

- The application shows you few interesting **locations in Helsinki (Finland)**
- You can access the **full list** of those locations by clicking in the _List_ button on the top-left corner
- You can **filter** this list by typing the name of your desired location in the input bar. The list will adjust accordingly
- When clicking on a name in the list, the **marker will bounce** on the map to show you the exact location
- By clicking in the **name on the list** or in the **marker** you will have an **info window** which will be displayed in the bottom-left corner of the screen
- The content of the info window comes from the **Wikipedia article** corresponding to the location you have clicked on

## For Developers

### Get Started

- **Clone** this repository
- In your **terminal** go to the **root** of this repository
- Run `npm install`
- Run `npm start`
- The application will open in your browser at the address: **localhost:3000**

### Dependencies

- You will need **npm**
- The project uses **React**
- The project was built with `create-react-app`
- The project uses [`fetch-jsonp`](https://www.npmjs.com/package/fetch-jsonp)
- The project uses [`escape-string-regexp`](https://github.com/sindresorhus/escape-string-regexp)
- The project uses [Google Maps API](https://developers.google.com/maps/documentation/)
- The project uses [MediaWikiAPI](https://www.mediawiki.org/wiki/API:Main_page)

### React hierarchy

The hierarchy of the React components is the following:

```
<App />
--- <FilterLocations />
--- <InfoWindow />
```

- The **Google Map** lives in the `<App />` component
- The **list of locations** and the **filter option** live in the `<FilterLocations />` component
- The result of the **MediaWikiAPI** fetch lives in the `<InfoWindow />` component