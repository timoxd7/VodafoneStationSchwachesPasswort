# Info (Deutsch/German)

Mit diesem kleinen Script lässt sich die Aufforderung _"Das eingegebene Kennwort ist zu schwach, bitte verwenden Sie ein Stärkeres"_ beim Ändern des WLAN-Passworts oder des Router Passworts der Vodafone Station umgehen.

## How To

1. Öffne die Datei _"password_workaround.js"_ und kopiere deren Inhalt.
2. Ändere _"hier_das_richtige_passwort"_ sodass dort dein gewünschtes Passwort drin steht (z.B. _"supersicher123"_). Die Anführungszeichen müssen dabei sein, gehören aber später nicht zum passwort dazu.
3. Gehe auf das Web-Interface der Vodafone Station unter _WLAN_ auf _Allgemein_.
4. Ändere das Passwort (_Kennwort ändern_) auf _"lol_1234_XD"_ (ohne die Anführungszeichen).
5. Klicke auf _Anwenden_, aber nur ein mal (also nur in dem schwebenden Fenster, welches danach verschwindet). Der Prozess funktioniert analog für die Änderung des Router Login Passworts.
6. Öffne die Entwickler-Tools und dort die Konsole (In Firefox: Oben rechts -> Weitere Werkzeuge -> Werkzeuge für Web-Entwickler, dann der Tab Konsole).
7. Kopiere den angepassten Code aus 2. komplett in die Konsolen-Zeile.
8. Drücke Enter.
9. Du solltest nun in der Web-Oberfläche mit dem Haken _Zeichen einblenden_ das korrekte Passwort sehen.
10. Klicke auf _Anwenden_. Das Passwort ist nun gesetzt.

# Info (English)

With this little tool, you can work around the _"Das eingegebene Kennwort ist zu schwach, bitte verwenden Sie ein Stärkeres"_ prompt by a Vodafone Station when changing its WiFi password or router password.

## How To

1. Open the File _"password_workaround.js"_ and copy its content.
2. Change _"hier_das_richtige_passwort"_ so that it matches your wanted password (_"supersafe123"_). The " need to be there but will not be included in the password later.
3. Go in the Web-Interface of the Vodafone Station to _WLAN_ and _Allgemein_.
4. Change the Password there (_Kennwort ändern_) to _"lol_1234_XD"_ (But without the ").
5. Click on _Apply_ only once! So only on the floating window which will dissapear with this, but not on the main window. The same process can be applied to chagne the router login password.
6. Open the developer Console (In Firefox: Upper right -> Weitere Werkzeuge -> Werkzeuge für Web-Entwickler, then Console).
7. Copy the code from 2. into the console.
8. Press Enter.
9. You should see inside the Web-Interface your correct password with _Show Characters_.
10. Click on _Apply_. The Password is now set.

# Quellen / Sources
Code is adapted from https://stackoverflow.com/questions/26796873/find-which-variable-holds-a-value-using-chrome-devtools
