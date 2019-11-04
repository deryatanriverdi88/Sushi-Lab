### Deliverables :

1. Getting all sushi and displaying them
  - fetch data from JSON in APP.js in ComponentDidMount()
  - saving the data to state
  - sending the data down as props
  - mapping the prop into Sushi Component
  -in Sushi.js rendering thee data

2. Limiting the display to only 4 sushi at a time
  - in App.js, when creating sushi components, make sure we handle only 4 at a time
  - .slice(startIndex, endIndex)

3. Eating the sushi
  - in App.js create a state -> "eaten sushi : []",
  - clicked sushi gets added to the array
  -in  Sushi.js check if the sushi included in the state - if yes =, it will remove the sushi from the plate
  -on App.js use filter for displaying - but it will not render it

4. Getting the  plates to stack up
  - pass down the eaten sushi array to the table
  - renderPlates method will accept eaten as an argument

5. Clicking a button to display next four
   - in App.js create a state indexNumber that starts with 0
   - new function for moreButton and pass it
   - function should update the number
   - when we hit the end, you wanna reset it to 0

 6. Subtracting the sushi price from the budget
   - state in App.js budget
   - method to Subtract  sushi price
   -  pass method to table
