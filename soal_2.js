const students = [
	{
  	id: "535250001",
    score: 98.0
  },
  {
  	id: "535250001",
    score: 45.0
  },
  {
  	id: "535250001",
    score: 97.75
  },
  {
  	id: "535250001",
    score: 99.25
  },
  {
  	id: "535250001",
    score: 78.5
  },
];

students.sort((x, y) => y.score - x.score);

console.log(students);