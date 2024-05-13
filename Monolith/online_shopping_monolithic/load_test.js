import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
   
    // Simulate POST request to /signup endpoint
    http.post('http://localhost:8000/customer/signup', JSON.stringify({
        email: 'test@example.com',
        password: 'password123',
        phone: '1234567890'
    }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    // Simulate POST request to /login endpoint
    http.post('http://localhost:8000/customer/login', JSON.stringify({
        email: 'test@example.com',
        password: 'password123'
    }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // Simulate POST request to /address endpoint
   /* http.post('http://localhost:8000/customer/address?_id=6638bdaa94294d0013998c24', JSON.stringify({
        street: '123 Street',
        postalCode: '12345',
        city: 'City',
        country: 'Country'
    }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // Simulate GET request to /profile endpoint
    http.get('http://localhost:8000/customer/profile?_id=6638bdaa94294d0013998c24');*/

    // Simulate POST request to /product/create endpoint
    http.post('http://localhost:8000/product/create', JSON.stringify({
        name: 'Test Product',
        desc: 'Test Description',
        type: 'Test Type',
        unit: 30,
        price: 10,
        available: true,
        suplier: 'Test Supplier',
        banner: 'Test Banner'
    }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // Simulate GET request to / endpoint
    /*http.get('http://localhost:8000/');*/

    // Simulate GET request to /category/fruits endpoint
    http.get('http://localhost:8000/category/fruits');


    // Simulate POST request to /order endpoint
    /*http.post('http://localhost:8000/shopping//order', JSON.stringify({
        _id: '2',
        txnNumber: 'txn123'
    }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });*/

    // Simulate GET request to /orders?_id=2 endpoint
    /*http.get('http://localhost:8000/shopping/orders?_id=2');*/

    // Add a sleep to control the rate of requests (optional)
    sleep(1);
}