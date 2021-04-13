# speech games Threejs Unity WebGL

Dos soluciones distintas para integrar 3D con speech recognition.

https://threejs.manuel-garciaromero.com/
https://speechgame.manuel-garciaromero.com/

es un comparativo entre el uso de tecnologias para webGL como lo son en este caso especifico Unity y threeJS

Unity aunque es muy practico presenta problemas a la hora de salir de su entorno local a un pesbliegue en producción de un producto. 
se intento comunicar Unity con un websocket, con un socketIO y con un broker MQTT, sin ningun exito en producción, parace que tiene muchas restricciones 
o se debe configurar de una forma especifica para produción, conbinación infructuosa en mi caso. 

![image](https://user-images.githubusercontent.com/27829702/114605928-3aaad600-9c60-11eb-931b-4efdc9a8806d.png)


ThreeJS por su parte, presenta un poco de dificultad a la hora de crear una escena con la misma facilidad de Unity para iluminar y renderizar, lo cual no quiere decir que no 
sea posible. por otra parte la comunicacion Cliente servidor presento problema unicamente con la comunicacion MQTT para el Broker Mosquitto que se uso en el servidor. 
La comunicación WebSocket y SocketIO fue un exito, logrando llegar a controlar las animaciones de un modelo 3d en una escena WebGL creada con la libreria threejs directamente con javascript.

![image](https://user-images.githubusercontent.com/27829702/114605948-426a7a80-9c60-11eb-9115-b2d241bb22a4.png)
