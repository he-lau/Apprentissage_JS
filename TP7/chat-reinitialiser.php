<?php
require_once 'chat-fonctions.php';
chat_connexion_bdd();
chat_initialiser_bdd();
header('Content-Type: text/html; charset=utf-8');
// fournit du html
echo "La base de donnees a ete reinitialisee";
