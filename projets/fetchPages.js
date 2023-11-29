const parser = new DOMParser()

async function fetchPage(name) {
    const url = `../${name}/index.html`
    const response = await window.fetch(url)
    const content = await response.text()

    const doc = parser.parseFromString(content, 'application/xhtml+xml')
    console.log(doc)

    const links = doc.querySelectorAll('link[rel=stylesheet]')
    for(const link of links ) {
        document.head.append(link)
    }

    const allProjects = doc.querySelectorAll('.import-container > .import-project')
    console.log(allProjects)    
    for(const project of allProjects) {
        let allProjectsContainer = document.getElementsByClassName('all-projects')[0]
        allProjectsContainer.append(project)
    }
}

Object.assign(window, {
    fetchPage,
})

fetchPage('videos')