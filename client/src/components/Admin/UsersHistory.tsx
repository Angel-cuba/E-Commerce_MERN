import React from 'react';
import { useSelector } from 'react-redux';
import { getAllHistory } from '../../api/admin';
import { AppState } from '../../types/ProductType';
import Navbar from '../Navbar';
import '../../styles/components/User/UsersHistory.scss';
import { Link } from 'react-router-dom';
import Loading from '../Loading';

const UsersHistory = () => {
  const { user } = useSelector((state: AppState) => state.user);
  const [fetchHistory, setFetchHistory] = React.useState<any>(null);
  const [history, setHistory] = React.useState<any>(null);
  console.log(history);
  console.log('the history of all users', fetchHistory);

  React.useEffect(() => {
    getAllHistory(user?.email).then((res) => setFetchHistory(res));

  }, [user]);

  if (!fetchHistory) {
    return <Loading />;
  }


  const PurchasesByUser = (thisUserId: any) => {
    console.log('click', thisUserId);
    const response = fetchHistory.filter((purchase: any) => {
      if (purchase.user._id === thisUserId) {
        return purchase.products;
      }
      return null;
    });
    setHistory(response);
  };

  //Fetching uniques users
  const ids = fetchHistory.map((x: any) => x.user._id);
  const filtered = fetchHistory.filter(
    (history: any, index: number) => !ids.includes(history.user._id, index + 1)
  );

  return (
    <div className="users">
      <Navbar />
      <Link to="/admin">Back</Link>
      <div className="user_content">
        {!fetchHistory ? (
          <Loading />
        ) : (
          filtered.map((product: any, index: number) => {
            return (
              <div key={index} className="user">
                <div className="user-face">
                  <div className="user-image">
                    <img src={product.user.picture} alt="user" />
                  </div>
                  <div className="user-info">
                    <h1>
                      {product.user.name} {product.user.lastname}{' '}
                    </h1>
                  </div>
                </div>
                <div className="user-history" onClick={() => PurchasesByUser(product.user._id)}>
                  <h3>Information</h3>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default UsersHistory;
