# XTS Starburst Dispenser Project
The XTS Starburst Dispenser is a collaborative project developed by Alex Meissen and Amer Phuly, utilizing Beckhoff Automation's XTS (eXtended Transport System) technology. This project demonstrates a cutting-edge automated solution for dispensing Starburst candies, designed to handle multiple orders efficiently via an intuitive user interface.

## Project Overview

The system allows users to place orders through a web-based interface. The workflow is as follows:

### User Interaction:

Customers initiate their order by scanning a QR code provided at the kiosk or dispensing station. This action redirects the user to a web interface on their device (e.g., smartphone or tablet).
Through the interface, users can select the desired quantity and flavors of Starburst candies. Once their selection is complete, they submit their order.

### Order Processing:

The system receives the order and places it in a queue for processing. Multiple orders can be managed concurrently using an efficient queuing system.
A Beckhoff XTS mover, equipped with an attached cup, is dispatched to fulfill the order. The mover travels along a customizable rail system, stopping at each designated candy dispenser station.

### Candy Dispensing:

At each station, a stepper motor-driven mechanism, connected to a 3D-printed Starburst dispenser, releases the selected quantity of candies into the mover's cup.
The XTS mover waits at each dispenser until the dispensing operation is complete, ensuring accurate fulfillment of the order before moving to the next station.

### Order Completion:

Once the order has been fully processed, the mover returns to the pick-up area, where the customer is notified via the user interface that their order is ready.
The customer confirms the receipt of the order by clicking "Order Received" on the interface. This action marks the completion of the transaction, and the XTS mover becomes available to process the next order in the queue.

## System Capabilities

### Concurrent Order Processing: 
The system is designed to handle multiple orders simultaneously. Thanks to the queuing system, multiple users can place orders at once, with each mover efficiently managing the flow of orders.

### Custom-Designed Dispensers: 
Each candy dispenser is powered by a stepper motor and is custom-built using 3D-printed components to ensure precise delivery of the selected candies.

### User Notifications: 
The interface provides real-time updates, informing users about the status of their order from start to finish, including when the order is ready for pick-up.

## Technical Highlights

### Object-Oriented Programming: 

* The project leverages object-oriented design principles, making the code modular, scalable, and easy to maintain.

### GitHub Collaboration: 

* Code versioning and collaboration were managed using GitHub, ensuring a smooth development workflow between team members.

### XTS Integration: 

* The Beckhoff XTS technology was used to coordinate the motion control of the movers, ensuring precise and efficient transportation of the orders.

This project is a fully functional demo system designed to showcase the capabilities of Beckhoff’s XTS technology for potential customer demos, offering a glimpse into the possibilities of modern automation systems.
