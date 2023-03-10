
class Test {

    constructor() {
        const testNameEl = document.querySelector('.player-name');
        testNameEl.textContent = this.getTestName();
    }
    getTestName() {
        return localStorage.getItem('userName') ?? 'No post has made yet';
    }

}

const test = new Test();