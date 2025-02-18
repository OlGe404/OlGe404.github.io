---
layout: default
title: Einkaufsliste
nav_order: 0
has_children: false
---
# Einkaufsliste (~˘▾˘)~
Mit diesem kleinen Helfer kann eine einfache Einkaufsliste für eine gewünschte Anzahl an Tagen erstellt werden.

Die Einkaufsliste wird aus den Zutaten von Rezepten aus der Kategorie `Hauptspeisen` erzeugt. Die Auswahl der Rezepte ist zufällig.

Pro Tag werden die Zutaten für zwei Rezepte zur Einkaufsliste hinzugefügt (Mittag- und Abendessen). Die in den Rezepten angegebene Anzahl der Portionen wird nicht berücksichtigt und kein Rezept wird doppelt hinzugefügt.

<label for="days">Anzahl der Tage:</label>
<input type="number" id="days" value="5" min="1" />

<button id="generate-shopping-list">Einkaufsliste generieren</button>{: .btn .btn-purple }

{: .warning }
<p id="callout" style="display: none"></p>

<div>
    <h3 id="recipes-titles-heading" style="display: none">Ausgewählte Rezepte</h3>
    <ul id="recipes-titles-ul"></ul>
</div>

<div>
    <h3 id="shopping-list-heading" style="display: none">Einkaufsliste</h3>
    <ul id="shopping-list-ul"></ul>
</div>

<script type="module" src="/assets/js/shopping-list/main.js"></script>
