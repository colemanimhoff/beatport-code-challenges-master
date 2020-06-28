import fixtures from './fixtures.json';

const inGroupsOf = (array, num) => {
    if (num <= 1) {
        return array;
    }

    let currentGroup = 1;
    let currentIndex = 0;
    let set = [];

    while (currentIndex < array.length) {
        let group = array.slice(currentIndex, num * currentGroup);
        set.push(group);
        currentIndex += num;
        currentGroup++;
    }
    return set;
};

const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

export const mockApi = {
    all: shuffle(fixtures),
    inGroupsOfTwo: inGroupsOf(fixtures, 2),
    inGroupsOfFour: inGroupsOf(fixtures, 4),
    inGroupsOfSix: inGroupsOf(fixtures, 6)
};
