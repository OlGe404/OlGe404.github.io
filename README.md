# Rezeptbuch
Heyho! Hier liegt der Code für die "Rezeptbuch" Webseite von OlGe404 (https://olge404.github.io).

# Ein Rezept hinzufügen ლ(´ڡ`ლ)
Um ein neues Rezept hinzuzufügen, muss das Rezept im [recipes Ordner](recipes) als Markdown-Datei in der passenden Kategorie (Unterordner) hinterlegt werden. Als Vorlage muss dieses [Template](recipes/_template.md) benutzt werden. Es ist wichtig, dass die Formatierung und Syntax stimmt, weil sonst das automatische Aktualisieren der Webseite fehlschlägt. Nach dem Hinzufügen oder verändern eines Rezepts dauert es ca. 1 Minute, bis die Änderungen unter https://olge404.github.io sichtbar werden.

Damit das Rezeptbuch einheitlich und leicht zu benutzen ist, überflieg bitte die folgenden Grundlagen, bevor du ein neues Rezept hinzufügst.

## Duplikate
Es sollte die Suche benutzt werden, bevor ein neues Rezept hinzugefügt wird. Wenn ein ähnliches Rezept vorhanden ist, füg bitte kein neues Rezept hinzu (außer du bist dir sicher dass deins besser schmeckt oder einfacher gelingt).

## Fremdsprachige Rezepte
Rezepte aus fremdsprachigen Quellen sollen ins deutsche übersetzt werden. Das gilt für Maßeinheiten, Temperaturangaben, die Zutatenliste und Zubereitungsanleitungen. Im Grunde für alles, außer dem Namen des Rezepts.

### Maßeinheiten
Die folgenden Maßeinheiten und ihre Abkürzungen sollen benutzt werden:

| Maßeinheit        | Abkürzung | Beispiel                            |
|:------------------|:----------|:------------------------------------|
| Gramm             | g         | 1g Salz, 0,5g Hefe                  |
| Kilogramm         | kg        | 1kg Schweinebauch, 0,5kg Rinderhack |
| Milliliter        | ml        | 100ml Wasser                        |
| Liter             | l         | 1l Wasser, 0,5l Brühe               |
| Teelöffel         | TL        | 1 TL Backpulver, 0,5 TL Natron      |
| Esslöffel         | EL        | 1 EL Butter, 0,5 EL Zucker          |

Weitere Maßeinheiten ohne Abkürzung:

* 1 Prise Salz
* 1 Stück Butter
* 1 Würfel Hefe
* 1 Becher Sahne

... und ähnliches. Diese sollen in genauere Angaben mit Abkürzungen überführt werden, z.B. 200g Sahne anstatt 1 Becher Sahne. Der Inhalt pro Becher kann variieren, z.B. bei Bioprodukten, und wie viel enthalten ist steht sowieso auf der Verpackung. Das soll dann gemacht werden, wenn es Sinn ergibt - es ist nicht nötig, "1 Prise Salz" mit der Küchenwaage zu überprüfen.

### Umrechnungshilfen
Sollten die untenstehenden Bilder nicht als Umrechnungshilfe ausreichen,
ist hier ein [Link zu einer umfangreicheren Quelle](https://www.usa-kulinarisch.de/informationen/masseinheiten-umrechnen/).

![](/assets/imgs/cup_measures.jpg)

## Technische Details
Die Webseite ist mit [jekyll](https://jekyllrb.com/) und dem [just-the-docs](https://github.com/just-the-docs/just-the-docs) Theme erstellt worden. Sie wird aus den Dateien in diesem Repo gebaut und das Ergebnis wird auf GitHub Pages gehostet.

Bei Commit auf den "main" Branch wird die Webseite über GitHub Actions automatisch gebaut und deployed, sodass Änderungen in unter 1 Minute live sind.

### Lokale Entwicklung
Um an der Webseite lokal weiterzuentwickeln, wird die ruby version benötigt, die in dem [ruby-version file](.ruby-version) aufgeführt ist. Diese wird auch durch GitHub Actions beim Bau der Webseite benutzt. Zusätzlich müssen [die Voraussetzungen für jekyll](https://jekyllrb.com/docs/installation/) erfüllt sein.

Anschließend kann das Repo geklont und der lokale Webserver mit 

```bash
make
```

gestartet werden. 

Änderungen am Code werden durch den lokalen Webserver live im Browser aktualisiert, sofern die [_config.yml Datei](_config.yml) nicht verändert wurde. Bei Änderungen an der _config.yml-Datei muss der Webserver neugestartet werden. Dafür den Prozess mit `strg+c` abbrechen und `make` erneut ausführen.

> :nerd_face:	**Abkürzung**: Die Webseite kann auch mit diesem [vscode.dev](https://vscode.dev/https://github.com/OlGe404/OlGe404.github.io) Link im Browser geöffnet und bearbeitet werden. Für das Starten des lokalen Webservers mit der Entwicklungsumgebung im Browser kann [GitHub Codespaces](https://github.com/codespaces) genutzt werden.
