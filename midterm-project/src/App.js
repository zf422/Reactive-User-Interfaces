import React, { Component } from 'react';
import './App.css';
import Output from './Output';
import Button from './Button';
import Checkbox from './Checkbox';
import Searchbox from './Searchbox';

class App extends Component {
  constructor(props) {
    super(props);
    this.onSearch=this.onSearch.bind(this);
    this.sortByFirst=this.sortByFirst.bind(this);
    this.sortByLast=this.sortByLast.bind(this);
    this.filterCountry=this.filterCountry.bind(this);
    this.showPhone=this.showPhone.bind(this);
    this.showAddress=this.showAddress.bind(this);
    this.showEmail=this.showEmail.bind(this);
    this.state={
      showPhone: '',
      showAddress: '',
      showEmail: '',
      value: 'Filter by Country',
      sort: 'first',
      search: '',
      contacts: [
        {first: 'John', last: 'Doe', address:'1555 Century Avenue, Pudong, Shanghai, China', phone:'(+86) 137-6455-5149', email: 'john.doe@gmail.com'},
        {first: 'Jane', last: 'Doe', address:'3680 Zhangyang Road, Pudong, Shanghai, China', phone:'(+86) 137-1325-4674', email: 'jane.doe@gmail.com'},
        {first: 'Harry', last: 'Houdini', address:'1357 Barroilhet Avenue, Hillsborough, CA, United States', phone:'(+1) 650-200-5918', email: 'harry.houdini@hotmail.com'},
        {first: 'Omar', last: 'Tariq', address:'House 18, Street 10, Sector G-11/1, Islamabad, Pakistan', phone:'(+92) 321-455-7810', email: 'omartariq@yahoo.com'},
        {first: 'James', last: 'Wang', address:'129 Third Avenue, New York, NY, United States', phone:'(+1) 450-765-9987', email: 'jameswang@gmail.com'},
        {first: 'Zareen', last: 'Mansoor', address:'House 23, Street 15, Sector C, DHA Phase 1, Karachi, Pakistan', phone:'(+92) 311-856-0808', email: 'z.mansoor@yahoo.com'},
        {first: 'Kate', last: 'Young', address:'900 Willow Road, Suite B, Menlo Park, CA, United States', phone:'(+1) 415-376-2690', email: 'kate_young@gmail.com'},
        {first: 'Rajesh', last: 'Singh', address:'New World Complex, Apartment No. 32, Sector 14, Dwarka, New Delhi, India', phone:'(+91) 333-559-9876', email: 'rajeshsingh@gmail.com'},
        {first: 'Amit', last: 'Randhawala', address:'200 Hudson Road, Apartment 1208, Building A, San Francisco, CA, United States', phone:'(+1) 651-987-0463', email: 'amrandhawala@hotmail.com'},
        {first: 'Amina', last: 'Sabanovic', address:'526 Zaozhuang Road, Pudong, Shanghai, China', phone:'(+86) 130-5455-6677', email: 'em3459@yahoo.com'}
      ]
    };
  }

  showPhone(on) {
    this.setState({
      showPhone: on
    });
  }

  showAddress(on) {
    this.setState({
      showAddress: on
    });
  }
  showEmail(on) {
    this.setState({
      showEmail: on
    });
  }

  filterCountry(event) {
    this.setState({
      value: event.target.value
    });
  }

  sortByFirst() {
  this.setState({
  sort: 'first'
  });

  }

  sortByLast() {
    this.setState({
      sort: 'last'
    });
  }

  onSearch(query) {
    this.setState({
      search: query
    });

  }
  render() {
    let arrCopy = this.state.contacts.slice();

    if(this.state.value === 'China') {
      arrCopy= arrCopy.filter(contacts => {
        return contacts.address.match('China');
      });
    }

    if(this.state.value === 'India') {
      arrCopy= arrCopy.filter(contacts => {
        return contacts.address.match('India');
      });
    }

    if(this.state.value === 'Pakistan') {
      arrCopy= arrCopy.filter(contacts => {
        return contacts.address.match('Pakistan');
      });
    }

    if(this.state.value === 'United States') {
      arrCopy= arrCopy.filter(contacts => {
        return contacts.address.match('United States');
      });
    }

    if(this.state.sort === 'first') {
    arrCopy = arrCopy.sort((contactA, contactB) => contactA.first > contactB.first);

    if (this.state.sort === 'last')
      arrCopy.reverse();
    }


    if(this.state.search !== '') {
      arrCopy= arrCopy.filter(contacts => {
        return contacts.first.match(this.state.search) || contacts.last.match(this.state.search) || contacts.address.match(this.state.search)
        || contacts.phone.match(this.state.search) || contacts.email.match(this.state.search);
      });
    }

    const addressBook = arrCopy.map((contacts, i) => {
      return <div key={i} className="contacts" key={i}><h3>{contacts.first} {contacts.last}</h3>
      {this.state.showPhone && <p className="phone">{contacts.phone}</p>}
      {this.state.showAddress && <p className="address">{contacts.address}</p>}
      {this.state.showEmail && <p className="email">{contacts.email}</p>}
        </div>
    })
    return (
      <div className="App">
        <div className="Nav">
          <h3>Contacts</h3>
            <Searchbox label="search" onChange={this.onSearch} />

          <div className="checkboxText">
            <Checkbox label="Phone" onChange={this.showPhone} />
            <Checkbox label="Address" onChange={this.showAddress} />
            <Checkbox label="Email" onChange={this.showEmail} />
          </div>
      </div>

          <div className="list">
            <Output content={addressBook} />
          </div>

    <div className="Footer">
        <select value={this.state.value} onChange={this.filterCountry}>
          <option>Filter by Country</option>
          <option value="China" >China</option>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
          <option value="United States">United States</option>
        </select>
      <Button label="Sort by First Name" onClick={this.sortByFirst} />
      <Button label="Sort by Last Name" onClick={this.sortByLast} />
    </div>
  </div>
    );
  }
}

export default App;
