
function skillsMember() {
    const members = [
        { name: "Alice", skill: "JavaScript" },
        { name: "Bob", skill: "Python" },
        { name: "Charlie", skill: "Java" }
    ];

    members.forEach(member => {
        console.log(`${member.name} is skilled in ${member.skill}.`);
    });
}