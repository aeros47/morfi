/* ===== Morfi: configuración de EJEMPLO =====
   Este archivo es público y solo tiene datos inventados.
   Tus datos reales NO van acá: más adelante se guardan en tu Google Drive.
   Para probar localmente, copiá este archivo como config.js (está en .gitignore).

   Reglas disponibles por persona (true = se aplica):
     sinCarne              no come carne, pescado ni fiambre (huevo y lácteos sí)
     sinGluten             sin trigo, pan rallado ni harinas con gluten
     sinCereales           sin cereales ni pastas (salvo pan de masa madre)
     sinLegumbres          sin lentejas, garbanzos, porotos, hummus
     sinMariscos           sin camarones ni mejillones
     sinVisceras           sin hígado ni otras vísceras
     soloSimples           solo platos simples y conocidos (marcados como simples)
     cenaSinCarneRoja      en la cena, sin carne vacuna ni cerdo
     cenaSinAlmidon        en la cena, sin papa, batata, mandioca ni polenta
*/
window.MORFI_CONFIG={
  familia:'Familia Ejemplo',
  perfiles:[
    {k:'a',n:'Juan',c:'#0d9488',
     reglas:{sinCereales:true,sinLegumbres:true,sinMariscos:true,sinVisceras:true,cenaSinCarneRoja:true,cenaSinAlmidon:true},
     descripcion:'Ejemplo de plan bajo en carbohidratos: sin cereales ni legumbres, y cenas livianas sin carne roja ni almidones.'},
    {k:'b',n:'Laura',c:'#16a34a',
     reglas:{sinCarne:true,sinGluten:true,sinVisceras:true},
     descripcion:'Ejemplo de dieta vegetariana sin gluten: huevo y lácteos sí, carne y pescado no.'},
    {k:'d',n:'Tomi',c:'#d97706',
     reglas:{soloSimples:true,sinMariscos:true,sinVisceras:true},
     descripcion:'Ejemplo de chico que come pocas cosas: solo platos simples y conocidos, sin presionar.',
     tipComida:'Para Tomi: sumar un ralladito nutritivo (sésamo molido + levadura nutricional + queso) y ofrecerlo sin presionar.'},
    {k:'i',n:'Sofi',c:'#0284c7',
     reglas:{sinVisceras:true},
     descripcion:'Ejemplo de alguien que come de todo: plan equilibrado según las Guías Alimentarias para la Población Argentina.'}
  ]
};
