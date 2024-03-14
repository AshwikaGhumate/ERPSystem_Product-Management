# ERPSystem_Product-Management
Description : A simplified interface for an ERP(Enterprise Resource Planning) system, designed to manage products and customer orders.

## Download & Extract Project Zip File
1. Navigate to the GitHub Repository by opening the web browser and pasting the given link.
2. Click on the "Code" Button on the repository page and select "Download ZIP".
3. After downloading the zip file, locate it on your computer and extract its content to a new folder.

## Installation
1. Install Node.js 
1. Open the project in Visual Studio Code or any Editor of your choice.
2. Open the terminal
3. Navigate to the project directory "erp-system"
4. Intall dependencies using npm command
   - npm install (will automatically install all the dependencies from pacakage.json file)

## Usage
1. Start the development Server
   - npm start (Open your web browser and navigate to 'http://localhost:3000' to view the app



## Application Screenshot:

1. Dashboard
   - Table displaying the total number of products and the total number of orders.
   - Manage Products button will redirect to Products page wherein there are various options for managing the product.
   - Manage Orders button will redirect to Orders page wherein there are various options for managing customers orders.
   - Navigation links to navigate to Products, Orders and Calendar page.
![dashboard](https://github.com/AshwikaGhumate/ERPSystem_Product-Management/assets/78784647/dafe852e-9380-4a98-bcc7-7304b7df0990)

3. Products Page
   - Table displaying product properties such as product name, category, price, stock quantity, image for each of the products.
   - Add Product button to add a new product in the table.
   - Edit button to edit product properties.
   - Delete button to delete the product from the list of products.
![ProductPage](https://github.com/AshwikaGhumate/ERPSystem_Product-Management/assets/78784647/f75f7ed0-9dfa-4299-a182-c9f9ce0a258a)

4. Orders Page
   - Table displaying customer's order details i.e order ID, customer name, order date, delivery date, product name, category along with the delivery status.
   - View Details displaying customer's order details
   - Mark as completed button to mark the order as completed after delivering the product to the customer.
   - Delete button to delete the customer orders from the list after successfully delivering the product to the end user.
![image](https://github.com/AshwikaGhumate/ERPSystem_Product-Management/assets/78784647/160bd5bb-98c9-43d5-af6c-ef067e20e37d)

6. Orders Calendar
