import './style.less';
import html from './clouds.html?raw'
import {getRandom, getRandomCenter} from "./helper.ts";
interface CloudsOptions {
    element: string | HTMLElement,
    density: number,
}


export class Cloud{
    private cloudsContainerList: HTMLElement[] | undefined;
    private childEls: SVGElement[] = [];

    private options: CloudsOptions = {element:'#app', density:1};
    private cloudsAll: number = 1

    constructor(options: Partial<CloudsOptions> = {}) {
        this.options = {
            ...this.options,
            ...options
        }
        this.cloudsAll = this.options.density;
        const section = document.createElement('section');
        section.innerHTML = html;
        this.cloudsContainerList = [
            section.querySelector(`[\\#cloudsContainer1]`)!,
            section.querySelector(`[\\#cloudsContainer2]`)!,
            section.querySelector(`[\\#cloudsContainer3]`)!
        ]

        if (typeof this.options.element === 'string') {
            document.querySelector<HTMLDivElement>(this.options.element)!.appendChild(section);
        } else {
            this.options.element!.appendChild(section)
        }

    }

    public init(){
        while (this.childEls.length) {
            const lastPoint = this.childEls.pop()!;
            lastPoint.remove();
        }
        this.cloudsContainerList!.forEach(cloud => {
            this.cloudsDraw(cloud);
        })
    }

    public update(options: Partial<CloudsOptions> = {}){
        this.options = {
            ...this.options,
            ...options
        }
        this.cloudsAll = this.options.density;
        this.init()
    }

    private cloudsDraw(el: any) {
        const svgNS = "http://www.w3.org/2000/svg";

        for (let i = 0; i < 50 + (100 * this.cloudsAll / 0.5); i++) {
            const child = document.createElementNS(svgNS, "g");
            this.childEls.push(child)
            child.innerHTML = this.getCloudBlock()
            el.appendChild(child)
        }
    }

    private getCloudBlock() {

        const r1 = getRandom(1, 8)
        const r2 = getRandom(10, 15)
        const cx1 = getRandomCenter(50 - (80 * this.cloudsAll), 50 + 70 * this.cloudsAll);
        const dcx2 = getRandomCenter(1, 20)
        const cy1 = getRandom(40, 30);
        const cy2 = getRandom(cy1 - 10 * this.cloudsAll, cy1 - 20 * this.cloudsAll)
        const dur = getRandom(10, 20)
        const begin = getRandom(0, 20)
        return `
           <circle cx="${cx1}" cy="20" r="7">
                        <animate attributeName="opacity" values="0;1;1;0.2;0" begin="-${begin}s" dur="${dur}s" repeatCount="indefinite" ></animate>
                        <animate attributeName="cy" values="${cy1};${cy2}" begin="-${begin}s" dur="${dur}s" repeatCount="indefinite" ></animate>
                        <animate attributeName="cx" values="${cx1};${cx1 + dcx2}" begin="-${begin}s" dur="${dur}s" repeatCount="indefinite" ></animate>
                        <animate attributeName="r" values="${r1};${r2}" dur="${dur}s" begin="-${begin}s"  repeatCount="indefinite" ></animate>
           </circle>
        `
    }
}

//(window as any).Clouds = Clouds;

//new Clouds({selector:'#app',density: 0.6}).init()