import fetch from 'node-fetch';

//const response = await fetch('https://catfact.ninja/fact');
const response = await fetch('https://api.github.com/search/repositories?q=language:javascript');
const data = await response.json();

//console.log(data['items'][0]['owner']['login'])
let items = data['items']
for (const key in items) {
    //console.log(key)
    console.log(`NaMe: ${items[key]['name']},\nForksCount: ${items[key]['forks_count']}\nDescription: ${items[key]['description']}\n`)
}