# Tic-Tac-Toe

Ein einfaches Konsolenspiel in JavaScript, bei dem zwei Spieler Tic-Tac-Toe spielen können. Das Spiel verwendet die Pakete `readline-sync` für die Eingabe und `chalk` für farbige Ausgaben.

## Features

- Zwei Spieler (X und O) spielen gegeneinander.
- Das Spielfeld wird nach jedem Zug aktualisiert und angezeigt.
- Das Spiel erkennt einen Sieg, ein Unentschieden oder ungültige Züge.
- Farbige Konsolenausgabe für bessere Benutzerfreundlichkeit.

---

## Voraussetzungen

- [Node.js](https://nodejs.org) (LTS-Version empfohlen)

## Installation

1. **Repository klonen oder den Code speichern**  
   Speichere den Code in einer Datei namens `index.js`.

2. **Node.js-Abhängigkeiten installieren**  
   Öffne dein Terminal, navigiere zu dem Ordner, in dem sich die Datei befindet, und führe folgende Befehle aus:
   ```bash
   npm init -y
   npm install readline-sync chalk
   node index.js
   ```

## Spielanleitung

- Zwei Spieler wechseln sich ab, um ihre Züge einzugeben.
- Gib die gewünschte Position im Format Reihe Spalte ein.
  Beispiel: 0 1 bedeutet Reihe 0, Spalte 1.
- Das Spiel endet, wenn:
  Ein Spieler drei seiner Symbole in einer Reihe, Spalte oder Diagonale platziert.
  Alle Felder belegt sind (Unentschieden).
- Das Spiel erkennt ungültige Eingaben und fordert dich auf, es erneut zu versuchen.

## Technologien

JavaScript: Programmiersprache
readline-sync: Für Benutzereingaben in der Konsole
chalk: Für farbige Konsolenausgabe
