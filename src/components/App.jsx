import Profile from './Profile/Profile.jsx';
import user from '../data/profile.json';

import Statistics from './Statistics/Statistics.jsx';
import statsData from '../data/statistics.json';

import FriendsList from './FriendsList/FriendsList.jsx';
import friendsData from '../data/friendsList.json';

import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';
import transactionsData from '../data/transactionHistory.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendsList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </div>
  );
};
