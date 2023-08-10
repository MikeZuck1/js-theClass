// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

const createClassWithConstructor = () => {
  class Person {
      constructor(name, age, birth, nationality, occupation, status, adress, mail, phone) {
          this.name = name; 
          this.age = age; 
          this.birth = birth; 
          this.nationality = nationality; 
          this.occupation = occupation;
          this.status = status; 
          this.adress = adress; 
          this.mail = mail; 
          this.phone = phone; 
      }
  }
  const fPerson = new Person(
      "Jon Doe", 
      27, 
      '30-03-1996', 
      'British', 
      'Programmer', 
      'Single', 
      'Brodway Av. 56A-B', 
      'jondoe@gmail.com', 
      '555-453-54698'
  ); 
  const sPerson = new Person(
      "Elliot Jack-Daniel", 
      47, 
      '17-06-1976', 
      'British', 
      'Accountable', 
      'Married', 
      'Leceister Pier Road - 453L ', 
      'elliotjack@gmail.com', 
      '555-345-25690'
  ); 

  const tPerson = new Person(
      "Rashford kante", 
      37, 
      '17-06-1986', 
      'British', 
      'Seek a job', 
      'Single', 
      'Manchester Av. 09 - GHT', 
      'rashordk@gmail.com', 
      '555-766-43503'
  )

  const foPerson = new Person(
      "Harry Kane", 
      37, 
      '27-06-1986', 
      'Belgian', 
      'Designer UX | UI', 
      'Married', 
      'Chelsea Pier Road - 43K', 
      'harry@gmail.com', 
      '555-230-09438'
  )

  console.log(fPerson);
  console.log(sPerson);
  console.log(fPerson);
  console.log(foPerson);
}
createClassWithConstructor(); 