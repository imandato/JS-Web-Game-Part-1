
// functions
function newImage(path, left, bottom){
    let item = document.createElement('img')
    item.src = path
    item.style.position = 'fixed'
    item.style.left = `${left}px`
    item.style.bottom = `${bottom}px`
    document.body.append(item)
    return item
};


function newItem(path, left, bottom){
    let item = newImage(path,left,bottom)

    item.addEventListener('dblclick', function(){
        item.remove()
    })
};


// image creation
newImage('assets/green-character.gif', 100, 100);
newImage('assets/pine-tree.png', 450, 200);
newImage('assets/tree.png', 200, 300);
newImage('assets/pillar.png', 350, 100);
newImage('assets/crate.png', 150, 200);
newImage('assets/well.png', 500, 425);

// pickup item creation
newItem('assets/sword.png', 500, 405);
newItem('assets/shield.png', 165, 185);
newItem('assets/staff.png', 600, 100);

