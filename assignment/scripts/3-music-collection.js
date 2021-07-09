console.log('***** Music Collection *****')

let collection = [];

function addToCollection(albumTitle, artist, yearPublished, arrayOfTracks) {
    let album = {albumTitle, artist, yearPublished, arrayOfTracks};
    collection.push(album);
    return album;
}

// Tests for addToCollection:
console.log(addToCollection('Dummy','Portishead', 1994));
console.log(addToCollection('So Tonight That I Might See', 'Mazzy Star', 1993));
console.log(addToCollection('In Search of Sunrise 6: Ibiza', 'Tiesto', 2007, [{trackName: 'song1', duration: 1}, {trackName: 'song2', duration: 2}, {trackName: 'song3', duration: 3}]));
console.log(addToCollection('In Search of Sunrise 7: Asia', 'Tiesto', 2008, [{trackName: 'song4', duration: 4}, {trackName: 'song5', duration: 5}, {trackName: 'song6', duration: 6}]));
console.log(addToCollection('Sale el Sol', 'Shakira',2010));
console.log(addToCollection('For Emma, Forever Ago', 'Bon Iver', 2007, [{trackName: 'songA', duration: 1}, {trackName: 'songB', duration: 2}, {trackName: 'songC', duration: 3}]));

console.log(collection);


/*
Update the showCollection function to display the list of tracks for each album with its name and duration.
    TITLE by ARTIST, published in YEAR:
    1. NAME: DURATION
    2. NAME: DURATION
    3. NAME: DURATION
    TITLE by ARTIST, published in YEAR:
    1. NAME: DURATION
    2. NAME: DURATION
*/


function showCollection(ary) {
    let length = ary.length;
    let singular = length === 1;
    console.log(`There ${singular ? 'is' : 'are'} ${length} item${singular ? '' : 's'} in this collection.`);
    for (let item of ary) {
        console.log(`${item.albumTitle} by ${item.artist} published in ${item.yearPublished}:`)
        if (item.arrayOfTracks !== undefined) {
            for (let entry in item.arrayOfTracks) {
                entry = parseInt(entry);
                console.log(`${entry+1}. ${item.arrayOfTracks[entry].trackName}: ${item.arrayOfTracks[entry].duration}`);
            }
        }
    }
};

// Testing:
// Case 1: empty array
showCollection([]);
// Case 2: length 1 array
showCollection([collection[0]]);
// Case 3: multiple entry array
showCollection(collection);


function findByArtist(artistName) {
    let results  = [];
    for (let entry of collection) {
        if (artistName === entry.artist) {
            results.push(entry);
        }
    }
    return results;
}
// Tests:
// Case 1: not in collection
console.log(findByArtist('Odesza'));
// Case 2: in collection
console.log(findByArtist('Tiesto'));


/* example search object: { artist: 'Ray Charles', year: 1957 } */
function search(criteria) {
    // filter blank search criteria - return all albums, but a in new array
    if (Object.keys(criteria).length === 0) {return collection.slice()};
    let results = [];
    for (let item of collection) {
        let match = true;
        innerloop:
        for (let criterion of Object.keys(criteria)) {
            // I feel like this logic is sort of clunky. 
            // if the criteria is trackName or duration, we need to check if any song is a match
            // if all songs are not matches, then the current object failed to meet the criteria and we move on
            if (criterion === 'trackName' || criterion === 'duration') { 
                let trackMatch = false;
                if (item.arrayOfTracks !== undefined) {
                    for (let track of item.arrayOfTracks) {
                        if (track[criterion] === criteria[criterion]) {
                            trackMatch = true;
                            break;
                        }
                    }
                };
                if (!trackMatch) {
                    match = false;
                    break innerloop;
                };
            } else if (criteria[criterion] !== item[criterion]) {
                match = false;
                break;
            };
        };
        if (match) {results.push(item)};
    };
    return results;
};

// Tests:
console.log('\n TESTING SEARCH FUNCTION \n')
console.log('\n Case 0');
// Case 0: empty criterion
console.log(search({}));
// Case 1: no results
console.log('\n Case 1');
console.log(search({artist: 'Velvet Underground'}))
console.log(search({yearPublished: 1800}));
// Case 2: some results
console.log('\n Case 2');
console.log(search({albumTitle: 'Sale el Sol'})); // one result
console.log(search({yearPublished: 2007})); // two results
console.log(search({artist: 'Mazzy Star'})); // one result
// Case 3:
console.log('\n Case 3');
console.log(search({albumTitle: 'Dummy', yearPublished: 1994})); // one result
console.log(search({albumTitle: 'Dummy', yearPublished: 1994, artist: 'Tiesto'})); // zero results
// Case 4:
console.log('\n Case 4');
console.log(search({trackName: 'song1'})) // one result
console.log(search({artist: 'Bon Iver', trackName: 'songA'}))

// I'm going to need eye surgery after looking for that mismatched curly brace.