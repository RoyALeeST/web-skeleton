const Customer = require('./user/customer');

class FakeDb{

    constructor(){
        this.customers = 
            [            {
                firstName: 'Mario',
                lastName: 'Bros',
                secondLastName: 'Nintendo',
                dateOfBirth: '1993/02/01',
                address: 'P. Sherman Wallabee Stret 42 Sidney',
                reputation: 80,
                credits: [{
                    id: '1',
                    amount: 1000,
                    currency: 'MXN'
                },
                {
                    id: '2',
                    amount: 1300,
                    currency: 'MXN'
                },
                {
                    id: '3',
                    amount: 1780,
                    currency: 'MXN'
                }]
            },
            {
                firstName: 'John',
                lastName: 'Snow',
                secondLastName: 'Stark',
                dateOfBirth: '1981/06/04',
                address: 'P. Sherman Wallabee Stret 42 Sidney',
                reputation: 90,
                credits: [{
                    id: '4',
                    amount: 1000,
                    currency: 'MXN'
                },
                {
                    id: '5',
                    amount: 1300,
                    currency: 'MXN'
                },
                {
                    id: '6',
                    amount: 1780,
                    currency: 'MXN'
                }]
            },
            {
                firstName: 'Sonic',
                lastName: 'Heroes',
                secondLastName: '2',
                dateOfBirth: '2001/11/07',
                address: 'P. Sherman Wallabee Stret 42 Sidney',
                reputation: 85,
                credits: [{
                            id: '7',
                            amount: 1000,
                            currency: 'MXN'
                        },
                        {
                            id: '8',
                            amount: 1300,
                            currency: 'MXN'
                        },
                        {
                            id: '9',
                            amount: 1780,
                            currency: 'MXN'
                        }]
            },
            {
                firstName: 'Black',
                lastName: 'Hole',
                secondLastName: 'Supermassive',
                dateOfBirth: '1999/09/09',
                address: 'P. Sherman Wallabee Stret 42 Sidney',
                reputation: 95,
            },]
    }

    async cleanDb(){
        await Customer.deleteMany({});
    }
    pushCustomerToDb(){
        this.customers.forEach((customer)=>{
            const newCustomer = new Customer(customer);
            newCustomer.save();
        })
    }

    seedDb(){
        this.cleanDb();
        this.pushCustomerToDb();
    }
}

module.exports = FakeDb;