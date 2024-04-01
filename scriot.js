 function loadproject(){
    fetch('data/project.json')
   .then(res => res.json())
    .then(data =>displayproject(data))
 }
 loadproject();

function displayproject(data){
   const allproject = document.getElementById('project');
   for(const project of data){
       const div = document.createElement('div');
         div.classList.add("project")
       div.innerHTML = `
        <div class="">
                      <img src="${project.images}" alt="" style="height:350px;">
                  </div>
     
        `;
        allproject.appendChild(div);
        console.log(project);
     }
}
