---
layout: default
title: Einkaufsliste
nav_order: 6
has_children: false
---
# Einkaufsliste (~˘▾˘)~
Mit diesem kleinen Helfer kann eine einfache Einkaufsliste für eine gewünschte Anzahl an Tagen aus den Rezepten erstellt werden.

Die Einkaufsliste wird aus den Zutaten von Rezepten erzeugt. Die Auswahl der Rezepte ist zufällig und es werden nur Rezepte aus der Kategorie `Hauptspeisen` berücksichtigt.

Pro Tag werden die Zutaten für zwei Rezepte zur Einkaufsliste hinzugefügt (Mittag- und Abendessen). Bei `7` Tagen würde die Einkaufsliste aus `14` Rezepten bestehen.

Da die Anzahl der Rezepte begrenzt ist kann es vorkommen, dass weniger Rezepte als `Anzahl der Tage * 2` existieren. Sollte es dazu kommen, wird die Einkaufsliste auf die Anzahl verfügbarer Rezepte begrenzt und eine Info eingeblendet. Die angegebene Anzahl der Portionen pro Rezept wird nicht berücksichtigt - es wird zur Einkaufsliste hinzugefügt, was an Zutaten in den Rezepten aufgelistet ist, und kein Rezept wird doppelt aufgeführt.

<label for="days">Anzahl der Tage:</label>
<input type="number" id="days" value="5" min="1" />

<button onclick="generateShoppingList()">Einkaufsliste generieren</button>{: .btn .btn-purple }

{: .info }
<p id="info-message" style="display: none"></p>

<ul id="shopping-list"></ul>

<script src="/js/shopping_list.js"></script>
