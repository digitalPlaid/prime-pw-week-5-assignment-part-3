console.log('***** Music Collection *****')

let collection = [];

function addToCollection(albumTitle, artist, yearPublished) {
    let album = {albumTitle, artist, yearPublished};
    collection.push(album);
    return album;
}

// Tests for addToCollection:
console.log(addToCollection('Dummy','Portishead', 1994));
console.log(addToCollection('So Tonight That I Might See', 'Mazzy Star', 1993));
console.log(addToCollection('In Search of Sunrise 6: Ibiza', 'Tiesto', 2007));
console.log(addToCollection('In Search of Sunrise 7: Asia', 'Tiesto', 2008));
console.log(addToCollection('Sale el Sol', 'Shakira',2010));
console.log(addToCollection('For Emma, Forever Ago', 'Bon Iver', 2007));
console.log(addToCollection('GenerationWhy', 'Zhu', 2016));

console.log(collection);



function showCollection(ary) {
    let length = ary.length;
    let singular = length === 1;
    console.log(`There ${singular ? 'is' : 'are'} ${length} item${singular ? '' : 's'} in this collection.`);
    for (item of ary) {
        console.log(`${item.albumTitle} by ${item.artist} published in ${item.yearPublished}`)
    }
};
// Testing:
// Case 1: empty array
showCollection([]);
// Case 2: length 1 array
showCollection([collection[0]]);
// Case 3: multiple entry array
showCollection(collection);

/*

Add a function named findByArtist. This function should:

Take in artist (a string) parameter
Create an array to hold any results, empty to start
Loop through the collection and add any objects with a matching artist to the array.
Return the array with the matching results. If no results are found, return an empty array.
Test the findByArtist function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

When testing your functions, write all tests in the JavaScript file!

Stretch goals
Create a function called search. This function should:

Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
{ artist: 'Ray Charles', year: 1957 }
The returned output from search should meet these requirements:
Return a new array of all items in the collection matching all of the search criteria.
If no results are found, return an empty array.
If there is no search object or an empty search object provided as input, then return all albums in the collection.
Add an array of tracks to your album objects. Each track should have a name and duration. You will need to update the functions to support this new property:

Update the addToCollection function to also take an input parameter for the array of tracks.
Update search to allow a trackName search criteria.
Update the showCollection function to display the list of tracks for each album with its name and duration.
    TITLE by ARTIST, published in YEAR:
    1. NAME: DURATION
    2. NAME: DURATION
    3. NAME: DURATION
    TITLE by ARTIST, published in YEAR:
    1. NAME: DURATION
    2. NAME: DURATION
Make sure to test all your code!

*/