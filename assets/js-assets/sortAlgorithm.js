
function numberSorting(listClassName, listElementClassName, dataToSort) {
    let switching, i, shouldSwitch, itemData, itemData1, isAscending, switchcount = 0

    const list = document.querySelector(`.${listClassName}`)
    
    switching = true
    // Set the direction to ascending
    isAscending = true
    
    // Make a loop that will continue until no switching has been done:
    while (switching) {
        const listElements = list.querySelectorAll(`.${listElementClassName}`)

        // Starting with no swithching done
        switching = false

        // Loop through all items
        for (i = 0; i < (listElements.length - 1); i++) {
            // Starting with no switching
            shouldSwitch = false

            itemData = listElements[i].children[0].dataset[dataToSort]
            itemData1 = listElements[i + 1].children[0].dataset[dataToSort]

            // =============
            // check if the next item should swith place with the current item

            // When ASCENDING
            if (isAscending == true) {
                // If next item's data is smaller than the current one, mark as switched and break
                if (itemData > itemData1) {
                    shouldSwitch = true
                    break
                }
            } else if (isAscending == false) {
                if (itemData < itemData1) {
                    shouldSwitch = true
                    break
                }
            }
        }

        if (shouldSwitch) {
            // If a switch is marked, make the switch
            listElements[i].parentNode.insertBefore(listElements[i + 1], listElements[i])
            switching = true

            switchcount ++
        } else {
            // If no swtiching has been done and the loop is ascending, make it descending
            if (switchcount === 0 && isAscending === true) {
                isAscending = false
                switching = true
            }
        }
    }
}