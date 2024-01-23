# Rezeptbuch
Heyho! Hier liegt der Code für die "Rezeptbuch" Webseite von OlGe404 (https://olge404.github.io).

# Hinzufügen neuer Rezepte
Um neue Rezepte hinzufügen, müssen diese in dem [recipes Ordner](content/recipes) als ``.md`` Datei hinterlegt und committet werden. Wer nicht auf den "main" Branch committen darf, kann stattdessen einen Pull Request für seine Änderungen erstellen.

Als Vorlage für neue Rezepte soll die [Template Datei](content/recipes/_template.md?raw=1) benutzt werden. Es ist wichtig dass die Formatierung und Syntax aus dem Template übernommen werden, weil der Bau der Webseite sonst fehlschlagen kann. Das ist zwar kein Beinbruch, verhindert bis zur Fehlerbehebung aber das automatische Aktualisieren der Webseite.

## Technische Details
Die Webseite ist mit [jekyll](https://jekyllrb.com/) und dem [just-the-docs](https://github.com/just-the-docs/just-the-docs) Theme erstellt worden. Die Webseite wird aus den Dateien des Repos gebaut und das Ergebnis wird in den [_site](_site/) Ordner geschrieben, der durch GitHub pages als Webseite gehostet wird.

Bei Commit auf den "main" Branch wird die Webseite über GitHub Actions automatisch gebaut und deployed, sodass Änderungen in unter 1 Minute live sind.

### Lokale Entwicklung
Um an der Webseite lokal zu entwickeln, wird die ruby version benötigt, die in dem [ruby-version file](.ruby-version) aufgeführt ist. Diese wird auch durch GitHub Actions benutzt. Zusätzlich müssen [die Voraussetzungen für jekyll](https://jekyllrb.com/docs/installation/) erfüllt sein.
Anschließend kann das Repo geklont und der Webserver mit 

```bash
make
```

gestartet werden. Die Änderungen am Code werden live aktualisiert, sofern die [_config.yml Datei](_config.yml) nicht bearbeitet wurde. Bei Änderungen an der _config.yml Datei muss der Webserver neugestartet werden.
