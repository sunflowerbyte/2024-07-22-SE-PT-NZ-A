const user = {
    name: 'Bilbo Baggins',
    sing: function() { // method of user object
        console.log('Roads go ever ever on');
    },
    sing2() { // shorthand syntax, does same as above
        console.log('Over rock and under tree')
} }
user.sing(); // Roads go ever ever on
user.sing2(); // Over rock and under tree
