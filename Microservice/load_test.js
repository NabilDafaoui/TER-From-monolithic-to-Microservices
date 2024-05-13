import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    // Simulate POST request to /signup endpoint
    http.post('http://localhost:8001/signup', JSON.stringify({
        email: 'test@example.com',
        password: 'password123',
        phone: '1234567890'
    }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // Simulate POST request to /login endpoint
    http.post('http://localhost:8001/login', JSON.stringify({
        email: 'test@example.com',
        password: 'password123'
    }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // Simulate POST request to /address endpoint
    /*http.post('http://localhost:8001/address?_id=6638bdaa94294d0013998c24', JSON.stringify({
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
    http.get('http://localhost:8001/profile?_id=6638bdaa94294d0013998c24');*/

    // Simulate POST request to http://localhost:8002/product/create
    http.post('http://localhost:8002/product/create', JSON.stringify({
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

    // Simulate GET request to http://localhost:8002/
    /*http.get('http://localhost:8002/');*/


    // Simulate GET request to http://localhost:8002/category/fruits
    http.get('http://localhost:8002/category/fruits');


   /* // Simulate POST request to http://localhost:8003/order
    http.post('http://localhost:8003/order', JSON.stringify({
        _id: '2',
        txnNumber: 'txn123'
    }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // Simulate GET request to http://localhost:8003/orders?_id=2
    http.get('http://localhost:8003/orders?_id=2');*/

    // Add a sleep to control the rate of requests (optional)
    sleep(1);
}

