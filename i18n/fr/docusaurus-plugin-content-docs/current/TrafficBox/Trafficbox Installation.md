---
id: COMPOSANTS DE TRAFFICBOX
title: Installation de TrafficBox
sidebar_label: Installation de TrafficBox
sidebar_position: 1
slug: /installation-de-trafficbox
---

#### Table des matières

- [Unité de traitement](#unité-de-traitement)
- [Connecteur d'alimentation USB 5V](#connecteur-dalimentation-usb-5v)
- [Interrupteur d'alimentation et de LEDs](#interrupteur-dalimentation-et-de-leds)
- [LEDs](#leds)
- [Connexion de l'antenne GPS](#connexion-de-lantenne-gps)
- [Capteur de température et d'humidité](#capteur-de-température-et-dhumidité)
- [Scanners](#scanners)
- [Pack de batterie](#pack-de-batterie)
- [Supports de montage](#supports-de-montage)
- [Installation de la batterie TrafficBox](#installation-de-la-batterie-trafficbox)

### Unité de traitement

L'unité de traitement est le composant principal de l'ensemble du système et est responsable des tâches suivantes :

- Balayage Wi-Fi et Bluetooth
- Stockage des données
- Surveillance de l'état du capteur
- Contrôle des LED
- Communication via Wi-Fi, Ethernet ou module GSM.

![Unité de traitement](../../../../../static/img/processing.unit_.1.png)
![Unité de traitement](../../../../../static/img/processing.unit_.2.png)

#### Connecteur d'alimentation USB 5V

L'unité est connectée à la batterie via le connecteur Mini USB à l'aide du câble d'alimentation USB court fourni.

**ATTENTION:** Déconnectez toujours le câble d'alimentation USB de l'unité lorsque le capteur n'est pas en cours d'utilisation.

#### Interrupteur d'alimentation et de LEDs

L'interrupteur d'alimentation met sous tension ou hors tension le capteur. Après la mise sous tension, l'unité démarre, les scanners, les processus GPS et tous les composants démarrent. À ce stade, le capteur est opérationnel.

L'interrupteur LED active les LED d'état. Cet interrupteur doit être éteint pendant la collecte de données pour prolonger la durée de vie de la batterie ou peut être utilisé pour réinitialiser l'état des LED en mode "test de portée".

#### LEDs

L'unité TrafficBox™ dispose de sept LED pour indiquer l'état de l'alimentation du capteur, de la connexion Internet, du GPS et des scanners. Le tableau 1 représente la description de chaque LED et sa définition d'état.
![Unité de traitement](../../../../../static/img/LEDs-status.png)

#### Connexion de l'antenne GPS

L'antenne GPS est connectée au module GPS pour localiser la position du capteur ainsi que pour synchroniser l'horloge du capteur sur les serveurs de temps mondiaux.

**Important:** Le capteur ne stocke pas les adresses MAC détectées sur la carte SD si l'horloge du capteur n'est pas synchronisée.

#### Capteur de température et d'humidité

La température et l'humidité du capteur peuvent être surveillées et enregistrées dans la mémoire interne de l'appareil.

#### Scanners

TrafficBox™ est capable de détecter le mode de découverte Bluetooth Classic, le mode appairé Bluetooth Classic, le mode de découverte Bluetooth à faible énergie (LE) et les signaux Wi-Fi. Le tableau suivant présente la combinaison recommandée de deux scanners qui peuvent être utilisés ensemble avec une interférence minimale des signaux radiofréquence.
![Unité de traitement](../../../../../static/img/TrafficBox-Scanners.png)

Les antennes ont des polarités de connecteur "mâle" et "femelle", alors assurez-vous toujours d'utiliser la bonne antenne, c'est-à-dire que la polarité de l'antenne est opposée à celle du scanner.

#### Pack de batterie

Le pack de batterie est la principale source d'alimentation du capteur et de l'unité de traitement. Chargez la batterie toute la nuit pour la journée de collecte de données. Utilisez le chargeur fourni et le câble de charge pour charger le pack de batterie.

**ATTENTION - Chargez la batterie à température ambiante.**

#### Supports de montage

Deux supports de montage sur poteau sont utilisés pour fixer le capteur à un poteau. Les images ci-dessous montrent comment les supports de montage doivent être fixés au boîtier du capteur.

**Important:** Assurez-vous que les boulons sont serrés et que la rondelle en plastique est utilisée pour éviter que l'humidité ou l'eau ne pénètre dans le capteur.
![Supports de montage](../../../../../static/img/bracket1.png)
![Supports de montage](../../../../../static/img/bracket2.png)

#### Installation de la batterie TrafficBox

Les fils orange (positif) et bleu (négatif) de la carte TrafficBox doivent être connectés aux bornes à vis positive et négative de la batterie. La batterie doit être solidement fixée à l'aide des sangles à boucle horizontale et verticale, comme indiqué ci-dessous :
![Supports de montage](../../../../../static/img/two-images.jpg)

**Attention !**
- Une mauvaise connexion de polarité de la batterie endommagera la carte et peut provoquer un incendie.
- Ne court-circuitez pas la batterie.

**Chargement**
- Placez le chargeur en mode 5A et LiFePO4 avant de le connecter à la batterie.
![Supports de montage](../../../../../static/img/image-with-diagram.jpg)

- Mettez l'interrupteur d'alimentation principal du capteur en position OFF avant de connecter le chargeur à la batterie.
![Supports de montage](../../../../../static/img/Two-images-1.jpg)

**Attention !**
- Chargez la batterie à température ambiante.

### Installation de TrafficBox
