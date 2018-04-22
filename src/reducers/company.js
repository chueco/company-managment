const initialState = {
  companies: [{
    name: 'pepe',
    address: 'asd',
    country: 'Argentina',
    phone: '1231',
    cuit: '321',
  },
  {
    name: 'juan',
    address: 'abvxc',
    country: 'Argentina',
    phone: '5531',
    cuit: '551',
  },
  {
    name: 'peasdasde',
    address: 'a543',
    country: 'Argentina',
    phone: '4543534',
    cuit: '124543',
  }],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
