const CARDS = [
    {
        img: '/entirehouses.jpg',
        title: 'Entire Homes'
    },
    {
        img: '/outdoors.jpg',
        title: 'Outdoor getaways'
    },
    {
        img: '/uniquehouses.jpg',
        title: 'Unique homes'
    },
    {
        img: '/petsallowed.jpg',
        title: 'Pet allowed'
    },
    {
        img: '/hiddentreasure.jpg',
        title: 'Hidden treasure'
    },
]
export async function getCardsData() {
    // const response = await fetch(`api/exploreNearby/`)
    // const jsonData = await response.json()
    return CARDS
}