---
layout: default
title: Einkaufsliste generieren
nav_order: 6
has_children: false
---
# Einkaufsliste generieren (~˘▾˘)~
Mit diesem kleinen Helfer kann eine einfache Einkaufsliste für eine gewünschte Anzahl an Tagen generiert werden.

Die Einkaufsliste wird aus den Zutaten von Rezepten generiert. Die Auswahl der Rezepte ist zufällig und es werden standardmäßig nur Rezepte aus der Kategorie `Hauptspeisen` berücksichtigt.

Pro Tag werden die Zutaten für zwei Rezepte zur Einkaufsliste hinzugefügt (Mittag- und Abendessen). Bei `7` Tagen würde die Einkaufsliste dementsprechend aus `14` Rezepten bestehen.

Da die Anzahl der Rezepte begrenzt ist kann es vorkommen, dass weniger Rezepte als `Anzahl der Tage * 2` existieren. Sollte es dazu kommen, wird eine Info eingeblendet und die Einkaufsliste auf die maximale Anzahl verfügbarer Rezepte begrenzt. Die Anzahl der Portionen im Rezept spielt dabei keine Rolle - es wird zur Einkaufsliste hinzugefügt, was an Zutaten im Rezept aufgelistet ist, und kein Rezept wird doppelt aufgeführt.

<label for="days">Anzahl der Tage:</label>
<input type="number" id="days" value="5" min="1" />

<button onclick="generateShoppingList()">Einkaufsliste generieren</button>{: .btn .btn-purple }

<ul id="shopping-list"></ul>

<script src="/js/shopping_list.js"></script>
