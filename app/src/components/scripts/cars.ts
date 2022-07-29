export class Cars {
    async getCars() {
        return (await fetch('http://127.0.0.1:3000/garage', { method: 'GET' })).json();
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
