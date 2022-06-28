import React from 'react';
import UserDetails from './UserDetails';

const SingleUserHistory = ({ history, setOpenHistory }: any) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpenHistory(false);
  };
  const handleOpen = () => {
    setOpen(!open);
  }
  return (
    <div className="outside">
      <div className="singleHistory-info">
      <button onClick={handleClose} className="btn-close">
        Close
      </button>
      {history &&
        history.map((single: any) => {
          return (
            <div className="single">
              {' '}
              {/* <div className="line"></div> */}
              {single.createdAt.split('T')[0]} <span  onClick={handleOpen}>Purchases: {single.products.length}</span>
              { single.products.map((product: any, index: number) => (
                <UserDetails product={product} index={index} />
              ))}
            </div>
          );
        })}
    </div>
    </div>
  );
};

export default SingleUserHistory;
