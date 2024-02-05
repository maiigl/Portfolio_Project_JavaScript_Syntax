
    

const random = () => {
    const arr1 = ['Öffis nehmen', 'vegan essen', 'Klimademo besuchen', 'deinem Abgeordneten schreiben', 'Licht sparen']
    const arr2 = ['Jane Goodall', 'Al Gore', 'Greta Thunberg', 'Ban Ki Moon', 'Barack Obama']
    const arr3 = ['dich', 'deine Kinder', 'die Natur', 'nachfolgende Generationen', 'deinen Nachbarn']
    const result = 
    `Deine heutige klimaschonende Maßnahme ist: 
    "${arr1[Math.floor(Math.random()*arr1.length)]}". 
    Die inspiration dazu kommt von:
    ${arr2[Math.floor(Math.random()*arr2.length)]}
    und du tust es für: 
    ${arr3[Math.floor(Math.random()*arr1.length)]}`;
}

