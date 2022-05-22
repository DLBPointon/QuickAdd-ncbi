const notice = (msg) => new Notice(msg, 5000);
const log = (msg) => console.log(msg);

const API_URL = "https://www.ebi.ac.uk/ena/taxonomy/rest/scientific-name/";

module.exports = {
    entry: start,
    settings: {
        name: "NCBI Taxonomy Script",
        author: "Damon-Lee Pointon",
    },
}

let QuickAdd;
let Settings;

async function start(params, settings) {
    QuickAdd = params;
    Settings = settings;

    const query = await QuickAdd.quickAddApi.inputPrompt(
        "Enter latin name: "
    );
    if (!query) {
        notice("No query entered.");
        throw new Error("No query entered.");
    }

    const results = await getByQuery(query);

    console.log(results)
    QuickAdd.variables = {
    ...results,
    commonName: results.commonName,
    displayName: results.displayName,
    division: results.division,
    taxid:  results.taxId,
    scientificName: results.scientificName,
    rank: results.rank,
    lineage: linkifyList(results.lineage.split(";"))
    };
}

async function getByQuery(query) {
    const searchResults = await apiGet(API_URL, query);
    console.log(searchResults)

    if (!searchResults) {
        notice("No results found.");
        throw new Error("No results found.");
    }

    return searchResults;
}

function linkifyList(list) {
    if (list.length === 0) return "";
    if (list.length === 1) return `[[${list[0]}]]`;

    return list.map((item) => `[[${item.trim()}]]`).join(", ");
}

async function apiGet(url, data) {
    console.log(data)
    let endpoint = data.split(" ").join("%20")
    let finalURL = url + endpoint;
    console.log(finalURL)

    return fetch(finalURL, {
        method: 'GET'
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var taxoData = data[0];
        return taxoData;
    })
}