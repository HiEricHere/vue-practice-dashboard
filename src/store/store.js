const defaultError = 'No information available at this time';

const storeHelper = (status) => {
  switch (status) {
    case 'pending':
      return 'Loading...';
    case 'error':
      return defaultError;
    default:
      return false;
  }
};

const store = {
  state: {
    name: '',
    email: '',
    promotions: [],
  },
  set(key, value) {
    this.state[key] = value;
  },
  get(url) {
    let pendingMessage = storeHelper('pending');
    this.set('name', pendingMessage);
    this.set('email', pendingMessage);
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        Object.keys(data).forEach((key) => {
          this.set(key, data[key]);
        });
      })
      .catch((err) => {
        console.log(err);
        Object.keys(this.state).forEach((key) => {
          this.set(key, defaultError);
        });
        pendingMessage = storeHelper('error');
        this.set('name', pendingMessage);
        this.set('email', pendingMessage);
      });
  },
};

export default store;
