import React, { Component } from 'react';

class TopContributors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: '0x0',
          position: 1,
          name: 'John Lennon',
          amount: '154.95',
          percent: '14.3'
        },
        {
          id: '0x1',
          position: 2,
          name: 'Paul McCartney',
          amount: '143.95',
          percent: '13.1'
        },
        {
          id: '0x2',
          position: 3,
          name: 'George Harrison',
          amount: '130',
          percent: '10.2'
        },
        {
          id: '0x3',
          position: 4,
          name: 'Ringo Starr',
          amount: '111.11',
          percent: '9.8'
        },
        {
          id: '0x4',
          position: 5,
          name: 'John Lennon',
          amount: '154.95',
          percent: '14.3'
        },
        {
          id: '0x5',
          position: 6,
          name: 'Paul McCartney',
          amount: '143.95',
          percent: '13.1'
        },
        {
          id: '0x6',
          position: 7,
          name: 'George Harrison',
          amount: '130',
          percent: '10.2'
        },
        {
          id: '0x7',
          position: 8,
          name: 'Ringo Starr',
          amount: '111.11',
          percent: '9.8'
        },
        {
          id: '0x8',
          position: 9,
          name: 'John Lennon',
          amount: '154.95',
          percent: '14.3'
        },
        {
          id: '0x9',
          position: 10,
          name: 'Paul McCartney',
          amount: '143.95',
          percent: '13.1'
        }
      ]
    };
  }

  render() {
    const renderUser = (user) => (
      <tr key={user.id}>
        <td>{user.position}</td>
        <td>{user.name}</td>
        <td>{user.amount} ETH</td>
        <td>{user.percent}%</td>
      </tr>
    );

    return (
      <div>
        <h2>Top contributors</h2>
        <table className="pt-html-table pt-small" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map(renderUser)}
        </tbody>
        </table>
      </div>
    );
  }
}

export default TopContributors;
