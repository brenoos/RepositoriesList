import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import { Repository } from '../../store/ducks/repositories/types';
import { loadRequest } from '../../store/ducks/repositories/actions';

import RepositoryItem from '../RepositoryItem';

const RepositoryList: React.FC = () => {
  const repositories = useSelector(
    (state: ApplicationState) => state.repositories.data
  );
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRequest());
  }, [dispatch]);

  return (
    <ul>
      {repositories.map((repository: Repository) => (
        <RepositoryItem key={repository.id} repository={repository} />
      ))}
    </ul>
  );
};

export default RepositoryList;
