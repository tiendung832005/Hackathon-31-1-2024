function deleteRow(row) {
    row.parentNode.parentNode.remove();
  }
document.addEventListener("DOMContentLoaded", function () {
      const deleteButtons = document.querySelectorAll(".button-delete");
      deleteButtons.forEach((button) => {
          button.addEventListener("click", function () {
              deleteRow(this);
            });
        });
        function updateRow(row) {
          alert("Chức năng cập nhật chưa làm!");
        }
    const updateButtons = document.querySelectorAll(".button-update");
    updateButtons.forEach((button) => {
      button.addEventListener("click", function () {
        updateRow(this);
      });
    });
  });
  function addProject() {
    let projectName = document.getElementById('projectName').value;
    let subTitle = document.getElementById('subTitle').value;
    let description = document.getElementById('description').value;
    let date = document.getElementById('date').value;
    let client = document.getElementById('client').value;
    let type = document.getElementById('type').value;
    let techs = document.getElementById('techs').value;
    let url = document.getElementById('url').value;
    projects.push({
        projectName: projectName,
        imageURL: imageURL,
        subTitle: subTitle,
        description: description,
        date: date,
        client: client,
        type: type,
        techs: techs,
        url: url
    });
    saveProjectsToLocalStorage();
    populateTable();
    document.querySelectorAll('input').forEach(function(input) {
        input.value = '';
    });
}