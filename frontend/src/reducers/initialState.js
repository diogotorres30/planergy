export default {

  appState:{
    loggedIn: false
  },

  rooms: [
    {
      id: 'kitchen',
      name: 'Kitchen',
      color: '#f45342',
      estimation: 0.9
    },
    {
      id: 'livingRoom',
      name: 'Living Room',
      color: '#3aa4ea'   ,
      estimation: 0.7      
    },
    {
      id: 'bedRoom',
      name: 'Bed Room',
      color: '#b3f254',
      estimation: 0.75
      
    }
  ],
  appliances: [
    {
      id: 'oven',
      roomId: 'kitchen',
      name: "Oven",
      consumption: 120,
      isOn: true,
      color: '#68f75d',
      estimation: 0.9
      
    },
    {
      id: "kettle",
      roomId: 'kitchen',      
      name: "Kettle",
      consumption: 60,
      isOn: false,
      color: '#e53131',
      estimation: 0.8
    },
    {
      id: "kitchenLights",
      roomId: 'kitchen',      
      name: "Lights",
      consumption: 20,
      isOn: false,
      color: '#e0be57',
      estimation: 0.4
    },
    {
      id: "tv",
      roomId: 'livingRoom',      
      name: "TV",
      consumption: 30,
      isOn: true,
      color: '#5defef',
      estimation: 0.6
    },
    {
      id: "playStation",
      roomId: 'livingRoom',            
      name: "Play station",
      consumption: 40,
      isOn: true,
      color: '#4132e5',
      estimation: 0.75
    },
    {
      id: "livingRoomLights",
      roomId: 'livingRoom',            
      name: "Lights",
      consumption: 25,
      isOn: true,
      color: '#e0be57',
      estimation: 0.8    
    },
    {
      id: "bedRoomLights",
      roomId: 'bedRoom',      
      name: "Lights",
      consumption: 10,
      isOn: false,
      color: '#e0be57',
      estimation: 0.5      
    },
    {
      id: "radio",
      roomId: 'bedRoom',      
      name: "Radio",
      consumption: 5,
      isOn: true,
      color: '#c956e0',
      estimation: 0.45
      
    }           
  ],
  tips: [
    {
      id: 'oven',
      applianceId: 'oven',
      roomId: 'kitchen',
      savingValue: 10,
      description: 'Turn the oven off when not using',
      isOn: true,
    },
    {
      id: 'kettle',
      applianceId: 'kettle',
      roomId: 'kitchen',        
      savingValue: 14,
      description: 'Turn the kettle off when not using',
      isOn: false,
    },
    {
      id: 'kitchenLights1',
      applianceId: 'kitchenLights',
      roomId: 'kitchen',        
      savingValue: 8,
      description: 'Turn off the lights when noone is in the house',
      isOn: false,
    },
    {
      id: 'kitchenLights2',
      applianceId: 'kitchenLights',
      roomId: 'kitchen',      
      savingValue: 6,
      description: 'Turn off the lights when leaving the kitchen',
      isOn: false,
    },    
    {
      id: 'tv1',
      applianceId: 'tv',
      roomId: 'livingRoom',        
      savingValue: 10,
      description: 'Really? 2 Narcos series in just one day?',
      isOn: false,
    },
    {
      id: 'tv2',
      applianceId: 'tv',
      roomId: 'livingRoom',        
      savingValue: 8,
      description: 'Turn the TV off before falling asleep',
      isOn: false,
    },    
    {
      id: 'playStation1',
      applianceId: 'playStation',
      roomId: 'livingRoom',      
      savingValue: 6,
      description: 'Turn off when tv is off',
      isOn: false,
    },                                                                       
    {
      id: 'playStation2',
      applianceId: 'playStation',
      roomId: 'livingRoom',      
      savingValue: 9,
      description: 'Find some friends',
      isOn: false,
    },
    {
      id: 'bedRoomLights1',
      applianceId: 'bedRoomLights',
      roomId: 'bedRoom',      
      savingValue: 8,
      description: 'Don\'t forget to turn off when leaving the house',
      isOn: false,
    },
    {
      id: 'bedRoomLights2',
      applianceId: 'bedRoomLights',
      roomId: 'bedRoom',      
      savingValue: 7,
      description: 'Turn off during the night',
      isOn: false,
    },   
    {
      id: 'radio',
      applianceId: 'radio',
      roomId: 'bedRoom',      
      savingValue: 3,
      description: 'Don\'t forget to turn off when leaving the house',
      isOn: false,
    },      
  ],
  consumptions: [],
  estimations: [] 
};
