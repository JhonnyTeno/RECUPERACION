
function ingreso_usuario() {
	
		txt1=document.getElementById("usuario").value 
		txt2=document.getElementById("password").value 
        message = new Paho.MQTT.Message("user"+" "+txt1+" "+txt2);
        message.destinationName = "jtenoriodelgado756@gmail.com/test2";
        client.send(message);
}

function ingreso_contraseña() {
	
		txt1=document.getElementById("usuario").value 
		txt2=document.getElementById("password").value 
        message = new Paho.MQTT.Message("pass"+" "+txt1+" "+txt2);
        message.destinationName = "jtenoriodelgado756@gmail.com/test2";
        client.send(message);
}
function LED1_On() {
	
	console.log("Solicita Historial");
        message = new Paho.MQTT.Message("Solicita de historial");
        message.destinationName = "jtenoriodelgado756@gmail.com/test2"; 
        client.send(message);
}
// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  
  var options = {
   useSSL: false,
    userName: "jtenoriodelgado756@gmail.com",
    password: "teno201293",
    onSuccess:onConnect,
   
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {    
    console.log("Conectado...");	
    client.subscribe("jtenoriodelgado756@gmail.com/test1");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "jtenoriodelgado756@gmail.com/test2 ";
    client.send(message);
  }
  
  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message1) {
    console.log("Hora:"+message1.payloadString);
    document.getElementById("led1").innerHTML=message1.payloadString.split("=")[1];
    document.getElementById("usuario").innerHTML=message1.payloadString.split(" ")[1];
  }
  
  
