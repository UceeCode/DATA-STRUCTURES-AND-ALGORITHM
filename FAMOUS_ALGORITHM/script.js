//Kadane's Algorithm

function kadanesAlgorithm(array){
    let maxendinghere = array[0];
    let maxsofar = array[0];

    for(let i = 1; i < array.length; i++){
        maxendinghere = Math.max(array[i], maxendinghere + array[i]);
        maxsofar = Math.max(maxsofar, maxendinghere);
    }
    return maxsofar;
}

//let arr = [-2,1,-3,4,-1,2,1,-5,4];
let arr = [2,8,-6,7,-2,1]
console.log(kadanesAlgorithm(arr));


//Stable Internships

  
// function StableInternships(interns, teams){
//     let ChosenInterns = {};
//     let freeInterns = interns.map((_, i) => i);
//     let currentInternChoices = new Array(intern.length).fill(0);
    

//     let teamMap = [];
//     for(let team of teams){
//         let rank = {};
//         team.forEach((internNum, i) =>{
//             rank[internNum] = i;
//         })
//         teamMap.push(rank);
//     }

//     while(freeInterns.length > 0){
//         let InternNum = freeInterns.pop();
//         let intern = interns[InternNum]
//         let teamPeference = intern[currentInternChoices[InternNum]]

//         currentInternChoices[InternNum] += 1;
        

//         if(!(teamPeference in ChosenInterns)){
//             ChosenInterns[teamPeference] = InternNum;
//             continue;
//         }

//         let previousIntern = ChosenInterns[teamPeference];
//         let previousInternRank = teamMap[teamPeference][previousIntern];
//         let currentInternRank = teamMap[teamPeference][InternNum];

//         if(currentInternRank < previousInternRank){
//             freeInterns.push(previousIntern);
//             ChosenInterns[teamPeference] = InternNum;
//         } else {
//             freeInterns.push(InternNum);
//         }
//     }

//     let matches = Object.entries(ChosenInterns).map(([teamNum, InternNum]) => [
//         InternNum,
//         parseInt(teamNum),
//     ]);
//     return matches;
// }   


// const intern = [
//     [0, 1, 2],  // Intern 0's preferences: [Team 0, Team 1, Team 2]
//     [2, 0, 1],  // Intern 1's preferences: [Team 2, Team 0, Team 1]
//     [1, 2, 0]   // Intern 2's preferences: [Team 1, Team 2, Team 0]
// ];
  
// const teams = [
//     [2, 1, 0],  // Team 0's preferences: [Intern 2, Intern 1, Intern 0]
//     [0, 2, 1],  // Team 1's preferences: [Intern 0, Intern 2, Intern 1]
//     [1, 0, 2]   // Team 2's preferences: [Intern 1, Intern 0, Intern 2]
// ];

// console.log(StableInternships(intern, teams))

// function StableInternships(interns, teams){
//     let ChosenInterns = {};
//     let freeInterns = interns.map((_, i) => i);
//     let internCurrentChoice = new Array(interns.length).fill(0);

//     let teamMap = [];
//     for(let team of teams){
//         let rank = {};
//         team.forEach((internNum, i) => {
//             rank[internNum] = i;
//         });
//         teamMap.push(rank);
//     }

//     while(freeInterns.length > 0){
//         let internNum = freeInterns.pop();
//         let intern = interns[internNum];
//         let teamPeference = intern[internCurrentChoice[internNum]];

//         if(!(teamPeference in ChosenInterns)){
//             ChosenInterns[teamPeference] = internNum;
//             continue;
//         }

//         let previousIntern = ChosenInterns[teamPeference];
//         let previousInternRank = teamMap[teamPeference][previousIntern];
//         let currentInternRank = teamMap[teamPeference][internNum];

//         if(currentInternRank < previousInternRank){
//             freeInterns.push(previousIntern);
//             ChosenInterns[teamPeference] = internNum;
//         } else {
//             freeInterns.push(internNum);
//         }
//     }
//     let matches = Object.entries(ChosenInterns).map(([teamNum, internNum]) => [
//         internNum,
//         parseInt(teamNum)
//     ]);
//     return matches;
// }


//Union Find

// class UnionFind{
//     constructor(){
//         this.parents = {};
//     }

//     createset(val){
//         this.parents[val] = val;
//     };

//     find(val){
//         if(!(val in this.parents)) return null;

//         let currentParent = val;
//         while(currentParent !== this.parents[currentParent]){
//             currentParent = this.parents[currentParent];
//         }
//         return currentParent;
//     };

//     union(val1, val2){
//         if(!(val1 in this.parents) || !(val2 in this.parents)) return;

//         let val1Root = this.find(val1);
//         let val2Root = this.find(val2);
//         this.parents[val2Root] = val1Root;
//     }
// }

// let uf = new UnionFind();

// uf.createset(5);
// uf.createset(2);

// uf.union(5,2);

// console.log(uf.find(2));


// class UnionFind {
//     constructor(){
//         this.parent = {};
//         this.rank = {};
//     }

//     createSet(val){
//         this.parent[val] = val;
//         this.rank[val] = 0;
//     }

//     find(val){
//         if(!(val in this.parent)) return null;

//         if(val !== this.parent[val]){
//             this.parent[val] = this.find(this.parent[val]);
//         }
//         return this.parent[val];
//     }

//     Union(val1, val2){
//         if(!(val1 in this.parent) || !(val2 in this.parent)) return;

//         let val1Root = this.find(val1);
//         let val2Root = this.find(val2);

//         if(this.rank[val1Root] < this.rank[val2Root]){
//             this.parent[val1Root] = val2Root;
//         } else if(this.rank[val2Root] < this.rank[val1Root]){
//             this.parent[val2Root] = val1Root;
//         } else {
//             this.parent[val2Root] = val1Root;
//             this.rank[val1Root] += 1;
//         }
//     }
// }


// let uf = new UnionFind();

// uf.createSet(5);
// uf.createSet(2);

// uf.Union(5,2);

// console.log(uf.find(2));