import React from 'react';
import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistics from './Statistics/Statistics';
import data from "./Statistics/data.json"
import FriendsList from './FriendsList/FriendsList';
import friends from "./FriendsList/friends.json";
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transaction from "./TransactionHistory/transactions.json"

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transaction} />

    </>
  );
};

export default App;
