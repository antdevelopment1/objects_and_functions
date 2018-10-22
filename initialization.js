var people = [
    {
        // The 'john' object
        firstname: 'John',
        lastname: 'Doe',
        addresses: [
            '111 Main St.',
            '222 Main St.'
        ]
    },
    {
        // the 'jane' object
        firstname: 'Jane',
        lastname: 'Doe',
        addresses: [
            '333 Main St.',
            '444 Main St'
        ],
        greet: function () {
            return 'Hello!';
        }
    }
    
]
console.log(people);
console.log(people[1].greet());