import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import store from "./store";
import TrackCard from './components/TrackCard';

const fakeTrack = {
  album: {
    album_type: "album",
    artists: [
      {        
        name: "Queen",
        type: "artist",
      }
    ],
    images: [
      {
        height: 640,
        url:
          "https://i.scdn.co/image/ab67616d0000b273e319baafd16e84f0408af2a0",
        width: 640
      },
      {
        height: 300,
        url:
          "https://i.scdn.co/image/ab67616d00001e02e319baafd16e84f0408af2a0",
        width: 300
      },
      {
        height: 64,
        url:
          "https://i.scdn.co/image/ab67616d00004851e319baafd16e84f0408af2a0",
        width: 64
      }
    ],
    name: "A Night At The Opera (2011 Remaster)",
    release_date: "1975-11-21",
    release_date_precision: "day",
    total_tracks: 12,
    type: "album",
    uri: "spotify:album:1GbtB4zTqAsyfZEsm1RZfx"
  },
  artists: [
    {
      id: "1dfeR4HaWDbWqFHLkxsg1d",
      name: "Queen",
      type: "artist",
    }
  ],
  name: "Bohemian Rhapsody - Remastered 2011",
  type: "track",
  uri: "spotify:track:4u7EnebtmKWzUH433cf5Qv"
};

test('TrackCard fully render and have track detail', () => {
  render(
    <Provider store={store}>
      <TrackCard
        image={fakeTrack.album.images[0].url}
        album={fakeTrack.album.name}
        title={fakeTrack.name}
        artist={fakeTrack.artists[0].name}
        uri={fakeTrack.uri}
      />
    </Provider>
  );

  screen.debug();

  const trackImage = screen.getByTestId("track-image");
  const albumName = screen.getByTestId("album-name");
  const trackTitle = screen.getByTestId("track-title");
  const artistName = screen.getByTestId("artist-name")
  const selectButton = screen.getByText(/select/i);

  expect(trackImage).toBeInTheDocument();
  expect(albumName).toBeInTheDocument();
  expect(trackTitle).toBeInTheDocument();
  expect(artistName).toBeInTheDocument();
  expect(selectButton).toBeInTheDocument();

  // expect(trackImage).toHaveTextContent(fakeTrack.album.images[0].url);
  expect(albumName).toHaveTextContent(fakeTrack.album.name);
  expect(trackTitle).toHaveTextContent(fakeTrack.name);
  expect(artistName).toHaveTextContent(fakeTrack.artists[0].name);
});