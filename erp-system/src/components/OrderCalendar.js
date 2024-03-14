import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/OrderCalendar.css'; // Apply custom styles for the calendar

function OrderCalendar() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const mockOrders = [
            { id: 1, customer: 'John Doe', date: new Date('2024-01-02'), shipDate: new Date('2024-01-15'), productname:'Casual T-Shirt for Men', category:'Clothing', status: 'Completed' },
            { id: 2, customer: 'Jane Smith', date: new Date('2024-01-10'), shipDate: new Date('2024-01-20'), productname:'Mens Cotton Jacket', category:'Clothing', status: 'Completed' },
            { id: 3, customer: 'Peter Gonsalves', date: new Date('2024-01-23'), shipDate: new Date('2024-01-28'), productname:'Casual T-Shirt for Men', category:'Clothing', status: 'Completed' },
            { id: 4, customer: 'Maria Dsouza', date: new Date('2024-01-29'), shipDate: new Date('2024-02-08'), productname:'Solid Gold Petite Micropave', category:'Accessories', status: 'Completed' },
            { id: 5, customer: 'Franklin Miranda', date: new Date('2024-02-02'), shipDate: new Date('2024-02-15'), productname:'Laptop Backpack', category:'Bags', status: 'Completed' },
            { id: 6, customer: 'Jade Fernandes', date: new Date('2024-02-10'), shipDate: new Date('2024-02-18'), productname:'Mens Casual Slim Fit', category:'Clothing', status: 'Completed' },
            { id: 7, customer: 'Robert Smith', date: new Date('2024-02-17'), shipDate: new Date('2024-03-01'), productname:'White Gold Plated Ring', category:'Acessories', status: 'Completed' },
            { id: 8, customer: 'Pinto Walter', date: new Date('2024-03-09'), shipDate: new Date('2024-03-20'), productname:'Mens Cotton Jacket', category:'Clothing', status: 'Pending' },
            { id: 9, customer: 'Periwinkle Doe', date: new Date('2024-03-10'), shipDate: new Date('2024-03-22'), productname:"Women's Gold & Silver Bracelet", category:'Accessories', status: 'Pending' },
            { id: 10, customer: 'Jordan Dsouza', date: new Date('2024-03-20'), shipDate: new Date('2024-03-28'), productname:'Laptop Backpack', category:'Bags', status: 'Pending' },
            // Add more mock data as needed
        ];
        setOrders(mockOrders);
    }, []);

    const renderOrdersForDate = (date) => {
        const ordersForDate = orders.filter(order => {
            return order.shipDate.toDateString() === date.toDateString();
        });
        return ordersForDate.map(order => (
            <div key={order.id} className={order.status === 'Completed' ? 'completed-order' : 'pending-order'}>
            <p>Customer: {order.customer}</p>
            <p>Status: {order.status}</p>
        </div>
        ));
    };

    return (
        <div className="order-calendar">
            <Calendar
                onClickDay={(date) => console.log('Clicked date:', date)}
                tileContent={({ date }) => renderOrdersForDate(date)}
            />
        </div>
    );
}

export default OrderCalendar;
