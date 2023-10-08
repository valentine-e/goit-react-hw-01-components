import Profile from './profile/profile.jsx';
import user from './profile/profile.json';

import Statistics from './stats/statistics.jsx';
import statsData from './stats/statistics.json';

import FriendsList from './friendsList/friendsList.jsx';
import friendsData from './friendsList/friendsList.json';

import TransactionHistory from './transactions/transactionHistory.jsx';
import transactionsData from './transactions/transactionHistory.json';

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
