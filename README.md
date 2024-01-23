# Rezeptbuch
Heyho! Hier liegt der Code für die "Rezeptbuch" Webseite von OlGe404 (https://olge404.github.io).

## Technische Details
Die Webseite ist mit [jekyll](https://jekyllrb.com/) und dem [just-the-docs](https://github.com/just-the-docs/just-the-docs) Theme gebaut. Die Webseite wird aus den Dateien des Repos gebaut und das Ergebnis wird in den [_site](_site/) Ordner geschrieben.
Bei Commit auf den "main" Branch wird die Webseite über GitHub Actions automatisch gebaut und deployed, sodass Änderungen in unter 1 Minute live sind.

### Lokale Entwicklung
Um an der Webseite zu entwickeln, wird lokal die ruby version benötigt, die in dem [ruby-version file](.ruby-version) aufgeführt ist. Diese wird auch durch GitHub Actions benutzt. Zusätzlich müssen [die Voraussetzungen für jekyll](https://jekyllrb.com/docs/installation/) erfüllt sein.
Anschließend kann das Repo lokal geklont und der Webserver mit 

```bash
make
```

gestartet werden. Die Änderungen am Code werden automatisch aktualisiert, sofern die [_config.yml Datei](_config.yml) nicht bearbeitet wurde. Bei Änderungen an der _config.yml Datei muss der Webserver neugestartet werden.

# Hinzufügen neuer Rezepte
Um neue Rezepte hinzufügen, müssen diese in dem [recipes Ordner](content/recipes) als ``.md`` Datei hinterlegt und committet werden. Als Vorlage kann der Inhalt der [Template Datei](content/recipes/_template.md?raw=1) benutzt werden.
