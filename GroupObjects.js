/* 
This was extracted from a react interview challenge. The items were to be displayed in category groups.
Given an array of objects that contain a category key,
return a hash table to group the objects by their category.
Make the grouping case-insensitive.
Bonus: allow the key that is grouped by to be provided.
*/


const objects = [
{
    name: "Baby Yoda",
    category: "cute",
},
{
    name: "Cricket Protein",
    category: "food",
},
{
    name: "Groot",
    category: "Cute",
},
{
    name: "Ancient India",
    category: "Cradle of Civilization",
},
{
    name: "Wasp Crackers",
    category: "Food",
},
{
    name: "The Fertile Crescent",
    category: "Cradle of Civilization",
},
];

const expected = {
cute: [
    {
    name: "Baby Yoda",
    category: "cute",
    },
    {
    name: "Groot",
    category: "Cute",
    },
],
food: [
    {
    name: "Cricket Protein",
    category: "food",
    },
    {
    name: "Wasp Crackers",
    category: "Food",
    },
],
"cradle of civilization": [
    {
    name: "Ancient India",
    category: "Cradle of Civilization",
    },
    {
    name: "The Fertile Crescent",
    category: "Cradle of Civilization",
    },
],
};

/* 
Given an array of objects that contain a category key,
return a hash table to group the objects by their category.
Make the grouping case-insensitive.
Bonus: allow the key that is grouped by to be provided.
*/
function groupObjects(items) {
    let expected = {}
    for(let i = 0; i < items.length; i++){
        let catName = items[i].category.toLowerCase()
        if(!expected.hasOwnProperty(catName)){
            expected[catName] = []
        }
        expected[catName].push(items[i])
    }
    return expected
}

console.log(groupObjects(objects));