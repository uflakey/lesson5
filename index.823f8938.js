const t=document.querySelector("#task-form");document.querySelector("#task-list");t.addEventListener("submit",(function(t){t.preventDefault();const e=t.target.elements.taskName.value.trim();if(console.log(e),!e)return;!function(t){const e=JSON.parse(localStorage.getItem("task-key"))||[],a=Math.random();e.push({task:t,id:a}),localStorage.setItem("task-key",JSON.stringify(e))}()}));
//# sourceMappingURL=index.823f8938.js.map
