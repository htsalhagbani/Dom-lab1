//part1
let Myname=document.getElementsByClassName("name")[0];
Myname.style.color='green';
Myname.style.backgroundColor='gray';

//part2
let paragraph = document.getElementById('major');
paragraph.className = 'major';
paragraph.style.fontWeight='bold';


//part3
let image = document.getElementsByTagName('img')[0]; 
image.src='img.jfif';

//part4
let element = document.querySelector('#list');
for (let i = 1; i <= 3; i++) {
    let li = document.createElement('li');
    li.textContent = "item " + i;
    li.style.color='rgb(177, 74, 160)';
    li.style.border = '1px solid #gray'; 
    li.style.padding = '10px'; 
    li.style.margin = '13px'; 
    element.appendChild(li);

}

//part5
let tableBox = document.getElementById('table');

let table = document.createElement('table');
table.className = 'table'; 

for (let i = 1; i <= 2; i++) {
    let row = document.createElement('tr');
    for (let j = 1; j <= 3; j++) {
        let td = document.createElement('td');
        td.textContent = `Row+cell :  ${i,j}`;
        row.appendChild(td);
    }
    table.appendChild(row);
}

tableBox.appendChild(table);
