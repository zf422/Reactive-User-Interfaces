import React, { Component } from 'react';
import './App.css';
import Output from './Output';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      contacts: [
        {name: 'John Doe', address:'1555 Century Avenue, Pudong, Shanghai, China', phone:'(+86) 137-6455-5149', email: 'john.doe@gmail.com'},
        {name: 'Jane Doe', address:'3680 Zhangyang Road, Pudong, Shanghai, China', phone:'(+86) 137-1325-4674', email: 'jane.doe@gmail.com'},
        {name: 'Harry Houdini', address:'1357 Barroilhet Avenue, Hillsborough, CA, United States', phone:'(+1) 650-200-5918', email: 'harry.houdini@hotmail.com'},
        {name: 'Omar Tariq', address:'House 18, Street 10, Sector G-11/1, Islamabad, Pakistan', phone:'(+92) 321-455-7810', email: 'omartariq@yahoo.com'},
        {name: 'James Wang', address:'129 Third Avenue, New York, NY, United States', phone:'(+1) 450-765-9987', email: 'jameswang@gmail.com'},
        {name: 'Zareen Mansoor', address:'House 23, Street 15, Sector C, DHA Phase 1, Karachi, Pakistan', phone:'(+92) 311-856-0808', email: 'z.mansoor@yahoo.com'},
        {name: 'Kate Young', address:'900 Willow Road, Suite B, Menlo Park, CA, United States', phone:'(+1) 415-376-2690', email: 'kate_young@gmail.com'},
        {name: 'Rajesh Singh', address:'New World Complex, Apartment No. 32, Sector 14, Dwarka, New Delhi, India', phone:'(+91) 333-559-9876', email: 'rajeshsingh@gmail.com'},
        {name: 'Amit Randhawala', address:'200 Hudson Road, Apartment 1208, Building A, San Francisco, CA, United States', phone:'(+1) 651-987-0463', email: 'amrandhawala@hotmail.com'},
        {name: 'Amina Sabanovic', address:'526 Zaozhuang Road, Pudong, Shanghai, China', phone:'(+86) 130-5455-6677', email: 'em3459@yahoo.com'}
      ]
    };
  }
  render() {
    const addressBook = this.state.contacts.map((contacts, i) => {
      return <div className="contacts" key={i}><h3>{contacts.name}</h3>
      <p className="phone">{contacts.phone}</p>
       <p className="address">{contacts.address}</p>
        <p className="email">{contacts.email}</p>
        </div>
    })
    return (
      <div className="App">
<Output content={addressBook} />
      </div>
    );
  }
}

export default App;
