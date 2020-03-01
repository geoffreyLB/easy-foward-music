# easy-foward-music
Front app to easy switch your music from one plateform to another.

Your goal is to build a from scratch frontend app with react to switch easily your favorite songs ans playlists from Deezer to Spotify, and vice et versa.



## Getting Started

### __Prerequisites__

```
Have Deezer and Spotify account
```

### __Documentations__

[Deezer API](https://developers.deezer.com/login?redirect=/api)

[Spotify API](https://developer.spotify.com/documentation/)

### __Mandatories__


+ create-react-app is forbidden
+ use [webpack 4](https://github.com/webpack/webpack)
+ add linter and prettier
+ use react with hooks (16.8)
+ use [react-router](https://reacttraining.com/react-router/web/guides/quick-start)
+ use [Material-v4](https://material-ui.com/)
+ add test with [react-testing-library](https://github.com/testing-library/react-testing-library) (70% coverage minimum)
+ feel free to use Typescript or JS
+ functional programming

### __Optionnal__


+ add CI with github

For the rest you are free to use any libraries you want


### __Goals__

+ Nice and clean UI
+ Auth to both plateforms (Deezer / Spotify)
+ Get all musics and playlists
+ Store them in a JSON in a specific JSON
+ Make search to retrieve songs *
+ Add them into the other plateform 
+ Display a view of each songs that have not been found from search

 
_Search explained_ :

``` Markdown
## For example, if you get all your songs from Spotify, store them in a JSON file. Once you have it, parse it and for each songs you have in it, make a search to Deezer in order to retrieve them on the plateform ##
```
***! IMPORTANT !***
    
    If you don't find the song you're looking for on the search, keep the info in a JSON file, in order to display them later on the page


### ***__Push to develop & master are protected. create new pull request for each new feature you add (ex: linter, webpack, component etc etc) and an admin will review it and merge to develop__***

### __Bonus__

Build an [electron app](https://www.electronjs.org/) (with remote update) for 
    
    - Windows
    - OS X
    - Linux