export class Cars {
    async getCars(page = '1', limit = '7') {
        const response = await fetch(`http://127.0.0.1:3000/garage?_page=${page}&_limit=${limit}`, { method: 'GET' });
        return {
            car: await response.json(),
            count: response.headers.get('X-Total-Count'),
        };
    }

    async addCar(obj: { name: string; color: string }) {
        await fetch('http://127.0.0.1:3000/garage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: obj.name, color: obj.color }),
        });
    }

    addListenerCreateCar() {
        (<HTMLButtonElement>document.querySelector('.car-create__button')).addEventListener('click', () => {
            this.addCar(this.getCreateCarValues());
        });
    }

    getCreateCarValues() {
        const carName = (<HTMLInputElement>document.querySelector('.car-create__name')).value;
        const carColor = (<HTMLInputElement>document.querySelector('.car-create__color')).value;
        return {
            name: carName,
            color: carColor,
        };
    }
}

export const NEW_CARS = new Cars();
