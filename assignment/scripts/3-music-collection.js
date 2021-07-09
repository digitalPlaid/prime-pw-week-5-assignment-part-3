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
console.log(addToCollection('In Search of Sunrise 6: Ibiza', 'Tiesto', 2007));
console.log(addToCollection('In Search of Sunrise 7: Asia', 'Tiesto', 2008));
console.log(addToCollection('Sale el Sol', 'Shakira',2010));
console.log(addToCollection('For Emma, Forever Ago', 'Bon Iver', 2007));

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
        let flag = true;
        for (let key of Object.keys(criteria)) {
            // I feel like this logic is sort of clunky. It also doesn't check against trackName. arrayOfTracks is an array of objects: {trackName: 'stringValued', duration: number_valued}
            if (key === 'trackName') {
                let trackFlag = false;
                for (let track of item['arrayOfTracks']) {
                    if (track.trackName === criteria[key]) {
                        trackFlag = true;
                    }
                if (trackFlag === false) {
                    flag = false;
                    break;
                };
            }
            if (criteria[key] !== item[key]) {
                flag = false;
                break;
            }
        }
        if (flag) {results.push(item)};
    }
    return results;
};

// Tests:
console.log('\n TESTING SEARCH FUNCTION \n')
// Case 0: empty criterion
console.log(search({}));
// Case 1: no results
console.log(search({artist: 'Velvet Underground'}))
console.log(search({yearPublished: 1800}));
// Case 2: some results
console.log(search({albumTitle: 'Sale el Sol'})); // one result
console.log(search({yearPublished: 2007})); // two results
console.log(search({artist: 'Mazzy Star'})); // one result
// Case 3:
console.log(search({albumTitle: 'Dummy', yearPublished: 1994})); // one result



// testing updates to functions:
// search finds album tracks?
    // add tracks to an album within collections (test through function)
    // test that it works properly from a search perspective

// test showCollection function