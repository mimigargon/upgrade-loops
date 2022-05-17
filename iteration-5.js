const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

placesToTravel.forEach(function (travel, i) {
    if (travel.id == 40 || travel.id == 11) {
      placesToTravel.splice(i, 1);
    }
  });
  
  console.log(placesToTravel);
  