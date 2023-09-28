---
id: Connection to PC
title: Connection to PC
sidebar_label: TConnection to PC
sidebar_position: 1
slug: /Connection-to-PC
---

# CONNECTION TO PC

## Table of Contents

- [Direct Connection to the PC](#direct-connection-to-the-pc)
  - [Via Ethernet Cable](#via-ethernet-cable)
  - [Via RS-485 Cable](#via-rs-485-cable)
- [Through TrafficXHub](#through-trafficxhub)
  - [Obtain TrafficXHub Device IP Address](#obtain-trafficxhub-device-ip-address)
  - [Opening TrafficXHub Radar Plugin Configuration](#opening-trafficxhub-radar-plugin-configuration)
  - [Setup smartmicro TMC Software to Use TCP/IP Method](#setup-smartmicro-tmc-software-to-use-tcpip-method)

## Direct Connection to the PC

The most basic way to set up and configure the smartmicro Radar is to connect it directly to a PC (with TMC software installed) using the smartmicro Plug&Play cable.

You can either use the ethernet cable or RS-485 for direct connection of the smartmicro radar to a PC. You may need a USB to RS-485 converter if you use RS-485.

The following images show the Installation > Communication > Connections of the TMC wizard setup page.

### Via Ethernet Cable


### Via RS-485 Cable


## Through TrafficXHub

For the initial setup of the radar as well as its installation and setup in the field, you can use TrafficXHub sensor which routes the sensor RS-485 data over TCP/IP to and from the smartmicro radar. TrafficXHub can also be used for remote configuration of the radar through iNode after deployment.

Connect TrafficXHub to the smartmicro radar through the provided RS-485-12V cable and the JBOX.

### Obtain TrafficXHub Device IP Address

The next step is to connect the TrafficXHub to your PC and open the configuration page. Follow this guide to learn how to get access to the TrafficXHub web-based configuration page through your PC browser. Normally, the TrafficXHub is set on Ethernet static IP of 192.168.0.22.

### Opening TrafficXHub Radar Plugin Configuration

Once you have opened the TrafficXHub configuration interface, login in to get access to the Config tab. Then select Scanner and Radar. Change the configuration of the “Radar” plugin and put it in the “Config” mode to let the TrafficXHub route the RS-485 data through a TCP server. Restart the Radar plugin once it is prompted.

The below pictures show the configuration of the Radar in the “Config” mode.


In this example, we used port 5001 for the server port. We will use this port and the IP of the TrafficXHub device in the TMC for configuring the Radar.

### Setup smartmicro TMC Software to Use TCP/IP Method

Once you open the TMC software (any version), open the Wizard and go to this page Installation > Communication > Connections.

Use the “+” button to add a Moxa server connector entity and select a sensor that you wish to connect to from the available sensors list.


Click on the Next button and wait for the TMC to connect to the sensor and see the “sensor found” message.

Now you can configure the radar.
