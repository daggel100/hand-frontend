Woher weiss ich, das in dieser oder jener Datei ein HTTP-Request kommt?

Du weißt, dass in einer Datei ein HTTP-Request gemacht wird, wenn du dort z.B.:

* Daten vom Backend holen möchtest (GET)
* Daten an das Backend senden möchtest (POST, PUT, PATCH, DELETE)
* Also z.B. beim Login, Registrierung, Adressformular, Userdaten laden usw.


Typische Anzeichen:

* Du verwendest in der Datei axios.get(...), axios.post(...) oder eine andere HTTP-Methode.
* Du möchtest Daten aus deiner Datenbank anzeigen oder speichern.
Beispiel:
In einer Login-Komponente:
```jsx
import axios from 'axios';

const handleLogin = async () => {
  await axios.post('/api/auth/login', { email, password });
};
```

→ Hier brauchst du Axios.

Fazit:
Immer dann, wenn du in einer Komponente mit dem Backend kommunizierst (Daten holen oder senden), brauchst du Axios in dieser Datei.