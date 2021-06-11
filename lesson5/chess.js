window.onload = () => {
    new ChessDesk();
};

class ChessDesk
{
    extraSize = 20;

    constructor()
    {
        let body = document.querySelector('body');

        // CSS reset
        body.style.margin = '0';
        body.style.padding = '0';

        // Desk will be centered
        body.style.display = 'flex';
        body.style.justifyContent = 'center';
        body.style.alignItems = 'center';

        // Determine desk size
        let size = body.clientHeight;
        if (body.clientWidth < size) {
            size = body.clientWidth;
        }

        // Make container and set size
        let desk = document.createElement('div');
        desk.style.height = size + 'px';
        desk.style.width = size + 'px';
        // desk.style.background = 'red';

        // Classic
        let table = document.createElement('table');
        table.style.borderCollapse = 'collapse';
        table.style.borderSpacing = '0';
        table.style.height = '100%';
        table.style.width = '100%';

        // Letters from above
        table.appendChild(this.generateLettersRow(true))

        let cellSize = (size - 8 - this.extraSize * 2) / 8;

        for (let i = 8; i >= 1; i--) {
            let tr = document.createElement('tr');

            tr.appendChild(this.generateDigitColumn(i));

            for (let j = 1; j <= 8; j++) {
                let td = document.createElement('td');

                td.style.backgroundColor = (j + i) % 2 === 1 ? '#FFF' : '#000'
                td.style.border = '1px solid #000';
                td.style.height = cellSize + 'px';
                td.style.width = cellSize + 'px';

                tr.appendChild(td);
            }

            tr.appendChild(this.generateDigitColumn(i, true));
            table.appendChild(tr);
        }

        // Letters from below
        table.appendChild(this.generateLettersRow())

        desk.appendChild(table);
        body.appendChild(desk);
    }

    generateDigitColumn(digit, rotate) {
        let td = document.createElement('td');
        td.innerHTML = digit;
        td.style.width = this.extraSize + 'px';
        td.style.textAlign = 'center';
        td.style.verticalAlign = 'middle';

        if (typeof rotate !== 'undefined' && rotate) {
            td.style.transform = 'rotate(180deg)'
        }

        return td;
    }

    generateLettersRow(rotate) {
        let tr = document.createElement('tr');
        for (let i = 0; i <= 9; i++) {
            let td = document.createElement('td');

            if (i > 0 && i < 9) {
                td.innerHTML = String.fromCharCode(64 + i);
            }

            td.style.height = this.extraSize + 'px';
            td.style.lineHeight = this.extraSize + 'px';
            td.style.textAlign = 'center';
            td.style.verticalAlign = 'middle';

            if (typeof rotate !== 'undefined' && rotate) {
                td.style.transform = 'rotate(180deg)'
            }

            tr.appendChild(td);
        }

        return tr;
    }
}