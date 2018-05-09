class ScreenRuler {
    constructor(model, lineWidth, gridWidth, gridHeight) {
        this.drawRuler = this.drawRuler.bind(this);
        this.drawCanvas = this.drawCanvas.bind(this);
        this.model = model;
        this.lineWidth = lineWidth || 2;
        this.gridWidth = gridWidth || 100;
        this.gridHeight = gridHeight || 100;
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.canvas.id = 'canvasRuler';
        this.canvas.style.pointerEvents = 'none';
        this.context = this.canvas.getContext('2d');
    }

    drawRuler() {


        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.canvas.style.top = 0 + 'px';


        if (this.model === 'strong') {
            document.body.addEventListener('click', (e) => {
                let symbolCoordinate = document.createElement('div');
                symbolCoordinate.id = 'symbolCoordinate';
                document.body.appendChild(symbolCoordinate);
                symbolCoordinate.style.position = 'fixed';
                symbolCoordinate.style.left = e.clientX + 'px';
                symbolCoordinate.style.top = e.clientY + 'px';
                symbolCoordinate.innerHTML = `（${e.clientX},${e.clientY}）`;
                symbolCoordinate.addEventListener('mouseout', () => {
                    document.body.removeChild(symbolCoordinate)
                })
            }, false)
            for (let i = 0; i < this.canvas.width / this.gridWidth; i++) {
                this.context.moveTo(i * this.gridWidth, 0);
                this.context.lineTo(i * this.gridWidth, window.innerWidth);
            }
            for (let i = 0; i < this.canvas.height / this.gridHeight; i++) {
                this.context.moveTo(0, i * this.gridHeight);
                this.context.lineTo(window.innerWidth, i * this.gridHeight);
            }

            this.context.lineWidth = this.lineWidth;
            this.context.strokeStyle = this.strokesStyle;
            this.context.fillStyle = "#9e9e9e40";
        } else {
            document.body.addEventListener('click', (e) => {
                let symbolCoordinate = document.createElement('div');
                symbolCoordinate.id = 'symbolCoordinate';
                document.body.appendChild(symbolCoordinate);
                symbolCoordinate.style.position = 'fixed';
                symbolCoordinate.style.left = e.clientX + 'px';
                symbolCoordinate.style.top = e.clientY + 'px';
                symbolCoordinate.innerHTML = `（${e.clientX},${e.clientY}）`;
                symbolCoordinate.addEventListener('mouseout', () => {
                    document.body.removeChild(symbolCoordinate)
                })
            }, false)
            for (let i = 0; i < this.canvas.width / 10; i++) {
                this.context.rect(0, 0, this.canvas.width, 20);
                this.context.moveTo(i * 10, 10)
                this.context.lineTo(i * 10, 0);
                this.context.moveTo(i * 50, 10)
                this.context.lineTo(i * 50, 20);

                this.context.font = "15px serif";
                //2. 使用`fillStyle`设置字体颜色。
                this.context.fillStyle = "#000";
                //3. 使用`fillText()`方法显示字体。
                this.context.fillText(`${i * 100}`, i * 100, 19);

            }
            for (let i = 0; i < this.canvas.height / 10; i++) {
                this.context.rect(0, 0, 20, this.canvas.height);
                this.context.moveTo(0, i * 10)
                this.context.lineTo(10, i * 10);
                this.context.moveTo(10, i * 50)
                this.context.lineTo(20, i * 50);

                this.context.font = "15px serif";
                //2. 使用`fillStyle`设置字体颜色。
                this.context.fillStyle = "#000";
                //3. 使用`fillText()`方法显示字体。
                this.context.fillText(`${i * 100}`, 11, i * 100);


            }
            this.context.lineWidth = this.lineWidth;
            this.context.strokeStyle = this.strokesStyle;
            this.context.fillStyle = "#9e9e9e40";

        }

        this.context.fill();
        this.context.globalAlpha = 0.2;
        this.context.stroke();
    }

    drawCanvas() {
        this.drawRuler()
        window.addEventListener('resize', this.drawRuler, false);

    }

}

export default ScreenRuler;