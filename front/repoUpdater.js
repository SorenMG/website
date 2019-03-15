$.getJSON('https://api.github.com/users/soren1146/repos', function(data) {
  // Generate cells
  for (var i = 0; i < data.length; i++) {
    var currentRepo = data[i];

    var row = document.createElement('tr');
    var name = document.createElement('td');
    name.innerHTML = currentRepo.name;
    row.appendChild(name);
    var description = document.createElement('td');
    description.innerHTML = currentRepo.description;
    row.appendChild(description);
    var stars = document.createElement('td');
    stars.innerHTML = currentRepo.stargazers_count;
    row.appendChild(stars);
    document.getElementById('repo-table').appendChild(row);
  }
});
