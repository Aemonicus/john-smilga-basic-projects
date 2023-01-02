# useRef utilisé pour lire et/ou changer les infos de l'élément ciblé (style, html..)

# Attention, deux hacks nécessaires pour que l'utilisation du style fonctionne.

## Dans le CSS

@media screen and (min-width: 800px) {
.links-container {
height: auto !important;
}
}

.links-container {
height: 0;
overflow: hidden;
transition: var(--transition);
}

## Dans le HTML

Il faut poser .links-container autour de .links
