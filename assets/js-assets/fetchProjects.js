const parser = new DOMParser();

async function fetchProjects(pageName) {
    const url = `../../${pageName}/index.html`;
    const response = await window.fetch(url);
    const content = await response.text();
    const doc = parser.parseFromString(content, "application/xhtml+xml");
    // console.log(doc);

    const projects = doc.querySelectorAll("div.forProjectPage");
    // console.log(projects);

    for (const project of projects) {
        const projectName = project.id;

        $(`#${projectName}`).load(
            `../${pageName}/projects/${projectName}.html`
        );
    }
}

const projects = document.querySelectorAll(".forProjectPage");

for (let i = 0; i < projects.length; i++) {
    let project = projects[i];

    project.onmouseover = function (e) {
        project.classList.add("hover");
    };

    project.onmouseleave = function (e) {
        project.classList.remove("hover");
    };
}


Object.assign(window, {
    fetchProjects,
});
