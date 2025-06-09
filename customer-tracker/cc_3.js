
const customers = [
  {
    name: "Colin Sengkhounmany",
    email: "colins22@icloud.com",
    purchases: ["laptop", "mouse"]
  },
  
  {
    name: "Joey Smith",
    email: "joesmith@gmail.com",
    purchases: ["keyboard", "monitor"]
  },
  {
    name: "Shohei Ohtani",
    email: "shohei17@yahoo.com",
    purchases: ["desk", "chair"]
  }
];


const newCustomer = {
  name: "Olivia Rodrigo",
  email: "RodrigooZ@hotmail.com",
  purchases: ["notebook"]
};
customers.push(newCustomer); 
customers.shift(); 

customers[0].email = "robert.smith@newdomain.com"; 
customers[1].purchases.push("lamp"); 


customers.forEach((customer, index) => {
  console.log(`Customer ${index + 1}:`);
  console.log(`Name: ${customer.name}`);
  console.log(`Email: ${customer.email}`);
  console.log(`Total Purchases: ${customer.purchases.length}`);
  console.log('---');
});
