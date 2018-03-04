require('isomorphic-fetch');
var Dropbox = require('dropbox').Dropbox;

module.exports.home = async (req, res, next)=>{

    var token = process.env.DPX_TOKEN;
    if (token == undefined) {
        console.error('Missing Dropbox token. Set system variable DPX_TOKEN.');
        throw new Error("Missing Dropbox token. Set system variable DPX_TOKEN.");
    }

    // default images
    var images = ["images/album/1.jpg",
        "images/album/2.jpg",
        "images/album/3.jpg",
        "images/album/4.jpg",
        "images/album/5.jpg",
        "images/album/6.jpg",
        "images/album/7.jpg"];

    images = await getLinksAsync(token);

    res.render('index', {
        myCustomTitle: "ahoj :) - TODO remove",
        my_images: images
    });
};

async function getLinksAsync(token){

    var dbx = new Dropbox({ accessToken: token });

    //List images from the relative path
    let result = await listImagePathsAsync(dbx, "/album");

    //Get a temporary link for each of those paths returned
    let temporaryLinkResults= await getTemporaryLinksForPathsAsync(dbx,result.paths);

    //Construct a new array only with the link field
    var temporaryLinks = temporaryLinkResults.map(function (entry) {
        return entry.link;
    });

    return temporaryLinks;
}

async function listImagePathsAsync(dbx, path){


    let result = await dbx.filesListFolder({path: path});

    let entriesFiltered = result.entries.filter(function (entry) {
        return entry.path_lower.search(/\.(gif|jpg|jpeg|tiff|png)$/i) > -1;
    });

    var paths = entriesFiltered.map(function (entry) {
        return entry.path_lower;
    });

    let response= {};
    response.paths= paths;
    if (result.has_more) response.cursor = result.cursor;
    return response;
}

async function getTemporaryLinksForPathsAsync(dbx, paths) {

    var promises = [];

    async function loadTempLinks(path_lower) {
        return await dbx.filesGetTemporaryLink({path: path_lower});
    }

    //Create a promise for each path and push it to an array of promises
    paths.forEach((path_lower) => {
        let tempLink = loadTempLinks(path_lower);
        promises.push(tempLink);
    });

    //returns a promise that fullfills once all the promises in the array complete or one fails
    return Promise.all(promises);
}
