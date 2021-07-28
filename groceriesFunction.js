//GROCERIES FUNCTION
// Write function below
const groceries = (obj) => {
  let newList = [];
  let commaPosition = 0;
  for (let i of obj) {
    newList.push(i.item);
  }
  if (newList.length < 2) {
    return newList.join('');
  }
  else {
    let final = newList.pop();
    return newList.join(', ') + ' and ' + final;
  }
}

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'
groceries([{item: 'Lettuce'}, {item: 'Onions'}, {item: 'Tomatoes'}])

