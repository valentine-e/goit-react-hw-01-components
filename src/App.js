import Profile from './components/profile/profile.js';
import user from './components/profile/profile.json';

import Statistics from './components/stats/statistics.js';
import statsData from './components/stats/stats.json';

import FriendsList from './components/friendsList/friendsList.js';
import friendsData from './components/friendsList/friendsList.json';

import TransactionHistory from './components/transactions/transactionHistory.js';
import transactionsData from './components/transactions/transactions.json';

export default function App() {
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
}
