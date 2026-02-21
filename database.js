function getProjects(){
return JSON.parse(localStorage.getItem("projects")||"[]");
}
function addProject(p){
let arr=getProjects();
arr.push(p);
localStorage.setItem("projects",JSON.stringify(arr));
}
