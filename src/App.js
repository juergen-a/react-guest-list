import './App.css';
import { useEffect, useState } from 'react';

export default function App() {
  /// Express-Server communication
  const baseUrl = 'http://localhost:4000';

  // Retrieving all guests
  useEffect(() => {
    function getAllGuest() {
      fetch(`${baseUrl}/guests`)
        .then(function (data) {
          console.log(data.json());
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    getAllGuest();
  }, []);

  // Creating a single guest
  useEffect(() => {
    function createNewGuest() {
      fetch(`${baseUrl}/guests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName: 'Johnny', lastName: 'Bravo' }),
      })
        .then(function (data) {
          console.log(data.json());
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    createNewGuest();
  }, []);

  return <div>TestDiv</div>;
}
