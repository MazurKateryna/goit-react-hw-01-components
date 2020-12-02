import React from 'react';
import Profile from './Profile/social-profile';
import Statistics from './Statistics/statistics'
import FriendList from './Friends/friend-list'
import TransactionHistory from './Transaction/transaction-history'

import user from '../json/user.json'
import statisticalData from '../json/statistical-data.json'
import friends from '../json/friends.json'
import transactions from '../json/transaction.json'

export default function App() {
 return (
 <div className="wrapper">
   <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory transactions={transactions} />
</div>)
}
