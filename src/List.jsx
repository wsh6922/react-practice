import { useState } from "react";

let ID = 0;

export default function List() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  function handleDeleteClicked(id) {
    const filterArtists = artists.filter((artist) => {
      console.log(artist);
      return artist.id !== id;
    });
    setArtists(filterArtists);
  }

  // const handleDeleteClicked2 = (id) => {
  //   const filterArtists = artists.filter((artist) => {
  //     console.log(artist);
  //     return artist.id !== id;
  //   });
  //   setArtists(filterArtists);
  // };

  return (
    <>
      <h1>Inspiriing sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <button
        onClick={() => {
          (setArtists([...artists, { id: ID++, name: name }]), setName(""));
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <>
            <li key={artist.id}>{artist.name}</li>
            <button onClick={() => handleDeleteClicked(artist.id)}>
              Delete
            </button>
          </>
        ))}
      </ul>
    </>
  );
}

const initialList = [
  { id: 0, title: "Big Bellies" },
  { id: 1, title: "Lunar Landscape" },
  { id: 2, title: "Terracotta Army" },
];

export function List2() {
  const [lists, setLists] = useState(initialList);

  function handleClick() {
    const nextList = [...lists];
    nextList.reverse();
    setLists(nextList);
  }

  return (
    <>
      <button onClick={handleClick}>Reverse</button>
      <ul>
        {lists.map((artwork) => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul>
    </>
  );
}
