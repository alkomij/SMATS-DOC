---
id: Connection to PC
title: Connexion à un PC
sidebar_label: Connexion à un PC
sidebar_position: 1
slug: /connexion-a-un-pc
---

# CONNEXION À UN PC

## Table des matières

- [Connexion Directe au PC](#connexion-directe-au-pc)
  - [Via Câble Ethernet](#via-câble-ethernet)
  - [Via Câble RS-485](#via-câble-rs-485)
- [À Travers TrafficXHub](#à-travers-trafficxhub)
  - [Obtenir l'Adresse IP du Périphérique TrafficXHub](#obtenir-l'adresse-ip-du-périphérique-trafficxhub)
  - [Ouverture de la Configuration du Plugin Radar TrafficXHub](#ouverture-de-la-configuration-du-plugin-radar-trafficxhub)
  - [Configuration du Logiciel smartmicro TMC pour Utiliser la Méthode TCP/IP](#configuration-du-logiciel-smartmicro-tmc-pour-utiliser-la-méthode-tcpip)

## Connexion Directe au PC

La manière la plus basique pour configurer le radar smartmicro est de le connecter directement à un PC (avec le logiciel TMC installé) en utilisant le câble Plug&Play smartmicro.

Vous pouvez utiliser soit le câble Ethernet, soit le RS-485 pour la connexion directe du radar smartmicro à un PC. Vous pourriez avoir besoin d'un convertisseur USB vers RS-485 si vous utilisez le RS-485.

Les images suivantes montrent la page de configuration de l'assistant TMC dans Installation > Communication > Connexions.

### Via Câble Ethernet

### Via Câble RS-485


## À Travers TrafficXHub

Pour la configuration initiale du radar ainsi que son installation et sa configuration sur le terrain, vous pouvez utiliser le capteur TrafficXHub qui achemine les données RS-485 du capteur vers le radar smartmicro via TCP/IP. TrafficXHub peut également être utilisé pour la configuration à distance du radar via iNode après le déploiement.

Connectez TrafficXHub au radar smartmicro en utilisant le câble RS-485-12V fourni et le boîtier JBOX.

### Obtenir l'Adresse IP du Périphérique TrafficXHub

La prochaine étape consiste à connecter TrafficXHub à votre PC et à ouvrir la page de configuration. Suivez ce guide pour apprendre comment accéder à la page de configuration basée sur le web de TrafficXHub via le navigateur de votre PC. Normalement, TrafficXHub est configuré avec une adresse IP statique Ethernet de 192.168.0.22.

### Ouverture de la Configuration du Plugin Radar TrafficXHub

Une fois que vous avez ouvert l'interface de configuration de TrafficXHub, connectez-vous pour accéder à l'onglet Configuration. Ensuite, sélectionnez Scanner et Radar. Modifiez la configuration du plugin "Radar" et mettez-le en mode "Configuration" pour permettre à TrafficXHub de faire transiter les données RS-485 via un serveur TCP. Redémarrez le plugin Radar lorsqu'il vous y invite.

Les images ci-dessous montrent la configuration du Radar en mode "Configuration".

Dans cet exemple, nous avons utilisé le port 5001 pour le port du serveur. Nous utiliserons ce port et l'adresse IP du périphérique TrafficXHub dans le logiciel TMC pour configurer le Radar.

### Configuration du Logiciel smartmicro TMC pour Utiliser la Méthode TCP/IP

Une fois que vous avez ouvert le logiciel TMC (quelle que soit la version), ouvrez l'assistant et accédez à la page Installation > Communication > Connexions.

Utilisez le bouton "+" pour ajouter une entité connecteur de serveur Moxa et sélectionnez un capteur auquel vous souhaitez vous connecter à partir de la liste des capteurs disponibles.

Cliquez sur le bouton Suivant et attendez que le TMC se connecte au capteur et affiche le message "capteur trouvé".

Vous pouvez maintenant configurer le radar.
