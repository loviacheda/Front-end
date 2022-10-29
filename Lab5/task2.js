function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
};
const shownColor = document.getElementById('shown_color');
const cellColor = document.getElementById('cell_color');


cellColor.addEventListener('mouseover', () => cellColor.style.backgroundColor = getRandomColor());
cellColor.addEventListener('click', () => cellColor.style.backgroundColor = shownColor.value)
const trs = document.getElementsByTagName('tr');
for ( let tr of trs) {
    tr
        .addEventListener('dblclick', e => {
            const el = e. target;
            const trs = document.getElementsByTagName('tr');
            for ( let tr of trs) {
                if (tr != el) {
                    tr.style.backgroundColor="#16F5D9";
                }


                    }
        });
}
