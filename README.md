# [Flowso](https://flowso.vercel.app/).

Flowso is my submission for GenerasiGIGIH program. This app is a clone for popular music platform Spotify (currently just have create playlist feature), and use Spotify API to integrate the data.

## Features

- Use Spotify account to Login (so you don't have to create new account)
- Search for tracks(songs)
- Create Playlist and it'll send to your Spotify account

## Built Using

- [Create React App](https://create-react-app.dev/) to initialize the project.
- [Chakra-ui ⚡](https://chakra-ui.com/docs/getting-started) for layout & styling.
- [Jest](https://jestjs.io/) & [react testing-library](https://testing-library.com/) for testing.
- [React redux](https://react-redux.js.org/) for state management.
- [Hosted on Vercel 🚀](https://vercel.com/).

# Run app locally

To run this app on your local machine, you have to set up a few things.

## 1. Make a Spotify for Developers account and register your app
- See how to register your app on Spotify [here](https://developer.spotify.com/documentation/web-api/quick-start/).

## 2. Clone the project

```bash
  git clone https://github.com/gerasaka/generasi-gigih-homework
```

Go to the project directory

```bash
  cd generasi-gigih-homework
```

## 3. Set up Environment Variables

- Create a new file and name it `env.local` inside `src`.
- Add this three variable below to your file.

>`REACT_APP_BASE_URL` used for grant flow callback.

>`REACT_APP_SPOTIFY_ID` your spotify developer client id.

>`REACT_APP_SPOTIFY_SECRET_KEY` your spotify developer client secret.
- See [.env.example](/.env.example).

## 4. Install dependencies
 
 - Type this command below to your terminal.
```bash
  yarn
```
or 
```bash
  yarn install
```
## 5. Launch the App
```bash
  yarn start
```
or
- Open http://localhost:3000 in your browser to see the result.